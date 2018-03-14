import React, {Component} from 'react';
import { connect } from 'react-redux';
// importo l'action creator
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>Elenco dei post</div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
