

import express from 'express';

const routes =  express.Router();
//import { residencecontroller } from '../Controllers/residencecontroller.js';
import { roomcontroller } from '../Controllers/roomscontroller.js';


routes.post("/", roomcontroller);



export default routes;