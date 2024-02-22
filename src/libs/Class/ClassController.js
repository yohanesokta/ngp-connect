import { FetchProperty, JSONtoArray } from "../property/FetchProperty"
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
        await fetch('/api/class/create/',FetchProperty(Body,"POST"))
    }finally{
      //  window.location.reload()
    }
}

export const JoinClassControl = async (input ,data) => {
    const result = await fetch('/api/class/join',FetchProperty({
        kode : input,
        update : {
            sub : data.userdata.sub,
        },
    },"UPDATE"))

    const get = await result.json()
    if (get.code == 1){
        window.location.reload()
    }
    return get
}