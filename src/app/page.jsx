'use client'
import {useSession , signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
const page = () => {
 const {data : session} =  useSession();
 if(session) useRouter().push('/channels') 
  return (<>
    <button onClick={signIn}>Sign</button>
  </>)
}

export default page
