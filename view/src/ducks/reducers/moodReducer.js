// This is test data used in the graph component
const initialState = {
  testData: [
    { day: 'Mon', mood: 3 },
    { day: 'Tues', mood: 6 },
    { day: 'Wed', mood: 7 },
    { day: 'Thu', mood: 4 },
    { day: 'Fri', mood: 7 },
    { day: 'Sat', mood: 8 },
    { day: 'Sun', mood: 5 }
  ]
};

export default function authReducer(state = initialState, action) {
  return state;
}
