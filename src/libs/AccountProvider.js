import { getServerSession } from "next-auth/next";
import { providers } from "@/app/api/auth/[...nextauth]/route";

export function getServerSideProps(context) {
  const Session = async () => {
    const session = await getServerSession(providers);

    if (!session) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
    return await session
  }

  return {
    props: {
      Session
    }
  }
}
