import "@/components/Styles/RoomChat/navigation.scss"
const Navigation = () => {
    return (
        <div className="room-nav-container">
            <div className="name-content">
                <div className="name">
                    <h5>Pemrograman</h5>
                    <span>Anggota : 00</span>
                </div>
            </div>
            <div className="users-container">
                <button><i className="fa-solid fa-users"></i></button>
            </div>
        </div>
    )
}

export default Navigation