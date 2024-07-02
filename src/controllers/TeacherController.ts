import { Request, Response } from 'express';
import Teacher from '../models/Teacher';

export class TeacherController {
    static createTeacher = async (req: Request, res: Response) => {
        const teacher = new Teacher(req.body);

        try {
            await teacher.save();
            res.send("Teacher created successfully");
        } catch (error) {
            console.log(error);
            res.status(500).send("Error creating teacher");
        }
    }

    static getAllTeachers = async (req: Request, res: Response) => {
        try {
            const teachers = await Teacher.find({});
            res.json(teachers);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error retrieving teachers");
        }
    }

    static getTeacherById = async (req: Request, res: Response) => {
        const { teacherId } = req.params;
        try {
            const teacher = await Teacher.findById(teacherId);
            if (!teacher) {
                return res.status(404).send("Teacher not found");
            }
            res.json(teacher);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error retrieving teacher");
        }
    }

    static updateTeacherById = async (req: Request, res: Response) => {
        const { teacherId } = req.params;
        try {
            const teacher = await Teacher.findByIdAndUpdate(teacherId, req.body, { new: true });
            if (!teacher) {
                return res.status(404).send("Teacher not found");
            }
            res.send("Teacher updated successfully");
        } catch (error) {
            console.log(error);
            res.status(500).send("Error updating teacher");
        }
    }

    static deleteTeacherById = async (req: Request, res: Response) => {
        const { teacherId } = req.params;
        try {
            const teacher = await Teacher.findByIdAndDelete(teacherId);
            if (!teacher) {
                return res.status(404).send("Teacher not found");
            }
            res.send("Teacher deleted successfully");
        } catch (error) {
            console.log(error);
            res.status(500).send("Error deleting teacher");
        }
    }
}