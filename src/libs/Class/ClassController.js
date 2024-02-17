import { FetchProperty } from "../property/FetchProperty"
import {v4 as uuidv4} from 'uuid';

export const CreateClassControl = async(sub,data) => {
    data.push(uuidv4())
    const Body = {
        subid : sub,
        update : {
            data : data
        }
    }
    try{
        await fetch('/api/class',FetchProperty(Body,"POST"))
    }finally{
        window.location.reload()
    }
}