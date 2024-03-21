'use client'

import Navigation from "./Navigation"
import "@/components/Styles/RoomChat/page.scss"
import { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import RenderChat from "./RenderChat"
import { MessageSender } from "@/libs/Class/MessageSender"

const RoomChat = () => {

    const form = useRef();
    const message_input = useRef();
    const [RoomData, SetRoomData] = useState('')
    let data = useSelector((state) => state.userReducer)
    let {chat} = useSelector(state => state.chatReducer)
    useEffect(() => {
        if (data.userclass.uuid) {
            SetRoomData(<ClassRoom data={data.userclass} />)
        }
        
    }, [data]);

    const onMessageSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        MessageSender(data.userclass.uuid,data.userdata.sub,message_input.current.value)
        message_input.current.value = ""
    }


    const ClassRoom = ({ data }) => {
        // console.log(data)
        return (<>
            <Navigation name={data.nama_kelas} anggota={data.members.length} code={data.kode} />
            <div className="container">
                <div className="chat">
                    <div className="message" id="message-field">
                        <RenderChat uuid={data.uuid}/>
                    </div>
                    <form action="" onSubmit={onMessageSubmit}>
                        <div className="input-message">
                            <button><i className="fa-solid fa-plus"></i></button>
                            <input type="text" ref={message_input}/>
                            <button><i className="fa-solid fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
                <div className="anggota"></div>
            </div>
        </>)
    }

    return (
        <div className="RoomChat-container">
            {RoomData}
        </div>
    )
}

export default RoomChat
