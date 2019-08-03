// This is test data used in the graph component
const initialState = {
  testData: []
};

export default function sleepReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_SLEEP_ENTRY':
      return {
        testData: [
          ...state.testData,
          {
            day: action.date,
            hours: action.value
          }
        ]
      };

    default:
      return state;
  }
}
