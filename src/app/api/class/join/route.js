import { PrismaClient } from "@prisma/client"

export const POST = async (request) => {
    const prisma = new PrismaClient();

    const body = await request.json()

    const data = await prisma.class.findMany({
        where: { kode: body.kode }
    })

    let updates = await prisma.class.findFirst({
        where : {kode : body.kode}
    })

    const myClass = await prisma.users.findFirst({
        where : {sub : body.update.sub}
    })

    //  All Database Loaded

    if (data.length > 0 && myClass.class.includes(updates.uuid)){
        return Response.json({
            code : 3,
            message : "Loh Wes Enek ne"
        })
    }

    if (data.length > 0) {

        let classData = myClass.class
        let classMember = data[0].members
        classData.push(updates.uuid)
        classMember.push(body.update.sub)
        
        await prisma.class.update({
            where: { uuid : data[0].uuid,
                kode: body.kode },
            data : {
                members : classMember
            }
        })

        try {

            await prisma.users.update({
                where: { sub: body.update.sub },
                data: {
                    class: classData
                }
            })

        } catch (err) {
            return Response.json({
                code: 0,
                message: "execution failed"
            })
        }
        finally {
            return Response.json({
                code: 1,
                message: "execution sucsessfull"
            })
        }
    }
    return Response.json({
        code: 0,
        message: "execution failed or not found"
    })
}