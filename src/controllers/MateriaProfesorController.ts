// MateriaProfesorController.ts

import { Request, Response } from 'express';
import MateriaProfesor from '../models/MateriaProfesor';

export const MateriaProfesorController = {
  assignTeacherToSubject: async (req: Request, res: Response) => {
    const { numeroEmpleado, idMateria } = req.body;

    try {
      const newAssignment = new MateriaProfesor({
        numeroEmpleado,
        idMateria,
      });

      await newAssignment.save();

      res.status(201).json({ message: 'Assignment created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  },

  getAllAssignments: async (req: Request, res: Response) => {
    try {
      const assignments = await MateriaProfesor.find();
      res.json(assignments);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  },
};
