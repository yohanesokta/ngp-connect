'use client'

import Navigation from "./Navigation"
import "@/components/Styles/RoomChat/page.scss"
import { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import RenderChat from "./RenderChat"
import { MessageSender } from "@/libs/Class/MessageSender"
import io from "socket.io-client"
import { MessageLoader } from "@/libs/Class/MessageLoader"
import { updateChat } from '@/redux/features/chat-slice'
import axios from "axios"
import { TrimsChecker } from "@/libs/property/RandomString"
const RoomChat = () => {
    const containerMessage = useRef(null);
    const message_input = useRef();
    const [RoomData, SetRoomData] = useState('')
    let data = useSelector((state) => state.userReducer)
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


    const ReloadMessage = () => {
        MessageLoader(data.userclass.uuid).then((e) => {
            if (e) {
                dispatch(updateChat(e))
            } else {
                console.log("gagal ngambil pesan")
            }
        })
    }
    useEffect(() => {
        if (!SocketIO.current) {
            SocketIO.current = io(SocketURL)
            SocketIO.current.on(message, (result) => {
                console.log('ada pesan baru')
                ReloadMessage()
            })
        }

        // Addon

        const handleConnect = () => {
            console.log('Terhubung kembali ke server');
        };

        const handleDisconnect = () => {
            console.log('Koneksi terputus dari server');
            // Coba sambungkan kembali setelah 5 detik
            setTimeout(() => {
                SocketIO.current.connect();
            }, 5000);
        };

        SocketIO.current.on('connect', handleConnect);
        SocketIO.current.on('disconnect', handleDisconnect);


        // Addon



        return () => {
            SocketIO.current.off('connect', handleConnect);
            SocketIO.current.off('disconnect', handleDisconnect);
            SocketIO.current.disconnect();
            SocketIO.current = null
        }
    })

    const onMessageSubmit = (e) => {
        e.preventDefault()
        if (!TrimsChecker(message_input.current.value)) {
            axios.get('https://worldtimeapi.org/api/ip').then(e => {
                const date = new Date(e.data.datetime)
                const time = [(date.getHours() < 10) ? "0" + date.getHours() : date.getHours(),
                (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes()
                ]
                if (!SocketIO.current) {
                    SocketIO.current = io(SocketURL)
                }
                MessageSender(data.userclass.uuid, data.userdata.sub, message_input.current.value, `${time[0]}:${time[1]}`)
                SocketIO.current.emit(`sendmessage`, data.userclass.kode)
                message_input.current.value = ""
                ReloadMessage()
            })
            ScrollToBottom()
        }
    }

    const ClassRoom = ({ data }) => {
        return (<>
            <Navigation name={data.nama_kelas} anggota={data.members.length} code={data.kode} />
            <div className="container">
                <div className="chat">
                    <div ref={containerMessage} className="message" id="message-field">
                        <RenderChat uuid={data.uuid} container={containerMessage} />
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
