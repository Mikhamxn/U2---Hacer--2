import { Router } from 'express';
import { body } from 'express-validator';
import { MateriaProfesorController } from '../controllers/MateriaProfesorController';
import { handleInputErrors } from '../middleware/validation';

const router = Router();

// Ruta POST para crear una asignación de materia a profesor
router.post('/',
  body('numeroEmpleado')
    .notEmpty()
    .withMessage('numeroEmpleado is required'),
  body('idMateria')
    .notEmpty()
    .withMessage('idMateria is required'),
  handleInputErrors,
  MateriaProfesorController.assignTeacherToSubject
);

// Ruta GET para obtener todas las asignaciones de materias a profesores
router.get('/', MateriaProfesorController.getAllAssignments);

export default router;
