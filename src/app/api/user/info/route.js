import { PrismaClient } from "@prisma/client"
export const POST = async (request) => {
    const prisma = new PrismaClient()
    const data = await request.json()
    if (!data.user.sub) {
        return Response.json({ data: 0, status: 0 })
    } else {
        try {
            const result = await prisma.users.findMany({ where: { sub: data.user.sub } })
            return Response.json({ data: result[0], status: 1 })
        } catch (err) {
            return Response.json({ data: 0, status: 0 })
        }
    }
}