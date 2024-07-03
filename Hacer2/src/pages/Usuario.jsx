import React from 'react'
import Card from '../componentes/Card'
import alumnos from '/alumnos.png'
import maestros from '/maestros.png'
import materias from '/materias.png'
import reportes from '/reportes.png'

function Usuario() {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <div className='flex flex-row gap-10'>
            <div className='flex flex-col gap-10'>
                <Card href="/alumnos" nombre="Alumnos" color="red" imagen="alumnos.png"/>
                <Card href="/maestros" nombre="Maestros" color="yellow" imagen="maestros.png"/>
            </div>
            <div className='flex flex-col gap-10'>
                <Card href="/materias" nombre="Materias" color="blue" imagen="materias.png"/>
                <Card href="/reportes" nombre="Reportes" color="gray" imagen="reportes.png"/>
            </div>
        </div>

    </div>
  )
}

export default Usuario