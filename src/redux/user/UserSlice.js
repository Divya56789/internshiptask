import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo : null
}


const UserSlice = createSlice({
    name: "user",
    initialState,

  reducers:{
    addUser : (state, action) => {
        state.userInfo = action.payload
    },
    removeUser : (state) => {
        state.userInfo = null
    }
  }
})

export const {addUser, removeUser} = UserSlice.actions;
export default UserSlice.reducer;