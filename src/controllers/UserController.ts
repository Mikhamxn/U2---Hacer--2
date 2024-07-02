import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/Users';

export class UserController {
    static createUser = async (req: Request, res: Response) => {
        const { email, password } = req.body;

        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({ email, password: hashedPassword });

            await user.save();
            res.send("User created successfully");
        } catch (error) {
            console.log(error);
            res.status(500).send("Error creating user");
        }
    }

    static getAllUsers = async (req: Request, res: Response) => {
        try {
            const users = await User.find({});
            res.json(users);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error retrieving users");
        }
    }

    static getUserById = async (req: Request, res: Response) => {
        const { userId } = req.params;
        try {
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).send("User not found");
            }
            res.json(user);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error retrieving user");
        }
    }

    static updateUserById = async (req: Request, res: Response) => {
        const { userId } = req.params;
        try {
            const user = await User.findByIdAndUpdate(userId, req.body, { new: true });
            if (!user) {
                return res.status(404).send("User not found");
            }
            res.send("User updated successfully");
        } catch (error) {
            console.log(error);
            res.status(500).send("Error updating user");
        }
    }

    static deleteUserById = async (req: Request, res: Response) => {
        const { userId } = req.params;
        try {
            const user = await User.findByIdAndDelete(userId);
            if (!user) {
                return res.status(404).send("User not found");
            }
            res.send("User deleted successfully");
        } catch (error) {
            console.log(error);
            res.status(500).send("Error deleting user");
        }
    }

    static loginUser = async (req: Request, res: Response) => {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });
            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(401).send("Invalid email or password");
            }
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
            res.json({ token });
        } catch (error) {
            console.log(error);
            res.status(500).send("Error logging in user");
        }
    }

    static getProfile = async (req: Request & { userId: string }, res: Response) => {
        try {
            const user = await User.findById(req.userId).select('-password');
            res.json(user);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error retrieving profile");
        }
    }
}
