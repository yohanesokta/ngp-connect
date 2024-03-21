import {PrismaClient} from "@prisma/client"

let error = {
    code : 200,
    message : "success"
}
const Prisma  = new PrismaClient()
export const POST = async (request) => {
    const body = await request.json()
    try{
       await Prisma.chat.create({data : body})
    } catch(err){
        error.code = 401
        error.message = "failed"
    }
    return Response.json(error)
}