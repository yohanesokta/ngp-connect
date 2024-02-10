import RoomChat from "@/components/RoomChat/RoomChat"
import SideBar from "@/components/SideBar"

const page = () => {
  return (
    <div className="room-container">
      <SideBar />
      <RoomChat />
    </div>
  )
}

export default page
