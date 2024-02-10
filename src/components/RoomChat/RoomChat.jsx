import Navigation from "./Navigation"
import "@/components/Styles/RoomChat/page.scss"
const RoomChat = () => {
    return (
        <div className="RoomChat-container">
            <Navigation />
            <div className="container">

                <div className="chat">
                    <div className="message">
                        <p></p>
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
