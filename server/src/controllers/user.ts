import { NextFunction, Request, Response } from "express";
import { User } from "../models/user";
import asyncHandler from "../utils/asyncHandler";
import generateToken from "../utils/generateToken";


// @route POST  /register
export const RegisterUser = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email })

    if (existingUser) {
        res.status(400);
        throw new Error("User already exist with this email address");
    }

    const newUser = await User.create({
        name,
        email,
        password,
    })

    if (newUser) {
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
        })
    }
});

// @route Login /login 

export const login = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email })

    if (existingUser && await existingUser.matchPassword(password)) {
        //jwt token generate
        generateToken(res, existingUser._id);
        res.status(200).json({
            _id: existingUser._id,
            name: existingUser.name,
            email: existingUser.email,
        })
    } else {
        res.status(404);
        throw new Error("User not found with this credentials.")
    }
})

// @route POST /logout 

export const logout = asyncHandler(async (req: Request, res: Response) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
    })

    res.status(200).json({ message: "logged out" })
}) 