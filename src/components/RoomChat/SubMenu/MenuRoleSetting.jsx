import "@/components/Styles/RoomChat/Setting/RoleSetting.scss"
import { useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"



const MenuRoleSetting = ({ back }) => {
    const profile = useSelector(state => state.userReducer)
    const [CLick, SetCLick] = useState(true)
    const FormAction = async (e) => {
        if (CLick) {
            SetCLick(false)
            const input = e.get('role')
            await  axios.post('/api/user/update/role',{
                sub : profile.userdata.sub,
                role : input
            })
            window.location.reload()
        }
    }
    return (
        <div className='role-container'>
            <div onClick={back} className="back-button">
            </div>
            <div className="role-menu">
                <h2>Ganti Role</h2>
                <p>Ganti Role sesuai kemauanmu 😲</p>
                <form action={FormAction}>
                    <input type="text" name="role" id="role" placeholder="tulis role mu"  required/>
                    <button type="submit">Simpan</button>
                </form>
            </div>
        </div>
    )
}

export default MenuRoleSetting