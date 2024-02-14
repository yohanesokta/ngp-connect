

import RoomChat from "@/components/RoomChat/RoomChat"
import SideBar from "@/components/RoomChat/SideBar"

const page = async() => { 
  return (
    <div className="room-container">
      <SideBar />
      <RoomChat />
    </div>
  )
}

export default page
