import { FetchProperty } from "../property/FetchProperty"

export const MessageSender =  async(uuid,from,text) => {
    try {
        await fetch('/api/class/chat/sendmessage',FetchProperty({
            uuid,
            from,
            text
        }))
    }catch(error) {
        console.log('error sending')
    }
}
