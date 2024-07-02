import type { Response, Request, NextFunction } from "express";
import Student, { IStudent } from "../models/Student";

declare global {
    namespace Express {
        interface Request {
            student: IStudent;
        }
    }
}

export async function validateStudentExists(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const { studentId } = req.params;
        const student = await Student.findById(studentId);

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        req.student
        next();
    } catch (error) {
        res.status(500).json({ message: "Error validating student" });
    }
}