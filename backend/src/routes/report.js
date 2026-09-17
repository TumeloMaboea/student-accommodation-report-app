
import express from 'express';

import {reportcontroller,getreport,updatereports, deletereport} from '../controllers/reportcontroller.js'
import { protect } from "../middleware/usermiddleware.js";
//import { getreport } from '../controllers/reportcontroller.js';



const routes = express.Router();

routes.post("/", protect, reportcontroller);

routes.get("/", protect, getreport);

routes.get("/:id", protect, getreport);

routes.patch("/:id", protect, updatereports);

routes.delete("/:id", protect, deletereport);

export default routes;