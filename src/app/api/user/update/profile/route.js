import {PrismaClient} from "@prisma/client"
export const POST = async (req) => {
    const request = await req.json();
    const Prisma = new PrismaClient()
    const data  = [request.sub,request.url]

    try {
        await Prisma.users.update({
            where : {sub : data[0]},
            data : {
                image_profile : data[1]
            }
        })

        return Response.json({message : "update-succsessfull"})
    } catch (error) {
        return Response.json({message : "Error Update", CONSOLE : error})
    }
}
