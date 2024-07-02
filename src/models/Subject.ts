import mongoose, { Schema, Document } from "mongoose";

// Definición de la interfaz ISubject
export interface ISubject extends Document {
    idMateria: string;
    nombre: string;
}

// Creación del esquema de materia
const subjectSchema: Schema = new Schema({
    idMateria: {
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

// Creación y exportación del modelo Subject
const Subject = mongoose.model<ISubject>('Subject', subjectSchema);
export default Subject;
