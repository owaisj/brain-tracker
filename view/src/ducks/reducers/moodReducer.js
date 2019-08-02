// This is test data used in the graph component
const initialState = {
  testData: []
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MOOD_ENTRY':
      return {
        testData: [
          ...state.testData,
          {
            day: action.date,
            mood: action.value
          }
        ]
      };

    default:
      return state;
  }
}
