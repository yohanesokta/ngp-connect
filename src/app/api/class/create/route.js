import { generateUniqueCode } from "@/libs/property/RandomString";
import { PrismaClient } from "@prisma/client";

export const POST = async (request) =>{
    const body = await request.json()
    const prisma = new PrismaClient();
    const randomCode = String(body.create.uuid[1]+generateUniqueCode(4) + generateUniqueCode(4) + body.create.uuid[2])
    let message = "Upadate Complete"
    try{
        await prisma.users.update({
            where : {
                sub : body.subid
            },
            data : {
                class : body.update.data
                
            }
        })
        await prisma.class.create({
            data :{
                uuid : body.create.uuid,
                nama_kelas : body.create.name,
                desc : body.create.desc,
                kode : randomCode,
                members : [String(body.subid)]
            }
        })
    }catch(err){
        message = "Upadate Failed"
    }

    return Response.json({
        "message" : message
    })
}