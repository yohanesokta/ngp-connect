'use client'

import Navigation from "./Navigation"
import Message from "./Message"
import "@/components/Styles/RoomChat/page.scss"
import { useState , useEffect } from "react"
import { useSelector } from "react-redux"

const RoomChat = () => {
    const [RoomData, SetRoomData] = useState('') 
    let data = useSelector((state) => state.userReducer)
    useEffect(() => {
        if(data.userclass.uuid){
            SetRoomData(<ClassRoom data={data.userclass}/>)
        }
    }, [data]);
    
    const ClassRoom = ({data}) => {
        return (<>

            <Navigation name={data.nama_kelas} anggota={data.members.length}/>
            <div className="container">
                <div className="chat">
                    <div className="message" id="message-field">
                        <Message data={{ text: "Lorem ipsum dolor sit amet consectetur adipisicing elit" }} />
                        <Message fromMe={true} data={{ text: "Lorem Test 10" }} />
                    </div>
                    <form action="">
                        <div className="input-message">
                            <button><i className="fa-solid fa-plus"></i></button>
                            <input type="text" />
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
