import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    chat : {
        active : false,
        chatID : "",
        chat   : []
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
        }

    }
})

export const {setChat , updateChat} = chat.actions
export default chat.reducer