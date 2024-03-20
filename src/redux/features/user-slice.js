import {createSlice } from "@reduxjs/toolkit"

const initialState  = {
    userdata : {},
    userclass:{
    }
}

export const user = createSlice({
    name:"user",
    initialState,
    reducers : {
        UpdateUser : (state,actions) => {
            state.userdata = actions.payload;
        },
        UpdateClass: (state,actions) =>{
            state.userclass = actions.payload;
        }
    }
})


export const {UpdateUser,UpdateClass} =  user.actions
export default user.reducer