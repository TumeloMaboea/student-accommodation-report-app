

import { prisma } from "../config/db.js";




const roomcontroller = async(req, res)=>
{
  try{

      

    const  {roomNumber , residenceId } = req.body;

    const  room = await prisma.room.create({

       data :{
       
           roomNumber: roomNumber,
           residenceId :  residenceId

       }

    })



    return res.status(201).json({
    
         message:"Room created",
         room
  

    })

     


  }

  catch(error)
  {
   

    return res.status(500).json({

        message:"Something went wrong ",
        error: error.message
    });


  }

}
 export {roomcontroller};
