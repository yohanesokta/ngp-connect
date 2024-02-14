'use client'

import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router";
import { useEffect } from "react"

const page = () => {
    const {data : session } = useSession();
    if (session){
    useEffect(()=>{
        signOut()
    },[])} else {window.location.href = "/"}

  return (
    <div>Logout Send , Please Wait !</div>
  )
}

export default page