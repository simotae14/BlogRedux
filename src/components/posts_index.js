import React, {Component} from 'react';
import { connect } from 'react-redux';
// importo l'action creator
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to='/posts/new' className="btn btn-primary">
            Aggiungi un Post
          </Link>
        </div>
        Elenco dei post
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
