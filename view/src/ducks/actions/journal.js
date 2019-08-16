import MZ from 'moment-timezone';

export const grabPosts = id => {
  return dispatch => {
    fetch(`/api/journal/${id}`)
      .then(res => res.json())
      .then(data => {
        const allPosts = data.reverse().map((item, index) => ({
          id: item.id,
          title: item.post_title,
          body: item.post_body,
          timestamp: MZ(item.createdAt)
            .tz('America/Chicago')
            .format('dddd Do YYYY [at] h:mm A')
        }));
        dispatch({ type: 'GET_JOURNAL_POSTS', allPosts });
      });
  };
};
