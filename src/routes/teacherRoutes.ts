import { Router } from "express";
import { body, param } from "express-validator";
import { TeacherController } from "../controllers/TeacherController";
import { handleInputErrors } from "../middleware/validation";
import { validateTeacherExists } from "../middleware/teacher";

const router = Router();

router.post('/',
    body('numeroEmpleado')
        .notEmpty()
        .withMessage('numeroEmpleado is required'),
    body('nombre')
        .notEmpty()
        .withMessage('nombre is required'),
    handleInputErrors,
    TeacherController.createTeacher
)

router.get('/', TeacherController.getAllTeachers);

router.get('/:teacherId',
    param('teacherId')
        .notEmpty()
        .withMessage('teacherId is required'),
    handleInputErrors,
    validateTeacherExists,
    TeacherController.getTeacherById
);

router.put('/:teacherId',
    param('teacherId')
        .notEmpty()
        .withMessage('teacherId is required'),
    body('numeroEmpleado')
        .notEmpty()
        .withMessage('numeroEmpleado is required'),
    body('nombre')
        .notEmpty()
        .withMessage('nombre is required'),
    handleInputErrors,
    validateTeacherExists,
    TeacherController.updateTeacherById);

router.delete('/:teacherId',
    param('teacherId')
        .notEmpty()
        .withMessage('teacherId is required'),
    handleInputErrors,
    validateTeacherExists,
    TeacherController.deleteTeacherById
);


export default router;