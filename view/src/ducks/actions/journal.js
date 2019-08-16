export const grabPosts = id => {
  return dispatch => {
    fetch(`/api/journal/${id}`)
      .then(res => res.json())
      .then(data => {
        const allPosts = data.reverse().map((item, index) => ({
          title: item.post_title,
          body: item.post_body,
          timestamp: item.createdAt
        }));
        dispatch({ type: 'GET_JOURNAL_POSTS', allPosts });
      });
  };
};
export const removePost = id => id;
