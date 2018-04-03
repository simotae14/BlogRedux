import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

const FIELDS = {
  title: {
    type: 'input',
    label: 'Title for Post'
  },
  categories: {
    type: 'input',
    label: 'Enter some categories for this post'
  },
  content: {
    type: 'textarea',
    label: 'Post Contents'
  }
};

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // post creato, naviga vs index usando this.context.router.push e il path
        this.context.router.push('/');
      });
  }

  // metodo che renderizza la porzione di html per ogni campo
  renderField(fieldConfig, field) {
    // recupero l'helper fornito da reduxForm
    const fieldHelper = this.props.fields[field];

    return (
      <div className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`}>
        <label>{fieldConfig.label}</label>
        <fieldConfig.type type="text" className="form-control" {...fieldHelper} />
        <div className="text-help">
          {fieldHelper.touched ? fieldHelper.error : ''}
        </div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Crea Un Nuovo Post</h3>
        {/* itero i campi da mostrare */}
        {_.map((FIELDS), this.renderField.bind(this))}
        <button type="submit" className="btn btn-primary">Invia</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  // itero ogni campo per avere il relativo msg di errore
  _.each(FIELDS, (type, field) => {
    // se non assume nessun valore
    if (!values[field]) {
      errors[field] = `Enter a ${field}`;
    }
  });

  return errors;
}

// connect: il primo argomento è mapStateToProps, il secondo mapDispatchToProps
// reduxForm: il primo argomento è la configuarazione della form, il secondo mapStateToProps ed
// il terzo è mapDispatchToProps
export default reduxForm({
  form: 'PostsNewForm',
  fields: _.keys(FIELDS),
  validate
}, null, { createPost })(PostsNew);
