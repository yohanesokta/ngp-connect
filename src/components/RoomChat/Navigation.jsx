import "@/components/Styles/RoomChat/navigation.scss"
const Navigation = ({name,anggota}) => {
    return (
        <div className="room-nav-container">
            <div className="name-content">
                <div className="name">
                    <h5>{name}</h5>
                    <span>Anggota : {anggota}</span>
                </div>
            </div>
            <div className="users-container">
                <button><i className="fa-solid fa-users"></i></button>
            </div>
        </div>
    )
}

export default Navigation