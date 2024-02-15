'use client'
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
const page = () => {
  const {data : session} =  useSession()
  if(session) useRouter().push('/user/create') 

  return (<>
    <button onClick={signIn}>Sign</button>
  </>)
}

export default page