import { prisma } from "../config/db.js";

const residencecontroller = async (req, res) => {
    try {

        const { name, address } = req.body;

        const residence = await prisma.residence.create({
            data: {
                name: name,
                address: address
            }
        });

        return res.status(201).json({
            message: "Residence created",
            residence
        });

    } catch (error) {

        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
};

export { residencecontroller };