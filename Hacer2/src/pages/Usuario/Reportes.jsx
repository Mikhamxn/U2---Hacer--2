import React, { useState, useEffect } from 'react';

function Reportes() {
    const [alumnos, setAlumnos] = useState([]);
    const [profesores, setProfesores] = useState([]);
    const [materias, setMaterias] = useState([]);

    useEffect(() => {

        const fetchAlumnos = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/students'); 
            if (!response.ok) {
            throw new Error('Error al obtener los alumnos');
            }
            const data = await response.json();
            setAlumnos(data); 
        } catch (error) {
            console.error('Error:', error);
        }
        };


        const fetchProfesores = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/teachers'); 
            if (!response.ok) {
            throw new Error('Error al obtener los profesores');
            }
            const data = await response.json();
            setProfesores(data); 
        } catch (error) {
            console.error('Error:', error);
        }
        };

        const fetchMaterias = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/subjects');
            if (!response.ok) {
            throw new Error('Error al obtener las materias');
            }
            const data = await response.json();
            setMaterias(data);
        } catch (error) {
            console.error('Error:', error);
        }
        };

        fetchAlumnos();
        fetchProfesores();
        fetchMaterias();
    }, []); 

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Reportes</h1>

            <div className="mb-8">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <ul className="divide-y divide-gray-200">
                    {alumnos.map(alumno => (
                    <li key={alumno._id} className="px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center">
                        <span className="font-medium">{alumno.nombre}</span>
                        <span className="ml-4 text-gray-600">{alumno.matricula}</span>
                        </div>
                        <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-200 rounded-md">
                        Alumno
                        </span>
                    </li>
                    ))}
                </ul>
                </div>
            </div>

            <div className="mb-8">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <ul className="divide-y divide-gray-200">
                    {profesores.map(profesor => (
                    <li key={profesor.numeroEmpleado} className="px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center">
                        <span className="font-medium">{profesor.nombre}</span>
                        <span className="ml-4 text-gray-600">{profesor.numeroEmpleado}</span>
                        </div>
                        <span className="px-3 py-1 text-sm font-medium text-blue-800 bg-blue-200 rounded-md">
                        Profesor
                        </span>
                    </li>
                    ))}
                </ul>
                </div>
            </div>

            <div className="mb-8">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <ul className="divide-y divide-gray-200">
                    {materias.map(materia => (
                    <li key={materia.idMateria} className="px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center">
                        <span className="font-medium">{materia.nombre}</span>
                        <span className="ml-4 text-gray-600">{materia.idMateria}</span>
                        </div>
                        <span className="px-3 py-1 text-sm font-medium text-purple-800 bg-purple-200 rounded-md">
                        Materia
                        </span>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
            </div>
        );
    }   

export default Reportes;
