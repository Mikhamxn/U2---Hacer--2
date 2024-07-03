import React, { useState } from 'react';
import Button from '../../componentes/Forms/Button';
import Input from '../../componentes/Forms/Input';
import Titles from '../../componentes/Titles';

const Signin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Usuario registrado:', data);

        } catch (error) {
            console.error('Error registering:', error);
        }
    };

    return (
        <div className='flex flex-col h-screen w-screen items-center justify-center'>
            <div className='w-screen flex items-center flex-col gap-10 bg-blue-200 p-10'>
                <Titles>Regístrate</Titles>
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <Input onChange={handleChange} placeholder="Correo" type="text" name="email" label="Correo:" />
                    <Input onChange={handleChange} placeholder="Contraseña" type="password" name="password" label="Contraseña:" />
                    <Button>Registrarse</Button>
                </form>
            </div>
        </div>
    );
};

export default Signin;
