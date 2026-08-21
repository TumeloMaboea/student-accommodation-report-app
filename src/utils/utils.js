// generate token for the jwt uthentication

import jwt from "jsonwebtoken";

// jwt function 

export const generateToken = (userId) => {

    // Creates and returns a signed JWT token
    return jwt.sign(
        //Stores the user's ID inside the JWT payload
        { userId },
        //Uses the secret key stored in the environment variables
        process.env.JWT_SECRET,

         // Sets the JWT to expire after 7 days
        { expiresIn: "7d" }
    );
};

export const verifyToken = (token) => {

    return jwt.verify(
        token,
        process.env.JWT_SECRET
    );


};
// cookies

export const setAuthCookie = (res, token) => {

       // Creates a secure HTTP-only cookie containing the JWT
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict"
    });

};