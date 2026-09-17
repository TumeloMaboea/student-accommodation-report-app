import { prisma } from "../config/db.js";


const reportcontroller = async (req, res) => {

    try {

        const { description, category, roomId } = req.body;

        if (!roomId) {

            return res.status(404).json({
                message: "Room ID is required"
            });

        }

        const report = await prisma.report.create({

            data: {

                description: description,
                category: category,
                roomId: roomId,
                createdById: req.userId

            }

        });

        return res.status(201).json({

            message: "Report successfully created",
            report

        });

    } catch (error) {

        return res.status(500).json({

            message: "Something went wrong",
            error: error.message

        });

    }

};


const getreport = async (req, res) => {

    try {

        const { id } = req.params;


        // If ID was provided, get one report
        if (id) {

            const report = await prisma.report.findUnique({

                where: {
                    id: id
                }

            });


            // Check if report exists
            if (!report) {

                return res.status(404).json({

                    message: "Report not found"

                });

            }


            return res.status(200).json({

                message: "Report retrieved successfully",
                report

            });

        }


        // If there is no ID, get all reports
        const reports = await prisma.report.findMany();


        return res.status(200).json({

            message: "Reports retrieved successfully",
            reports

        });


    } catch (error) {

        return res.status(500).json({

            message: "Something went wrong",
            error: error.message

        });

    }

};


const updatereports = async (req, res) => {

    try {

        const { status } = req.body;
        const { id } = req.params;


        const report = await prisma.report.update({

            where: {
                id: id
            },

            data: {
                status: status
            }

        });


        return res.status(200).json({

            message: "Report updated successfully",
            report

        });


    } catch (error) {

        return res.status(500).json({

            message: "Something went wrong",
            error: error.message

        });

    }

};


const deletereport = async (req, res) => {

    try {

        const { id } = req.params;


        const report = await prisma.report.delete({

            where: {
                id: id
            }

        });


        return res.status(200).json({

            message: "Deleted successfully",
            report

        });


    } catch (error) {

        return res.status(500).json({

            message: "Something went wrong",
            error: error.message

        });

    }

};


export {
    reportcontroller,
    getreport,
    updatereports,
    deletereport
};