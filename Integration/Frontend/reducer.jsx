
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   user: null, 
//   isLoggedIn: false, 
// };

// const authSlice = createSlice({
//   name: 'auth', 
//   initialState, 
//   reducers: {
//     login: (state, action) => {
//       state.user = action.payload; 
//       state.isLoggedIn = true; 
//     },
//     logout: (state) => {
//       state.user = null; 
//       state.isLoggedIn = false; 
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;

// export const selectUser = (state) => state.auth.user;

// export default authSlice.reducer;



import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
