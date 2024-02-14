import { PrismaClient } from "@prisma/client"
export const POST =  async (request) => {
    const body =  await request.json()
    const prismaORM = new PrismaClient();
    try {
        await prismaORM.users.create({data : body.data})
    }catch(err){
        console.log(err)
        return Response.json({
            "Message" : "User Failed To Add"
        })
    }
    return Response.json({
        "Message" : "User Add Succsessfull"
    })
}   
