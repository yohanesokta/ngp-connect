'use client'

import RoomChat from "@/components/RoomChat/RoomChat"
import SideBar from "@/components/RoomChat/SideBar"
import LoadingPage from "@/components/user/LoadingPage"
import { FetchProperty } from "@/libs/property/FetchProperty"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { UpdateUser } from "@/redux/features/user-slice"
import { useDispatch } from "react-redux"
import { CheckUsers } from "../user/create/page"

const Container = () => {
  return (<> <div className="room-container">
    <SideBar />
    <RoomChat />
  </div></>)
}
const Fetching = async (session, stateData, stateComponents, UserData) => {
  if (session.user.sub) {
    fetch('/api/user/create/available', FetchProperty({ sub: session.user.sub })).then(e => {
      return e.json()
    }).then(e => { if (e.value == 0) { window.location.href = "/user/create" } })
    let data = await fetch("/api/user/info", FetchProperty(session))
    data = await data.json()
    stateData(data.data)
    stateComponents(<Container />)
    return data
  }
}


const Page = () => {
  const { data: session } = useSession()
  const [UserData, SetUserData] = useState(false)
  const [Comp, SetComp] = useState(<LoadingPage />)
  const dispatch = useDispatch()



  useEffect(() => {
    Fetching(session, SetUserData, SetComp, UserData ?? none)
  }, [session])

  useEffect(() => {
    dispatch(UpdateUser(UserData))
  }, [UserData])


  return (
    <>
      {Comp}
    </>
  )
}

export default Page
