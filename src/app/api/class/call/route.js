import { PrismaClient } from "@prisma/client"

export const POST = async (request) =>{
    const body = await request.json()
    let data = {
        value : 0,
        data : [],
        message : ""
    }
    const prisma = new PrismaClient()
    try {
        const result = await prisma.class.findUnique({
            where : {
                uuid : body.uuid
            }
        })

        data = {
            value : 1,
            data : result,
            message : "FIND COMPLETED"
        }
    }catch(err){
        data = {
            value : 0,
            data : [],
            message : "FIND FAILED"
        }
    }

    return Response.json(data)

}