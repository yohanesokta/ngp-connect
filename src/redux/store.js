import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./features/user-slice"
import chatReducer from "./features/chat-slice"
export const store = configureStore({
    reducer:{
        userReducer,
        chatReducer
    }
})