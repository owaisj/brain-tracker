const initialState = 'Guest';
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      return 'Owais';
    case 'USER_LOGOUT':
      return 'Guest';
    default:
      return state;
  }
}
