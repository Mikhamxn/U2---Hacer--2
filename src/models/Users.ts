import mongoose, { Schema, Document } from "mongoose";

// Definición de la interfaz IUser
export interface IUser extends Document {
    email: string;
    password: string;
}

// Creación del esquema de usuario
const userSchema: Schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

// Creación y exportación del modelo User
const User = mongoose.model<IUser>('User', userSchema);
export default User;
