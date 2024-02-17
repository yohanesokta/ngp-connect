export {default} from "next-auth/middleware"

export const config = {matcher : ["/channels/:path*" , "/user/:path*"]}
