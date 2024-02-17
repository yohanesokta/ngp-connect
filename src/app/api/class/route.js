import { PrismaClient } from "@prisma/client";

export const POST = async (request) =>{
    const body = await request.json()
    const prisma = new PrismaClient();
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
    }catch(err){
        message = "Upadate Complete"
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
            ]
        }
    }
*/