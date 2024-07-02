import { Request, Response } from 'express';
import Subject from '../models/Subject';

export class SubjectController {
    static createSubject = async (req: Request, res: Response) => {
        const subject = new Subject(req.body);

        try {
            await subject.save();
            res.send("Subject created successfully");
        } catch (error) {
            console.log(error);
            res.status(500).send("Error creating subject");
        }
    }

    static getAllSubjects = async (req: Request, res: Response) => {
        try {
            const subjects = await Subject.find({});
            res.json(subjects);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error retrieving subjects");
        }
    }

    static getSubjectById = async (req: Request, res: Response) => {
        const { subjectId } = req.params;
        try {
            const subject = await Subject.findById(subjectId);
            if (!subject) {
                return res.status(404).send("Subject not found");
            }
            res.json(subject);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error retrieving subject");
        }
    }

    static updateSubjectById = async (req: Request, res: Response) => {
        const { subjectId } = req.params;
        try {
            const subject = await Subject.findByIdAndUpdate(subjectId, req.body, { new: true });
            if (!subject) {
                return res.status(404).send("Subject not found");
            }
            res.send("Subject updated successfully");
        } catch (error) {
            console.log(error);
            res.status(500).send("Error updating subject");
        }
    }

    static deleteSubjectById = async (req: Request, res: Response) => {
        const { subjectId } = req.params;
        try {
            const subject = await Subject.findByIdAndDelete(subjectId);
            if (!subject) {
                return res.status(404).send("Subject not found");
            }
            res.send("Subject deleted successfully");
        } catch (error) {
            console.log(error);
            res.status(500).send("Error deleting subject");
        }
    }
}
