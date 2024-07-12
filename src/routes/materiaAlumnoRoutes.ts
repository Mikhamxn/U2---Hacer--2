// materiaAlumnoRoutes.ts
import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { MateriaAlumnoController } from '../controllers/MateriaAlumnoController';

const router = Router();

// Ruta POST para crear una asignación de materia a alumno
router.post('/',
  body('matricula')
    .notEmpty()
    .withMessage('Matricula is required'),
  body('idMateria')
    .notEmpty()
    .withMessage('idMateria is required'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await MateriaAlumnoController.assignSubjectToStudent(req, res);
    } catch (error) {
      console.error('Error creating assignment:', error);
      res.status(500).send('Server Error');
    }
  }
);

// Ruta GET para obtener todas las asignaciones de materias a alumnos
router.get('/', MateriaAlumnoController.getAllAssignments);

export default router;
