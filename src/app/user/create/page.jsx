'use client'


import CreateComponent from "@/components/user/CreateComponent"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import LoadingPage from "@/components/user/LoadingPage"

export const CheckUsers = async(session,changeTag) => {
  if (!session.user.sub) {return}
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
    }else if (data.value == 0){
      if (changeTag){
        changeTag(<CreateComponent/>)
      }else{
        window.location.href ="/user/create"
      }
    }
  }catch(error){
    return
  }
}


const page = () => {
  const [Page,SetPage] = useState(<LoadingPage/>)
  const {data : session} = useSession()

  useEffect(()=>{
    CheckUsers(session,SetPage)
  },[session])

return (<>
    {Page}
  </>
  )
}

export default page