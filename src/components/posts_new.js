import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
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

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
})(PostsNew);
