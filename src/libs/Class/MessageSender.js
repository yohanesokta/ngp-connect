import { FetchProperty } from "../property/FetchProperty"

export const MessageSender =  async(uuid,from,text,time) => {
    try {
        await fetch('/api/class/chat/sendmessage',FetchProperty({
            uuid,
            from,
            text,
            time
        }))
    }catch(error) {
        console.log('error sending')
    }
}
