// This is test data used in the graph component
const initialState = {
  sleepData: []
};

export default function sleepReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_SLEEP_ENTRY':
      return {
        sleepData: [
          ...state.sleepData,
          {
            day: action.date,
            hours: action.value
          }
        ]
      };
    case 'GET_SLEEP_DATA':
      return { sleepData: action.newData };
    case 'CLEAR_SLEEP_DATA':
      return { sleepData: [] };
    default:
      return state;
  }
}
