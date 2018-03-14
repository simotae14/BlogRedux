import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
// importo il Reducer per la ReduxForm
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
