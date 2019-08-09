// This is test data used in the graph component
const initialState = {
  testData: []
};

export default function moodReducer(state = initialState, action) {
  switch (action.type) {
    // TODO: Change to identify this as dummy
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

    /*
      TODO: POST MOOD ENTRY
      In the mood form component, user id should be grabbed from the state (state.user.id)
      Once data has been posted, grab the whole table and added it to the state
      Note that this logic can be repeated for the sleep
    */

    default:
      return state;
  }
}
