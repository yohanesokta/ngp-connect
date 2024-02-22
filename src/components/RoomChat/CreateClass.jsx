import "@/components/Styles/RoomChat/create-class.scss"
import { CreateClassControl, JoinClassControl } from "@/libs/Class/ClassController"
import { FetchProperty, JSONtoArray } from "@/libs/property/FetchProperty"
import { useRouter } from "next/router"
import { useRef, useState } from "react"
import { useSelector } from "react-redux"

const CreateClass = ({ refComp }) => {
    const nameInput = useRef()
    const descInput = useRef()
    const joinInput = useRef()

    const ChoseeMenu = () => {
        return (<>
            <div className="form-container">
                <div className="container">
                    <label htmlFor="">Tambah Kelas</label>
                </div>
                <div className="container">
                    <div className="submit-tambah">
                        <button onClick={() => { SetComp(<JoinClass />) }}>Join</button>
                        <button onClick={() => { SetComp(<AddClass />) }}>Buat</button>
                    </div>
                </div>
            </div>
        </>)
    }
    const [Comp, SetComp] = useState(<ChoseeMenu />)

    const AddClass = () => {
        let data = useSelector((state) => state.userReducer)
        data = data.userdata
        const BtnSubmit = () => {
            const sub = data.sub
            const NewClass = JSONtoArray(data.class)
            const name = nameInput.current.value
            const desc = descInput.current.value
            CreateClassControl(sub, NewClass, name, desc)
        }

        return (<>
            <form action="#" onSubmit={(e) => { e.preventDefault() }}>
                <div className="container">
                    <label htmlFor="class-name-create">Buat Kelas</label>
                </div>
                <div className="container">
                    <input ref={nameInput} type="text" id="class-name-create" autoComplete="off" placeholder="Nama kelas" />
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
        </>)
    }

    const btnHide = () => {
        refComp.current.classList.add('add-hidden');
        nameInput.current.value = ''
        descInput.current.value = ''
        SetComp(<ChoseeMenu />)
    }
    const BtnJoinHide = () => {
        refComp.current.classList.add('add-hidden');
        joinInput.current.value = ''
        SetComp(<ChoseeMenu />)
    }
    
    const JoinClass = () => {
        const PAvailable = useRef();
        const PNotfound = useRef();
        let data = useSelector((state) => state.userReducer)

        const BtnJoinSubmit = () => {
            const input = joinInput.current.value
            JoinClassControl(input,data).then((e)=>{
                    if (e.code == 0) {
                        PNotfound.current.classList.remove('join-code-mes-hide')
                    }else if (e.code == 3) {
                        PAvailable.current.classList.remove('join-code-mes-hide')
                    }
            })
        }

        const HiddenMessage = () => {
            PAvailable.current.classList.add('join-code-mes-hide');
            PNotfound.current.classList.add('join-code-mes-hide');
        }


        return (<>
            <form action="#" onSubmit={(e) => { e.preventDefault() }}>
                <div className="container">
                    <label htmlFor="kode-name-create">Join Kelas</label>
                </div>
                <div className="container">
                    <input ref={joinInput} type="text" id="kode-name-create" autoComplete="off" placeholder="Kode Kelas" onInput={HiddenMessage}/>
                </div>
                <p className="join-code-mes-hide" ref={PNotfound}>code tidak terdaftar</p>
                <p className="join-code-mes-hide" ref={PAvailable}>kelas sudah ada</p>
                <div className="container">
                    <div className="submit-tambah">
                        <button onClick={BtnJoinHide}>Batal</button>
                        <button type="submit" onClick={BtnJoinSubmit}>Join Kelas</button>
                    </div>
                </div>
            </form>
        </>)
    }

    return (
        <div className="create-class-container add-hidden" ref={refComp}>
            {Comp}
        </div>
    )
}

export default CreateClass