import React, { useState, useEffect } from 'react';



function Home() {
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/users');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);
    return (
        
        <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4">
            <ul className="list-disc pl-6">
                {users.map(user => (
                    <li key={user._id}>
                        {user.email}
                        {user.password}
                    </li>
                ))}
            </ul>
        </div>
        <main className="container mx-auto py-8 px-4">
            <section className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Bienvenido al Sistema de Control Escolar</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
                Gestiona eficientemente alumnos, profesores y materias en tu institución educativa.
                Registra, actualiza y genera reportes de manera sencilla y organizada. Mantén a tu comunidad educativa informada y al tanto de los eventos y novedades más recientes.
            </p>
            </section>

            <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Noticias y Eventos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Conoce las nuevas funcionalidades</h3>
                <p className="text-gray-700 leading-relaxed">
                    Estamos lanzando nuevas características para mejorar la experiencia de uso del sistema.
                    Infórmate sobre las últimas actualizaciones y cómo pueden beneficiar a tu institución.
                </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Próximos eventos educativos</h3>
                <p className="text-gray-700 leading-relaxed">
                    Participa en nuestros eventos educativos diseñados para el intercambio de conocimientos
                    y experiencias entre profesores, estudiantes y administradores. Mantente actualizado con las fechas y actividades programadas.
                </p>
                </div>
            </div>
            </section>

        </main>
        </div>
    );
}

export default Home;
