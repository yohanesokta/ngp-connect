import React, { useState } from 'react'
import MenuFotoSetting from './MenuFotoSetting'
import "@/components/Styles/RoomChat/profile-menu.scss"




const MenuSetting = ({setSetting}) => {
  
  const setToNormal = () => {
    setMenu(<MenuUtama/>)
    setSetting('')
  }

  const MenuUtama = () => {
    return ( <>
    <div className="setting-con">
        <ul onClick={() => { console.log('Ganti Nama') }}>
          <i className="fa-solid fa-pen-to-square"></i> Ganti Nama
        </ul>
        <ul onClick={() => {setMenu(<MenuFotoSetting back={setToNormal}/>)}}>
          <i className="fa-solid fa-user-gear"></i> Ganti Foto Profile
        </ul>
        <ul>
          <i className="fa-solid fa-dice"></i>  Ganti Role
        </ul>
      </div>
    </>)
  }

  const [isMenu,setMenu] = useState(<MenuUtama/>)
  return (<>
    {isMenu}
    </>
  )
}

export default MenuSetting