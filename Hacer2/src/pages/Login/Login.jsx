import React, { useState } from 'react';
import Input from '../../componentes/Forms/Input';
import Button from '../../componentes/Forms/Button';
import Titles from '../../componentes/Titles';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Usuario o contraseña incorrectos');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);
            window.location.href = '/usuario'; // Redirigir al usuario a la página de usuario

        } catch (error) {
            console.error('Error al iniciar sesión:', error.message);
            // Mostrar el error al usuario (por ejemplo, en un mensaje debajo del formulario)
        }
    };

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="w-screen flex items-center flex-col gap-10 bg-blue-200 p-10">
                <Titles>Inicia sesión</Titles>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <Input
                        onChange={handleChange}
                        placeholder="Correo"
                        type="text"
                        name="email"
                        label="Correo:"
                    />
                    <Input
                        onChange={handleChange}
                        placeholder="Contraseña"
                        type="password"
                        name="password"
                        label="Contraseña:"
                    />
                    <Button type="submit">Comenzar</Button>
                </form>
            </div>
        </div>
    );
};

export default Login;
