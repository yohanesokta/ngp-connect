'use client'
import "@/components/Styles/user/create.scss"
import { useSession } from "next-auth/react"
import { useRef } from "react"
import { CreateSession } from "@/libs/CreateSession"

const CreateComponent = () => {
  const { data: session } = useSession()
  let buttonRef = useRef([])
  let inputRef = useRef([])
  const InputCheks = (event) => {
    const val = event.target.value

    if (val.length > 3) {
      buttonRef.current.classList.remove('ev-false')
      buttonRef.current.classList.add('ev-true')
    } else {
      buttonRef.current.classList.add('ev-false')
      buttonRef.current.classList.remove('ev-true')
    }
  }

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
          <button type="submit" id="ev" className="ev-true" ref={buttonRef}>Lest'Go</button>
        </div>
      </form>
    </div>
  )
}

export default CreateComponent