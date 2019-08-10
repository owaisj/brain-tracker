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
  console.log('getMoods Started');
  console.log('Before Fetch');
  return dispatch =>
    fetch(`/api/mood/${id}`)
      .then(res => res.json())
      .then(data => {
        const newData = data.map((item, index) => {
          return {
            day: item.createdAt,
            mood: item.mood_value
          };
        });
        console.log(newData);
        dispatch({ type: 'GET_MOOD_DATA', newData });
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
              dispatch({
                type: 'USER_LOGIN',
                name: `${data.firstName} ${data.lastName}`,
                id: data.id //Use this for mood & sleep data API calls (Joins)
              });
            });
        } else {
          alert('Try Again');
        }
      });
  };
};
