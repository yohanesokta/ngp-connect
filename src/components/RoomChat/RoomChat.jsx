'use client'

import Navigation from "./Navigation"
import Message from "./Message"
import "@/components/Styles/RoomChat/page.scss"



const RoomChat = () => {


    return (
        <div className="RoomChat-container">
            <Navigation />
            <div className="container">
                <div className="chat">
                    <div className="message" id="message-field">
                        <Message data={{ text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fuga dicta iste suscipit aliquid aut voluptatibus saepe natus soluta, nobis ducimus ipsum? Hic est possimus quia labore molestiae culpa autem facere magnam placeat ipsa! Mollitia dignissimos voluptates architecto soluta ad." }} />
                        <Message fromMe={true} data={{ text: "Lorem Test 10" }} />
                        <Message fromMe={true} data={{ text: "Lorem Test 11" }} />
                        <Message fromMe={true} data={{ text: "Lorem Test 12" }} />
                        <Message data={{ text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Mollitia dignissimos voluptates architecto soluta ad." }} />
                        <Message data={{ text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Mollitia dignissimos voluptates architecto soluta ad." }} />
                        <Message fromMe={true} data={{ text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Mollitia dignissimos voluptates architecto soluta ad." }} />
                        <Message fromMe={true} data={{ text: "Lorem Test 11" }} />
                        <Message fromMe={true} data={{ text: "Lorem Test 12" }} />
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
        </div>
    )
}

export default RoomChat
