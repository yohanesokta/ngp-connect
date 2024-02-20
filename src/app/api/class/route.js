import { PrismaClient } from "@prisma/client";

export const POST = async (request) =>{
    const body = await request.json()
    const prisma = new PrismaClient();
    let message = "Upadate Complete"
    console.log(body.create.name)
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
                desc : body.create.desc
            }
        })
    }catch(err){
        message = "Upadate Failed"
    }

    return Response.json({
        "message" : message
    })
}


/*
    Update request data {
        subid : User ID ,
        update : {
            data : User Class Data Previous  : [
                Class 1,
                Class 2
            ],
        },
        create : {
            uuid : uuid class,
            name : name class
        }
    }
*/