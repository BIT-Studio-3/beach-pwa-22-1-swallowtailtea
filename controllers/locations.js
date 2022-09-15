import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getLocation = async (req, res) => {
    try {
        const { id } = req.prams;

        const location = await prisma.location.findUnique({
            where: { id: Number(id) }
        })

        if (!location){
            return res 
            .status(200)
            .json({ msg: `No location with the id: ${id} found`})
        }
        return res.json({ data: location})
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        })
    }
}; 

export{
    getLocation
}