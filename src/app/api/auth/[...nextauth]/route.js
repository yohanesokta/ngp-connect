import GoogleProvider from "next-auth/providers/google"
import NextAuth from "next-auth/next"
export const providers = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async jwt({ token, account, user }) {
          // Jika sign in pertama kali, `user` akan ada
          if (account && user) {
            // Menyimpan `sub` dari Google ke dalam token JWT
            token.sub = account.providerAccountId;
          }
          return token;
        },
        async session({ session, token }) {
          // Menambahkan `sub` ke session
          session.user.sub = token.sub;
          return session;
        },
      },
    secret : process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(providers)

export {handler as GET , handler as POST}