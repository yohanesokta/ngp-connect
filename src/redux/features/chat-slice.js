import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    chat : {
        active : false,
        chatID : "",
        chat   : [],
        user   : [],
    }
}

export const chat = createSlice({
    name : "chat",
    initialState,
    reducers : {
        setChat  : (state,action)  => {
            state.chat.chatID = action.payload;
            state.chat.active = true
        },
        updateChat : (state,action) => {
            state.chat.chat = action.payload
        },
        updateUser : (state,action) => {
            state.chat.user = action.payload
        }

    }
})

export const {setChat , updateChat , updateUser} = chat.actions
export default chat.reducer