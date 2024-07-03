import React, { useState, useEffect } from 'react';

function Maestros() {
    const [maestros, setMaestros] = useState([]);

    useEffect(() => {

        const fetchMaestros = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/teachers'); 
            if (!response.ok) {
            throw new Error('Error al obtener los maestros');
            }
            const data = await response.json();
            setMaestros(data); 
        } catch (error) {
            console.error('Error:', error);
        }
        };

        fetchMaestros();
    }, []); 

    return (
        <div className="container h-screen mx-auto px-4">

        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Listado de Maestros</h1>
        <div className="overflow-x-auto">
            <div className="shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-200 text-gray-700">
                <tr>
                    <th className="py-3 px-4 text-left">No. Empleado</th>
                    <th className="py-3 px-4 text-left">Nombre</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                {maestros.map(maestro => (
                    <tr key={maestro._id} className="hover:bg-gray-100">
                    <td className="py-4 px-6 text-gray-900">{maestro.numeroEmpleado}</td>
                    <td className="py-4 px-6 text-gray-900">{maestro.nombre}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
}

export default Maestros;
