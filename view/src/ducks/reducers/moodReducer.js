// This is test data used in the graph component
const initialState = {
  moodData: []
};

export default function moodReducer(state = initialState, action) {
  switch (action.type) {
    // TODO: Change to identify this as dummy
    case 'ADD_MOOD_ENTRY':
      return {
        moodData: [
          ...state.moodData,
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
    case 'GET_MOOD_DATA':
      return { moodData: action.newData };
    case 'CLEAR_MOOD_DATA':
      return { moodData: [] };
    default:
      return state;
  }
}
