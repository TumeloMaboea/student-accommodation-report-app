import { prisma } from "../config/db.js";
import bcrypt from "bcryptjs";
import { generateToken, setAuthCookie } from "../utils/utils.js";


// REGISTER
const register = async (req, res) => {
    try {
        

        const { name, email, password } = req.body;

        const userExists = await prisma.users.findUnique({
            where: {
                email: email
            }
        });

        // missing fields 

        if(!name || !email || !password){
            return res.status(400).json({

                message:"name , email and password are required",
                error:error.message
            })

            
        }

        if (userExists) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.users.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword
            }
        });

        // Generate JWT
        const token = generateToken(user.id);

        // Store JWT in HTTP-only cookie
        setAuthCookie(res, token);

        return res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {

        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });

    }
};


// LOGIN
const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await prisma.users.findUnique({
            where: {
                email: email
            }
        });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const passwordValid = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordValid) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // Generate JWT
        const token = generateToken(user.id);

        // Store JWT in HTTP-only cookie
        setAuthCookie(res, token);

        return res.status(200).json({
            message: "Login successful",
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {

        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });

    }
};


// LOGOUT
const logout = async (req, res) => {

    // Remove authentication cookie
    res.clearCookie("token");

    return res.status(200).json({
        message: "Logout successful"
    });
};

// GET PROFILE
const getProfile = async (req, res) => {
    try {
        const user = await prisma.users.findUnique({
            where: {
                id: req.userId
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(200).json({
            message: "Profile retrieved successfully",
            user
        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
};

// Export controllers
export { register, login, logout ,getProfile };




