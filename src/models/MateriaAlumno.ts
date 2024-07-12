// models/MateriaAlumno.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IMateriaAlumno extends Document {
  matricula: string;
  idMateria: string;
}

const MateriaAlumnoSchema: Schema = new Schema({
  matricula: { type: String, required: true },
  idMateria: { type: String, required: true }
});

export default mongoose.model<IMateriaAlumno>('MateriaAlumno', MateriaAlumnoSchema);
