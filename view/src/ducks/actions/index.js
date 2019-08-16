import MZ from 'moment-timezone';

export const addMoodEntry = (date, value) => ({
  type: 'ADD_MOOD_ENTRY',
  date,
  value
});

export const addSleepEntry = (date, value) => ({
  type: 'ADD_SLEEP_ENTRY',
  date,
  value
});

export const setVisitibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const visibilityFilters = {
  SHOW_MOOD: 'SHOW_MOOD',
  SHOW_SLEEP: 'SHOW_SLEEP'
};

// Action Creator for getting mood data
export const getMoods = id => {
  return dispatch =>
    fetch(`/api/mood/${id}`)
      .then(res => res.json())
      .then(data => {
        const newData = data.map((item, index) => {
          return {
            day: MZ(item.createdAt)
              .tz('America/Chicago')
              .format('dddd Do YYYY h:mma z'),
            mood: item.mood_value
          };
        });
        dispatch({ type: 'GET_MOOD_DATA', newData });
      });
};

// Action Creater for getting sleep data
export const getSleeps = id => {
  return dispatch =>
    fetch(`/api/sleep/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const newData = data.map((item, index) => {
          return {
            day: MZ(item.createdAt)
              .tz('America/Chicago')
              .format('dddd Do YYYY'),
            hours: item.sleep_time
          };
        });
        dispatch({ type: 'GET_SLEEP_DATA', newData });
      });
};

export const loginUser = (username, password) => {
  return dispatch => {
    fetch('api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: username, password })
    })
      .then(res => {
        if (res.status !== 200) return 'Failed';
        return res.json();
      })
      .then(msg => {
        if (msg === 'AUTHENTICATED') {
          fetch('/api/users/data')
            .then(res => res.json())
            .then(data => {
              console.log(data);
              const output = data[0];
              // TODO: Grab User Data (GRAB_USER_DATA)
              // Add an endpoint for all user data
              dispatch({
                type: 'USER_LOGIN',
                name: `${output.firstName} ${output.lastName}`,
                id: output.id //Use this for mood & sleep data API calls (Joins)
              });
            });
        } else {
          alert('Try Again');
        }
      });
  };
};
