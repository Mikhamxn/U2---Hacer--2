import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
            <p className="text-center text-sm">
            Creado por Miguel Tovar y Jair Camacho con ❤️ utilizando React, JavaScript, TypeScript,
            Express, Node.js y Tailwind CSS
            </p>
            <p className="text-center text-sm mt-2">
            © {new Date().getFullYear()} Todos los derechos reservados
            </p>
        </div>
        </footer>
    );
}

export default Footer;
