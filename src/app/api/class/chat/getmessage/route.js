import {PrismaClient} from "@prisma/client"
export const POST = async(request) => {
    const body = await request.json();
    const prisma = new PrismaClient();
    const data = await prisma.chat.findMany({
        where : {uuid : body.uuid}
    })
    return Response.json(data)
}