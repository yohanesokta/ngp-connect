import {PrismaClient} from "@prisma/client"

export const POST = async (request) => {
    const prisma = new PrismaClient()
    const req = await request.json()

    try{
        await prisma.users.update({
            where : {sub : req.sub },
            data : {
                role : req.role
            }
        })
        return Response.json({
            status : 'ok',
        })
    } catch (error) {
        return Response.json({
            status : 'fail',
            message : String(error)
        })
    }
}
