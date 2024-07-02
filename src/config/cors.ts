import { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
    origin: function (origin, callback) {
        const whitelist = [process.env.FRONTEND_URL];

        console.log("Origin: ", origin); // Mensaje de depuración

        if (!origin || whitelist.includes(origin)) {
            callback(null, true);
        } else {
            console.log("Blocked by CORS: ", origin); // Mensaje de depuración
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true, // Si necesitas permitir cookies
};
