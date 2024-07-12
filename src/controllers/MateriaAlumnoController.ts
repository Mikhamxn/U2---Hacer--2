// MateriaAlumnoController.ts
import { Request, Response } from 'express';
import MateriaAlumno from '../models/MateriaAlumno';

export const MateriaAlumnoController = {
  assignSubjectToStudent: async (req: Request, res: Response) => {
    const { matricula, idMateria } = req.body;

    try {
      // Crear nueva asignación en la base de datos
      const newAssignment = new MateriaAlumno({ matricula, idMateria });
      await newAssignment.save();

      res.status(201).json(newAssignment);
    } catch (error) {
      console.error('Error creating assignment:', error);
      res.status(500).send('Server Error');
    }
  },

  getAllAssignments: async (req: Request, res: Response) => {
    try {
      const assignments = await MateriaAlumno.find();
      res.json(assignments);
    } catch (error) {
      console.error('Error getting assignments:', error);
      res.status(500).send('Server Error');
    }
  },
};
