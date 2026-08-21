import express from "express";
import { login, register, logout, getProfile } from "../Controllers/usercontroller.js";

import { protect } from "../middleware/usermiddleware.js";

const routes = express.Router();


routes.post("/login", login);
routes.post("/register", register);
routes.post("/logout", logout);
routes.get("/profile",protect, getProfile);
export default routes;
