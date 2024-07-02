import mongoose, { Schema, Document } from "mongoose";

// Definición de la interfaz ITeacher
export interface ITeacher extends Document {
    numeroEmpleado: string;
    nombre: string;
}

// Creación del esquema de profesor
const teacherSchema: Schema = new Schema({
    numeroEmpleado: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

// Creación y exportación del modelo Teacher
const Teacher = mongoose.model<ITeacher>('Teacher', teacherSchema);
export default Teacher;
