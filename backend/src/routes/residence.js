import express from 'express';

import { residencecontroller } from '../controllers/residencecontroller.js';

const routes = express.Router();


routes.post("/", residencecontroller);


export default routes;