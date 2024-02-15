// actions.js
export const setLoggedInUserEmail = (email) => {
    return {
      type: 'SET_LOGGED_IN_USER_EMAIL',
      payload: email,
    };
  };
  