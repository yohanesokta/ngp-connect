import "@/components/Styles/RoomChat/create-class.scss"
import { useRef } from "react"

const CreateClass = ({ refComp }) => {
    const refInput = useRef()
    return (
        <div className="create-class-container hidden" ref={refComp}>
            <form action="#" onSubmit={(e)=>{e.preventDefault()}}>
                <div className="container">
                    <label htmlFor="class-name-create">Nama Kelas</label>
                </div>

                <div className="container">
                    <input ref={refInput} type="text" id="class-name-create" />
                </div>
                <div className="container">
                    <div className="submit-tambah">
                        <button onClick={(e)=>{refComp.current.classList.add('hidden'); refInput.current.value = ''}}>Batal</button>
                        <button type="submit">Buat Kelas</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateClass