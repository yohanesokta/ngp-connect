'use client'

import Navigation from "./Navigation"
import "@/components/Styles/RoomChat/page.scss"
import { useState, useEffect, useRef } from "react"
import { useSelector ,useDispatch} from "react-redux"
import RenderChat from "./RenderChat"
import { MessageSender } from "@/libs/Class/MessageSender"
import io from "socket.io-client"
import { MessageLoader } from "@/libs/Class/MessageLoader"
import { updateChat } from '@/redux/features/chat-slice'

const RoomChat = () => {
    const containerMessage = useRef(null);
    const message_input = useRef();
    const [RoomData, SetRoomData] = useState('')
    let data = useSelector((state) => state.userReducer)
    let { chat } = useSelector(state => state.chatReducer)
    useEffect(() => {
        if (data.userclass.uuid) {
            SetRoomData(<ClassRoom data={data.userclass} />)
        }

    }, [data]);

    const ScrollToBottom = () => {
        containerMessage.current.scrollTop = containerMessage.current.scrollHeight
    }
    const SocketIO = useRef(null)
    const dispatch = useDispatch()
    const message = `MES${data.userclass.kode}`
    const SocketURL = process.env.NEXT_PUBLIC_SOCKETURL
    useEffect(() => {
        if (!SocketIO.current) {
            console.log('connected')
            SocketIO.current = io(SocketURL)

            SocketIO.current.on(message, (result) => {
                console.log('ada pesan baru')
                MessageLoader(data.userclass.uuid).then( (e) => {
                    if (e){
                    dispatch(updateChat(e))
                    } else {
                        console.log("gagal ngambil pesan")
                    }
               })
            })
        }

        return () => {
            SocketIO.current.disconnect();
            SocketIO.current = null
        }
    })

    const onMessageSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        MessageSender(data.userclass.uuid, data.userdata.sub, message_input.current.value)
        SocketIO.current.emit(`sendmessage`, data.userclass.kode)
        message_input.current.value = ""
        ScrollToBottom()
    }

    const ClassRoom = ({ data }) => {
        // console.log(data)
        return (<>
            <Navigation name={data.nama_kelas} anggota={data.members.length} code={data.kode} />
            <div className="container">
                <div className="chat">
                    <div ref={containerMessage} className="message" id="message-field">
                        <RenderChat uuid={data.uuid} container={containerMessage}/>
                    </div>
                    <form action="" onSubmit={onMessageSubmit}>
                        <div className="input-message">
                            <button><i className="fa-solid fa-plus"></i></button>
                            <input type="text" ref={message_input} />
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
