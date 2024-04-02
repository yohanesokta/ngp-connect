import React, { useRef, useState } from 'react'
import Image from "next/image"
import { CloudinaryProperty } from '@/libs/property/CloudinaryProperty';
import axios from 'axios';
import { useSelector } from "react-redux"


const MenuFotoSetting = ({ back }) => {
  const ButtonRef = useRef()
  const [ImageProfile , SetImageProfile] = useState('/profile.png')
  const [ImageURL , SetImageUrl] = useState(false)
  const ProfileImageShow = useRef()
  const Spinner = useRef()
  let sub = useSelector(state => state.userReducer)
  const FileSubmiter = (e) => {
    e.preventDefault()
    if (ImageURL) {
     const {message} =  axios.post('/api/user/update/profile',{
      url : ImageURL,
      sub : sub.userdata.sub
     })
      window.location.reload()
    }
      back()
  }

  const FileInput = async (e) => {
    Spinner.current.classList.add('spinner')
    let file = e.target.files[0]
    const UploadImage = await CloudinaryProperty(file)
    SetImageProfile(UploadImage.url)
    SetImageUrl(UploadImage.url)
    ButtonRef.current.innerHTML = "Simpan"
    Spinner.current.classList.remove('spinner')
  }
  return (
    <div className="menu-foto-setting">
      <div className="closed" onClick={back}>
      </div>
      <div className="container-foto">
        <form action="/" onSubmit={FileSubmiter}>
          <div className="image">
            <div ref={Spinner}></div>
            <Image ref={ProfileImageShow} src={ImageProfile} alt="foto not found" width={100} height={100} />
          </div>
          <div className="btn-menu">
            <label htmlFor="file" ><i className="fa-solid fa-pen"></i> Pilih Foto</label>
            <button type='submit' ref={ButtonRef}>Batal</button>
          </div>
          <input onChange={FileInput} type="file" name='file' id='file' />
        </form>
      </div>
    </div>
  )
}

export default MenuFotoSetting