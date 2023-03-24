import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    newUser: [],
    isFetching: false,
    error: false
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },

    // Delete user
    deletUserStart: (state) => {
      state.isFetching = false;
      state.error = false;
    },
    deleteUserSuccess: (state, action) => {
      state.isFetching = false;
      state.newUser.splice(
        state.newUser.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // Upadate

    updateUserStart: (state) => {
      state.isFetching = false;
      state.error = false;
    },
    updateUserSuccess: (state, action) => {
      state.isFetching = false;
      state.newUser[
        state.newUser.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.newUser;
    },
    updateUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // add user

    addUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addUserSuccess: (state, action) => {
      state.isFetching = false;
      state.newUser.push(action.payload);
    },
    addUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // get user

    getUserStart: (state) => {
      state.isFetching = false;
      state.error = false;
    },
    getUserSuccess: (state, action) => {
      state.isFetching = false;
      state.newUser = action.payload;
    },
    getUserFailure: (state) => {
      state.isFetching = false;
      state.error = false;
    }
  }
});

export const {
  loginStart,
  getUserStart,
  getUserSuccess,
  getUserFailure,
  loginSucces,
  loginFailure,
  logout,
  loginSuccess,
  deletUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
  addUserFailure,
  addUserStart,
  addUserSuccess
} = userSlice.actions;

export default userSlice.reducer;
