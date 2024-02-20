import "@/components/Styles/RoomChat/create-class.scss"
import { CreateClassControl } from "@/libs/Class/ClassController"
import { JSONtoArray } from "@/libs/property/FetchProperty"
import { useRef } from "react"

const CreateClass = ({ refComp,dataClass }) => {

    const nameInput = useRef()
    const descInput = useRef()
    const BtnSubmit = () => {
        const sub = dataClass.sub
        const NewClass = JSONtoArray(dataClass.class)
        const name  = nameInput.current.value
        const desc  = descInput.current.value
        CreateClassControl(sub,NewClass,name,desc)
    }

    const btnHide = (e) => {
        refComp.current.classList.add('add-hidden');
        nameInput.current.value = ''
        descInput.current.value = ''
    }
    return (
        <div className="create-class-container add-hidden" ref={refComp}>
            <form action="#" onSubmit={(e)=>{e.preventDefault()}}>
                <div className="container">
                    <label htmlFor="class-name-create">Buat Kelas</label>
                </div>
                <div className="container">
                    <input ref={nameInput} type="text" id="class-name-create" autoComplete="off" placeholder="Nama kelas"/>
                </div>
                <div className="container">
                    <input ref={descInput} type="text" placeholder="Deskripsi Kelas" autoComplete="off" />
                </div>
                <div className="container">
                    <div className="submit-tambah">
                        <button onClick={btnHide}>Batal</button>
                        <button type="submit" onClick={BtnSubmit} >Buat Kelas</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateClass