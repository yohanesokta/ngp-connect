import "@/components/Styles/RoomChat/Setting/SubMenuUserChat.scss"
import Image from "next/image"
import { useSelector } from "react-redux"


const SubMenuUserChat = () => {
const data = useSelector( state => state.chatReducer)
console.log(data)
  return (
    <div className="sub-user-chat-container">
      <div className="user-list-container">
                
        {data.chat?.user?.map((users,i)=> {
          return ( <section className="user-list" key={i}>
          <div className="foto">
            <Image src={users.data.image_profile} alt="alt" width={60} height={60} />  
          </div>
          <div className="detail">
              <p>{users.data.username}</p>
              <p>{users.data.role}</p>
          </div>
      </section>)
        })}
       




      </div>
    </div>
  )
}

export default SubMenuUserChat