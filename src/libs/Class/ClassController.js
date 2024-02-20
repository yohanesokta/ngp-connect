import { FetchProperty } from "../property/FetchProperty"
import {v4 as uuidv4} from 'uuid';

export const CreateClassControl = async(sub,data,name,desc) => {
    const UUID = uuidv4()
    data.push(UUID)
    const Body = {
        subid : sub,
        update : {
            data : data
        },
        create : {
            uuid : UUID,
            name : name.trim(),
            desc : desc.trim()
        }
    }
    try{
        await fetch('/api/class',FetchProperty(Body,"POST"))
    }finally{
        window.location.reload()
    }
}