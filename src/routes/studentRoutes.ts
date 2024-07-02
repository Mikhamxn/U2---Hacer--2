import { Router } from "express";
import { body, param } from "express-validator";
import { StudentController } from "../controllers/StudentController";
import { handleInputErrors } from "../middleware/validation";
import { validateStudentExists } from "../middleware/student";

const router = Router();

router.post('/',
    body('matricula')
        .notEmpty()
        .withMessage('matricula is required'),
    body('nombre')
        .notEmpty()
        .withMessage('nombre is required'),
    body('carrera')
        .notEmpty()
        .withMessage('carrera is required'),
    handleInputErrors,
    StudentController.createStudent
);

router.get('/', StudentController.getAllStudents);

router.get('/:studentId',
    param('studentId')
        .notEmpty()
        .withMessage('studentId is required'),
    handleInputErrors,
    validateStudentExists,
    StudentController.getStudentById
);

router.put('/:studentId',
    param('studentId')
        .notEmpty()
        .withMessage('studentId is required'),
    body('matricula')
        .notEmpty()
        .withMessage('matricula is required'),
    body('nombre')
        .notEmpty()
        .withMessage('nombre is required'),
    body('carrera')
        .notEmpty()
        .withMessage('carrera is required'),
    handleInputErrors,
    validateStudentExists,
    StudentController.updateStudentById
);

router.delete('/:studentId',
    param('studentId')
        .notEmpty()
        .withMessage('studentId is required'),
    handleInputErrors,
    validateStudentExists,
    StudentController.deleteStudentById
);

export default router;