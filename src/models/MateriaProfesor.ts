import mongoose, { Schema, Document } from 'mongoose';

    export interface IMateriaProfesor extends Document {
    numeroEmpleado: string;
    idMateria: string;
    }

    const MateriaProfesorSchema: Schema = new Schema({
    numeroEmpleado: { type: String, required: true },
    idMateria: { type: String, required: true },
    });

    export default mongoose.model<IMateriaProfesor>('MateriaProfesor', MateriaProfesorSchema);
