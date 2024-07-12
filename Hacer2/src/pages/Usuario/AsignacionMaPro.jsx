import React, { useState, useEffect } from 'react';

function AsignacionMaPro() {
  const [teachers, setTeachers] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [selectedTeacherId, setSelectedTeacherId] = useState('');
  const [selectedSubjectId, setSelectedSubjectId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teacherResponse = await fetch('http://localhost:4000/api/teachers');
        const teachers = await teacherResponse.json();
        setTeachers(teachers);

        const subjectResponse = await fetch('http://localhost:4000/api/subjects');
        const subjects = await subjectResponse.json();
        setSubjects(subjects);

        const assignmentsResponse = await fetch('http://localhost:4000/api/materiaProfesor');
        const assignments = await assignmentsResponse.json();
        setAssignments(assignments);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedTeacherId || !selectedSubjectId) {
      console.error('Por favor selecciona un profesor y una materia.');
      return;
    }

    console.log('Profesor seleccionado:', selectedTeacherId);
    console.log('Materia seleccionada:', selectedSubjectId);

    const assignment = {
      numeroEmpleado: selectedTeacherId,
      idMateria: selectedSubjectId,
    };

    try {
      const response = await fetch('http://localhost:4000/api/materiaProfesor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(assignment),
      });

      if (response.ok) {
        alert('Asignación creada exitosamente');
        // Actualizar la lista de asignaciones después de la creación
        const updatedAssignmentsResponse = await fetch('http://localhost:4000/api/materiaProfesor');
        const updatedAssignments = await updatedAssignmentsResponse.json();
        setAssignments(updatedAssignments);
      } else {
        console.error('Error al crear la asignación:', response.statusText);
      }
    } catch (error) {
      console.error('Error al crear la asignación:', error);
    }
  };

  return (
    <div className="container h-screen mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Asignación de Materia a Profesor</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="teacher" className="mb-2 font-medium">Profesor:</label>
          <select
            id="teacher"
            value={selectedTeacherId}
            onChange={(e) => setSelectedTeacherId(e.target.value)}
            className="p-2 border rounded-md"
          >
            <option value="">Seleccionar un profesor</option>
            {teachers.map((teacher) => (
              <option key={teacher.numeroEmpleado} value={teacher.numeroEmpleado}>
                {teacher.nombre} ({teacher.numeroEmpleado})
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="subject" className="mb-2 font-medium">Materia:</label>
          <select
            id="subject"
            value={selectedSubjectId}
            onChange={(e) => setSelectedSubjectId(e.target.value)}
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
              <span className="font-medium">{assignment.numeroEmpleado}</span> - <span>{assignment.idMateria}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AsignacionMaPro;
