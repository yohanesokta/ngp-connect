'use client'

import "@/components/Styles/RoomChat/navigation.scss"
import { useRef, useState } from "react"
import SubMenuUserChat from "./SubMenu/SubMenuUserChat"
const Navigation = ({name,anggota,code}) => {

    const [onMenu, setOnMenu] = useState(false)

    const SettingMenu = () => {
        (onMenu) ? setOnMenu(false) : setOnMenu(true)
    }

    const tooltipInfo = useRef()
    const CopyCode = (e) => {
        navigator.clipboard.writeText(e.target.innerHTML)
        tooltipInfo.current.innerHTML = "Copied"
    }
    return (
        <div className="room-nav-container">
            <div className="name-content">
                <div className="name">
                    <h5>{name}</h5>
                    <span>Anggota : {anggota}</span>
                </div>
            </div>
            <div className="code-class-container">
                <span href="" onClick={CopyCode} onMouseLeave={()=> {
                    tooltipInfo.current.innerHTML = "Copy Code"
                }}>{code}</span>
                <p ref={tooltipInfo}>Copy Code</p>
            </div>
            <div className="users-container">
                {(onMenu)? <SubMenuUserChat/> : null}
                <button onClick={SettingMenu}><i class="fa-solid fa-bars"></i></button>
            </div>
        </div>
    )
}

export default Navigation