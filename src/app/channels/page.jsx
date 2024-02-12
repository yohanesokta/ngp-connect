

import RoomChat from "@/components/RoomChat/RoomChat"
import SideBar from "@/components/SideBar"
import { getServerSideProps } from "@/libs/AccountProvider"

const page = async() => { 
  const data = await getServerSideProps()
  console.log(data.user)
  return (
    <div className="room-container">
      <SideBar />
      <RoomChat />
    </div>
  )
}

export default page
