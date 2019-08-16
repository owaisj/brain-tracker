/*
  TODO
  Modify Journal Model to include the title
  Create Reducer
  - Actions
    - Add post
    - Remove post
  Add it to rootReducer
  Remove dependency on JSON placeholder in BlogPosts Component
  Dispatch Action from BlogForm
  Thunk for REST usage
*/

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_JOURNAL_POSTS':
      return action.allPosts;
    case 'ADD_POST':
      return state;
    case 'REMOVE_POST':
      return state;
    default:
      return state;
  }
}
