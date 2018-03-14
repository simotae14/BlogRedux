import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render() {
    const { fields: { title, categories, content } } = this.props;
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Crea Un Nuovo Post</h3>
        <div className="form-group">
          <label>Titolo</label>
          <input type="text" className="form-control" {...title} />
        </div>
        <div className="form-group">
          <label>Categorie</label>
          <input type="text" className="form-control" {...categories} />
        </div>
        <div className="form-group">
          <label>Titolo</label>
          <textarea className="form-control" {...content} />
        </div>
        <button type="submit" className="btn btn-primary">Invia</button>
      </form>
    );
  }
}

// connect: il primo argomento è mapStateToProps, il secondo mapDispatchToProps
// reduxForm: il primo argomento è la configuarazione della form, il secondo mapStateToProps ed
// il terzo è mapDispatchToProps
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);
