import type { Response, Request, NextFunction } from "express";
import Subject, { ISubject } from "../models/Subject";

declare global {
    namespace Express {
        interface Request {
            subject: ISubject;
        }
    }
}

export async function validateSubjectExists(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const { subjectId } = req.params;
        const subject = await Subject.findById(subjectId);

        if (!subject) {
            return res.status(404).json({ message: "Subject not found" });
        }
        req.subject
        next();
    } catch (error) {
        res.status(500).json({ message: "Error validating subject" });
    }
}