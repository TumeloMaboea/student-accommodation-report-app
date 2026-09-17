

import express from 'express';

const routes =  express.Router();
//import { residencecontroller } from '../controllers/residencecontroller.js';
import { roomcontroller } from '../controllers/roomscontroller.js';


routes.post("/", roomcontroller);



export default routes;