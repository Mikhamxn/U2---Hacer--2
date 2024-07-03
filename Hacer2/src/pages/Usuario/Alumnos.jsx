import React, { useEffect, useState } from 'react';

function Alumnos() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/students');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setStudents(data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    return (
        <div className="container h-screen mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Listado de Estudiantes</h1>
            <div className="overflow-x-auto">
                <div className="shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-200 text-gray-700">
                    <tr>
                        <th className="py-3 px-4 text-left">Matrícula</th>
                        <th className="py-3 px-4 text-left">Nombre</th>
                        <th className="py-3 px-4 text-left">Carrera</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {students.map(student => (
                        <tr key={student._id} className="hover:bg-gray-100">
                        <td className="py-4 px-6 text-gray-900 whitespace-nowrap">{student.matricula}</td>
                        <td className="py-4 px-6 text-gray-900">{student.nombre}</td>
                        <td className="py-4 px-6 text-gray-900">{student.carrera}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
}

export default Alumnos