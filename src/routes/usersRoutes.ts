import { Router } from "express";
import { body, param } from "express-validator";
import { UserController } from "../controllers/UserController";
import { handleInputErrors } from "../middleware/validation";
import { validateUserExists } from "../middleware/user";
import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();

// Ruta para registrar un nuevo usuario
router.post('/register',
    body('email')
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('email is invalid'),
    body('password')
        .notEmpty()
        .withMessage('password is required'),
    handleInputErrors,
    UserController.createUser
);

// Ruta para iniciar sesión
router.post('/login',
    body('email')
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('email is invalid'),
    body('password')
        .notEmpty()
        .withMessage('password is required'),
    handleInputErrors,
    UserController.loginUser
);

// Ruta protegida para obtener el perfil del usuario
router.get('/profile', authenticateToken, UserController.getProfile);

// Rutas CRUD para usuarios
router.get('/', UserController.getAllUsers);

router.get('/:userId',
    param('userId')
        .notEmpty()
        .withMessage('userId is required'),
    handleInputErrors,
    validateUserExists,
    UserController.getUserById
);

router.put('/:userId',
    param('userId')
        .notEmpty()
        .withMessage('userId is required'),
    body('email')
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('email is invalid'),
    body('password')
        .notEmpty()
        .withMessage('password is required'),
    handleInputErrors,
    validateUserExists,
    UserController.updateUserById
);

router.delete('/:userId',
    param('userId')
        .notEmpty()
        .withMessage('userId is required'),
    handleInputErrors,
    validateUserExists,
    UserController.deleteUserById
);

export default router;
