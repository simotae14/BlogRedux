import React, { Component } from 'react';

class PostsShow extends Component {
  render() {
    return <div>Mostra il post {this.props.params.id}</div>;
  }
}

export default PostsShow;
