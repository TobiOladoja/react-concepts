const initState = {
  posts: [
    {
      id: '1',
      title: 'Good Life Title Heee',
      body: "I'm bored so this is the big body!"
    },
    {
      id: '2',
      title: 'Decent Life Title Yoo',
      body: "I'm okay I guess, so this is the big body!"
    },
    {
      id: '3',
      title: 'Excellent Life Title Hmm',
      body: "I'm excited so this is the big body!"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
