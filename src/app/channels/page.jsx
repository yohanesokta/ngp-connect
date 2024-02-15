'use client'

import RoomChat from "@/components/RoomChat/RoomChat"
import SideBar from "@/components/RoomChat/SideBar"
import LoadingPage from "@/components/user/LoadingPage"
import { FetchProperty } from "@/libs/FetchProperty"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

const Container = () => {
  return (<> <div className="room-container">
    <SideBar />
    <RoomChat />
  </div></>)
}

const Fetching = async (session, stateData, stateComponents, UserData) => {
  if (!UserData) {
    const data = await fetch("/api/user/info", FetchProperty(session))
    stateData(data)
    stateComponents(<Container />)
  }
}

const page = () => {
  const { data: session } = useSession()
  const [UserData, SetUserData] = useState(false)
  const [Comp, SetComp] = useState(<LoadingPage />)

  useEffect(() => {
    Fetching(session, SetUserData, SetComp, UserData)
  }, [session])
  return (
    <>
    {Comp}
    </>
  )
}

export default page
