import { FetchProperty } from "@/libs/property/FetchProperty"
import { useEffect, useState } from "react"

const GetClas = async (state,current,data) =>
{
    if (!current) {
    state(1)
    const result = await (await fetch(`/api/class/call`,FetchProperty({uuid : data},"POST"))).json()
    state(result.data)
    }
}

const Kelas = ({data}) => {
   const [Class , SetClass] = useState()
   GetClas(SetClass,Class,data)
   useEffect( ()=>{
},[])
    const image = false
    return (
        <div className="kelas-container">
            <a href="" className="kelas">
                <div className="image-thumb">
                    {(image) ? <Image src={""} alt="alt" width={300} height={300} /> : null}
                </div>
                <div className="nama-kelas">
                    <div className="text">
                        <h6>{Class?.nama_kelas}</h6>
                        <p>{Class?.desc}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Kelas