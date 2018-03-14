import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
  render() {
    return (
      <form>
        <h3>Crea Un Nuovo Post</h3>
        <div className="form-group">
          <label>Titolo</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Categorie</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Titolo</label>
          <textarea className="form-control" />
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
