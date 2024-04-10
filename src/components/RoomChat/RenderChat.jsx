import React, { useEffect, useRef, useState } from 'react'
import Message from "./Message"
import {useSelector,useDispatch} from "react-redux"
import { MessageLoader } from '@/libs/Class/MessageLoader'
import { updateChat } from '@/redux/features/chat-slice'

const RenderChat = ({uuid , container }) => {
    // load chat from database first

    const dispatch = useDispatch()
    useEffect(()=>{
        MessageLoader(uuid).then( (e) => {
            dispatch(updateChat(e))
       })
    },[])

    const ScrollToBottom = () => {
        container.current.scrollTop = container.current.scrollHeight
    }

    const user = useSelector(state => state.userReducer)
    const chats = useSelector(state => state.chatReducer)
    useEffect(()=>{
        ScrollToBottom()
    },[chats])
    return (<>
            {chats.chat.chat.map((e,i) => {
                 let userinfo = {
                    data : {
                        image_profile : "/profile.png"
                    }
                }
                if(chats.chat.user){
                    userinfo = chats.chat.user.filter(f => f.data.sub == e.from)[0]
                }
                return(
                <div key={i}>
                  <Message fromMe={(e.from == user.userdata.sub ) ? true : false} data={{ chat: e, userinfo : userinfo?.data}} />
                </div>
                )
            })}
    </>
    )
}

export default RenderChat