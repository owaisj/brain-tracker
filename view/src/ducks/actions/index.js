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
