import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function AsignacionAlMa() {
    const [students, setStudents] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch students
                const studentResponse = await fetch('http://localhost:4000/api/students');
                const students = await studentResponse.json();
                setStudents(students);

                // Fetch subjects
                const subjectResponse = await fetch('http://localhost:4000/api/subjects');
                const subjects = await subjectResponse.json();
                setSubjects(subjects);

                // Fetch assignments
                const assignmentsResponse = await fetch('http://localhost:4000/api/materiaAlumno');
                const assignments = await assignmentsResponse.json();
                setAssignments(assignments);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const getStudentName = (matricula) => {
        const student = students.find((student) => student.matricula === matricula);
        return student ? student.nombre : 'Alumno no encontrado';
    };

    const getSubjectName = (idMateria) => {
        const subject = subjects.find((subject) => subject.idMateria === idMateria);
        return subject ? subject.nombre : 'Materia no encontrada';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedStudent || !selectedSubject) {
            console.error('Por favor selecciona un alumno y una materia.');
            return;
        }

        console.log('Alumno seleccionado:', selectedStudent);
        console.log('Materia seleccionada:', selectedSubject);

        const assignment = {
            matricula: selectedStudent,
            idMateria: selectedSubject,
        };

        try {
            const response = await fetch('http://localhost:4000/api/materiaAlumno', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(assignment),
            });

            if (response.ok) {
                alert('Asignación creada exitosamente');
                // Actualizar la lista de asignaciones después de la creación
                const updatedAssignmentsResponse = await fetch('http://localhost:4000/api/materiaAlumno');
                const updatedAssignments = await updatedAssignmentsResponse.json();
                setAssignments(updatedAssignments);
                // Limpiar los campos después de la asignación
                setSelectedStudent('');
                setSelectedSubject('');
            } else {
                console.error('Error al crear la asignación:', response.statusText);
            }
        } catch (error) {
            console.error('Error al crear la asignación:', error);
        }
    };

    return (
        <div className="container h-screen mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Asignación de Materia a Alumno</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="student" className="mb-2 font-medium">Alumno:</label>
                    <select
                        id="student"
                        value={selectedStudent}
                        onChange={(e) => setSelectedStudent(e.target.value)}
                        className="p-2 border rounded-md"
                    >
                        <option value="">Seleccionar un alumno</option>
                        {students.map((student) => (
                            <option key={student.matricula} value={student.matricula}>
                                {student.nombre} ({student.matricula})
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="subject" className="mb-2 font-medium">Materia:</label>
                    <select
                        id="subject"
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value)}
                        className="p-2 border rounded-md"
                    >
                        <option value="">Seleccionar una materia</option>
                        {subjects.map((subject) => (
                            <option key={subject.idMateria} value={subject.idMateria}>
                                {subject.nombre} ({subject.idMateria})
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                    Asignar
                </button>
            </form>

            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Asignaciones actuales:</h2>
                <ul className="divide-y divide-gray-200">
                    {assignments.map((assignment) => (
                        <li key={assignment._id} className="py-2">
                            <span className="font-medium">{getStudentName(assignment.matricula)}</span> - 
                            <span>{getSubjectName(assignment.idMateria)}</span>
                            {/* Icono de eliminar (no funcional) */}
                            <FontAwesomeIcon icon={faTimes} className="ml-2 text-red-500 cursor-pointer" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AsignacionAlMa;
