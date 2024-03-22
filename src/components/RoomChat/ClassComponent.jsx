import { ClassLoader } from "@/libs/Class/ClassLoader"
import { FetchProperty } from "@/libs/property/FetchProperty"
import { setChat, updateUser } from "@/redux/features/chat-slice"
import { UpdateClass } from "@/redux/features/user-slice"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

const GetClas = async (state,current,data) =>

{
    if (!current) 
    {
    state(1)
    const result = await (await fetch(`/api/class/call`,FetchProperty({uuid : data},"POST"))).json()
    state(result.data)
    }
}

const Kelas = ({data}) => {

    const dispatch = useDispatch();
    const [Class , SetClass] = useState()
    GetClas(SetClass,Class,data)
    const image = false

    const ViewClass = () => {
        const data = ClassLoader(Class)
        data.then(e => {
            dispatch(setChat(Class.uuid))
            dispatch(updateUser(e))
        })
        dispatch(UpdateClass(Class))
    }

    return (
        <div className="kelas-container">
            <div className="kelas" onClick={ViewClass}>
                <div className="image-thumb">
                    {(image) ? <Image src={""} alt="alt" width={300} height={300} /> : null}
                </div>
                <div className="nama-kelas">
                    <div className="text">
                        <h6>{Class?.nama_kelas}</h6>
                        <p>{Class?.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kelas