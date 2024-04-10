'use client'
import { signIn, useSession } from "next-auth/react"
const Page = () => {
  const { data: session } = useSession()
  if (session) window.location.href = '/user/create'

  return (<>
    <button onClick={signIn}>Sign</button>
  </>)
}

export default Page