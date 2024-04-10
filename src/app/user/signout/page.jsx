'use client'

import LoadingPage from "@/components/user/LoadingPage";
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router";
import { useEffect } from "react"

const Page = () => {
  const { data: session } = useSession();
  if (session) {
    signOut()
  } else { window.location.href = "/" }

  return (
    <div><LoadingPage /></div>
  )
}

export default Page