import { Request, Response } from 'express';
import Student from '../models/Student';

export class StudentController {
    static createStudent = async (req: Request, res: Response) => {
        const student = new Student(req.body);

        try {
            await student.save();
            res.send("Student created successfully");
        } catch (error) {
            console.log(error);
            res.status(500).send("Error creating student");
        }
    }

    static getAllStudents = async (req: Request, res: Response) => {
        try {
            const students = await Student.find({});
            res.json(students);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error retrieving students");
        }
    }

    static getStudentById = async (req: Request, res: Response) => {
        const { studentId } = req.params;
        try {
            const student = await Student.findById(studentId);
            if (!student) {
                return res.status(404).send("Student not found");
            }
            res.json(student);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error retrieving student");
        }
    }

    static updateStudentById = async (req: Request, res: Response) => {
        const { studentId } = req.params;
        try {
            const student = await Student.findByIdAndUpdate(studentId, req.body, { new: true });
            if (!student) {
                return res.status(404).send("Student not found");
            }
            res.send("Student updated successfully");
        } catch (error) {
            console.log(error);
            res.status(500).send("Error updating student");
        }
    }

    static deleteStudentById = async (req: Request, res: Response) => {
        const { studentId } = req.params;
        try {
            const student = await Student.findByIdAndDelete(studentId);
            if (!student) {
                return res.status(404).send("Student not found");
            }
            res.send("Student deleted successfully");
        } catch (error) {
            console.log(error);
            res.status(500).send("Error deleting student");
        }
    }
}
