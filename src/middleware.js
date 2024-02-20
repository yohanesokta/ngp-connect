export {default} from "next-auth/middleware"

export const config = {matcher : ["/channels/:path*" , "/user/create/:path*"]}
