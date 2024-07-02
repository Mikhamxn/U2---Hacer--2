import mongoose, { Schema, Document } from "mongoose";

// Definición de la interfaz IStudent
export interface IStudent extends Document {
    matricula: string;
    nombre: string;
    carrera: string;
}

// Creación del esquema de alumno
const studentSchema: Schema = new Schema({
    matricula: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    carrera: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

// Creación y exportación del modelo Student
const Student = mongoose.model<IStudent>('Student', studentSchema);
export default Student;
