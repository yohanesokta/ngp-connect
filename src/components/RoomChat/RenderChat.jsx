import React, { useEffect, useState } from 'react'
import Message from "./Message"
import {useSelector,useDispatch} from "react-redux"
import { MessageLoader } from '@/libs/Class/MessageLoader'
import { updateChat } from '@/redux/features/chat-slice'

const RenderChat = ({uuid}) => {
    // load chat from database first
    const dispatch = useDispatch()
    useEffect(()=>{
        MessageLoader(uuid).then( (e) => {
            dispatch(updateChat(e))
       })
    },[])
    const chats = useSelector(state => state.chatReducer)
    const user = useSelector(state => state.userReducer)
    return (<>
        <div className="message" id="message-field">
            {chats.chat.chat.map((e,i) => {
                return(
                <div key={i}>
                  <Message fromMe={(e.from == user.userdata.sub ) ? true : false} data={{ text: e.text }} />
                </div>
                )
            })}
        </div>
    </>
    )
}

export default RenderChat