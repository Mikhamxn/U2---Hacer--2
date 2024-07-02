import type { Response, Request, NextFunction } from "express";
import Teacher, { ITeacher } from "../models/Teacher";

declare global {
    namespace Express {
        interface Request {
            teacher: ITeacher;
        }
    }
}

export async function validateTeacherExists(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const { teacherId } = req.params;
        const teacher = await Teacher.findById(teacherId);

        if (!teacher) {
            return res.status(404).json({ message: "Teacher not found" });
        }
        req.teacher
        next();
    } catch (error) {
        res.status(500).json({ message: "Error validating teacher" });
    }
}