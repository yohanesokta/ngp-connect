import "@/components/Styles/RoomChat/message.scss";
import Image from "next/image"

const Left = ({ data }) => {
    return (<>
        <div className="field">
            <div className={"message-field"}>
                <div className="profile">
                    <Image src={data.userinfo?.image_profile ?? "/profile.png"} alt="[]" width={100} height={100} />
                </div>
                <div className="message-text">
                    <span>{`${data.userinfo?.username} -  ${data.chat.time}`}</span>
                    <p>{data.chat?.text}</p>
                </div>
            </div>
        </div>
    </>)
}

const Right = ({ data }) => {
    return (<>
        <div className="field">
            <div className="gap-right"></div>
            <div className={"message-field right"}>
                <div className="message-text">
                    <span><div className="break"></div>{`${data.userinfo?.username} -  ${data.chat.time}`}</span>
                    <p>{data.chat?.text}</p>
                </div>
                <div className="profile">
                    <Image src={data?.userinfo?.image_profile ?? "/profile.png"} alt="[]" width={100} height={100} />
                </div>
            </div>
        </div>
    </>)
}

const Message = ({ fromMe, data }) => {
    return (
        <>
            {(fromMe) ? <Right data={data} /> : <Left data={data} />}
        </>

    )
}

export default Message
