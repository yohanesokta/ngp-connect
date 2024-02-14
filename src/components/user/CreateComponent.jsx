'use client'
import "@/components/Styles/user/create.scss"
import { useSession } from "next-auth/react"
import { useEffect, useRef } from "react"
import { HandleCreateButton } from "./HandleCreateButton"
import { CreateSession } from "@/libs/CreateSession"

const CheckUsers = async(session) => {
  try{
    let data = await fetch('/api/user/create/available',{
      method : "POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        sub : session.user.sub
      })
    })
    data = await data.json()
    if (data.value == 1) {
      window.location.href = "/channels"
    }
  }catch(error){
    console.log(error)
  }
}

const CreateComponent = () => {
  const { data: session } = useSession()
  let buttonRef = useRef([])
  let inputRef = useRef([])
  const InputCheks = (event) => {
    const val = event.target.value
    const btn = buttonRef.current.classList
    HandleCreateButton(val,btn)
  }

  useEffect(()=>{
    CheckUsers(session)
  })
  const Submited = (event) => {
    event.preventDefault();
    CreateSession(inputRef , session)
  }

  return (
    <div className="create-container">
      <form action="" onSubmit={Submited}>
        <h3>{session.user.name}</h3>
        <div className="flex-container">
          <label htmlFor="roll">yuk beri role mu !</label>
        </div>
        <div className="flex-container">
          <input type="text" id="roll" name="roll" placeholder="roll kesukaanmu" required onInput={InputCheks} ref={inputRef} />
        </div>
        <div className="flex-container">
          <button type="submit" id="ev" className="ev-false" ref={buttonRef}>Lest'Go</button>
        </div>
      </form>
    </div>
  )
}

export default CreateComponent