import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { corsOptions } from "./config/cors";
import { connectDB } from "./config/db";
import usersRoutes from "./routes/usersRoutes";
import teacherRoutes from "./routes/teacherRoutes";
import subjectRoutes from "./routes/subjectRoutes";
import studentRoutes from "./routes/studentRoutes";
import materiaprofesorRoutes from './routes/materiaprofesorRoutes';

dotenv.config();

connectDB();

const app = express();
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());

// Routers
app.use("/api/users", usersRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/materiaProfesor", materiaprofesorRoutes);
export default app;
