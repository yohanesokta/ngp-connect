import { FetchProperty } from "../property/FetchProperty"

export const MessageLoader = async(uuid) => {
    try{
        let data = await fetch("/api/class/chat/getmessage",FetchProperty({
            uuid : uuid
        },"POST"))
        data = await data.json() 
        return data
    }catch( err){
        console.log('error load message')
        return false
    }
}
