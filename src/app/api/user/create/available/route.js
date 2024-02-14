import { PrismaClient } from "@prisma/client"

export const POST = async (request) => {
    let mes = {"Message" : "Data Input Not Valid"}
    try{
        const body = await request.json()
    const prismaORM = new PrismaClient()
    const data = await prismaORM.users.findUnique({
        where: {
            sub: body.sub
        }

    })
     mes = (data) ? {
        message : 'data-available',
        value : 1
    }: {
        message : 'data-unavailable',
        value : 0
    }
    }catch(err){
        return Response.json({"Message" : "Data Input Not Valid"})
    }finally{
        return Response.json(mes)
    }
}