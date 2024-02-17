import "@/components/Styles/RoomChat/create-class.scss"
import { CreateClassControl } from "@/libs/Class/ClassController"
import { useRef } from "react"

const CreateClass = ({ refComp,dataClass }) => {
    
    const refInput = useRef()
    const BtnSubmit = () => {
        const sub = dataClass.sub
        const clas = dataClass.class
        const NewClass = [...Array(clas.length)].map((_,i) => clas[i])
        CreateClassControl(sub,NewClass)
    }
    return (
        <div className="create-class-container hidden" ref={refComp}>
            <form action="#" onSubmit={(e)=>{e.preventDefault()}}>
                <div className="container">
                    <label htmlFor="class-name-create">Nama Kelas</label>
                </div>
                <div className="container">
                    <input ref={refInput} type="text" id="class-name-create" autoComplete="off"/>
                </div>
                <div className="container">
                    <div className="submit-tambah">
                        <button onClick={(e)=>{refComp.current.classList.add('hidden'); refInput.current.value = ''}}>Batal</button>
                        <button type="submit" onClick={BtnSubmit} >Buat Kelas</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateClass