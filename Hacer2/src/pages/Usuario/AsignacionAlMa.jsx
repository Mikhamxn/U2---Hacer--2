    import React, { useState, useEffect } from 'react';

    function AsignacionMaPro() {
    const [students, setStudents] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedTeacher, setSelectedTeacher] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [materiaProfesor, setMateriaProfesor] = useState([]);


        useEffect(() => {
            const fetchMateriaProfesor = async () => {
                try {
                const response = await fetch('http://localhost:4000/api/materia-profesor');
                if (!response.ok) {
                    throw new Error('Error al obtener las asignaciónes');
                }
                const data = await response.json();
                setMaterias(data);
                } catch (error) {
                console.error('Error:', error);
                }
            };
        
            fetchMateriaProfesor();
            }, []);
    useEffect(() => {
        
        const fetchData = async () => {
        try {
            const studentResponse = await fetch('http://localhost:4000/api/students');
            const students = await studentResponse.json();
            setStudents(students);

            const teacherResponse = await fetch('http://localhost:4000/api/teachers');
            const teachers = await teacherResponse.json();
            setTeachers(teachers);

            const subjectResponse = await fetch('http://localhost:4000/api/subjects');
            const subjects = await subjectResponse.json();
            setSubjects(subjects);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const assignment = {
        studentId: selectedStudent,
        teacherId: selectedTeacher,
        subjectId: selectedSubject,
        };

        try {
        const response = await fetch('/api/assignments/assign', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(assignment),
        });

        if (response.ok) {
            alert('Assignment created successfully');
        } else {
            console.error('Error creating assignment:', response.statusText);
        }
        } catch (error) {
        console.error('Error creating assignment:', error);
        }
    };

    return (
        <div className="container h-screen mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Asignación de Materia a Profesor</h1>
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
                    {student.nombre}
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
                    {subject.nombre}
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
        </div>
    );
    }

    export default AsignacionMaPro;
