import { Router } from "express";
import { body, param } from "express-validator";
import { SubjectController } from "../controllers/SubjectController";
import { handleInputErrors } from "../middleware/validation";
import { validateSubjectExists } from "../middleware/subject";

const router = Router();

router.post('/',
    body('idMateria')
        .notEmpty()
        .withMessage('idMateria is required'),
    body('nombre')
        .notEmpty()
        .withMessage('nombre is required'),
    handleInputErrors,
    SubjectController.createSubject
);

router.get('/', SubjectController.getAllSubjects);

router.get('/:subjectId',
    param('subjectId')
        .notEmpty()
        .withMessage('subjectId is required'),
    handleInputErrors,
    validateSubjectExists,
    SubjectController.getSubjectById
);

router.put('/:subjectId',
    param('subjectId')
        .notEmpty()
        .withMessage('subjectId is required'),
    body('idMateria')
        .notEmpty()
        .withMessage('idMateria is required'),
    body('nombre')
        .notEmpty()
        .withMessage('nombre is required'),
    handleInputErrors,
    validateSubjectExists,
    SubjectController.updateSubjectById
);

router.delete('/:subjectId',
    param('subjectId')
        .notEmpty()
        .withMessage('subjectId is required'),
    handleInputErrors,
    validateSubjectExists,
    SubjectController.deleteSubjectById
);


export default router;