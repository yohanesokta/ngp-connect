'use client'

import RoomChat from "@/components/RoomChat/RoomChat"
import SideBar from "@/components/RoomChat/SideBar"
import LoadingPage from "@/components/user/LoadingPage"
import { FetchProperty } from "@/libs/property/FetchProperty"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import {UpdateUser} from "@/redux/features/user-slice"
import {useDispatch} from "react-redux"

const Container = () => {
  return (<> <div className="room-container">
    <SideBar />
    <RoomChat />
  </div></>)
}
const Fetching = async (session, stateData, stateComponents, UserData) => {
  if (!UserData) {
    let data = await fetch("/api/user/info", FetchProperty(session))
    data = await data.json()
    stateData(data.data[0])
    stateComponents(<Container />)
    return data
  }
}


const page = () => {
  const { data: session } = useSession()
  const [UserData, SetUserData] = useState(false)
  const [Comp, SetComp] = useState(<LoadingPage />)
  const dispatch = useDispatch()

  
 
  useEffect(() => {
    Fetching(session, SetUserData, SetComp, UserData)
  }, [session])

  useEffect(()=>{
    dispatch(UpdateUser(UserData))
  },[UserData])


  return (
    <>
    {Comp}
    </>
  )
}

export default page
