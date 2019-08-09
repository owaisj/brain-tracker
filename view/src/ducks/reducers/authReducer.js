const initialState = { name: 'Guest' };
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        name: action.name,
        id: action.id
      };
    case 'USER_LOGOUT':
      return 'Guest';
    default:
      return state;
  }
}
