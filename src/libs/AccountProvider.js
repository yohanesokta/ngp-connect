import { getServerSession } from "next-auth/next";
import { providers } from "@/app/api/auth/[...nextauth]/route";

export async function getServerSideProps() {
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
