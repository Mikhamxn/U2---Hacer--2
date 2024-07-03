import React from 'react'
import referencias from './Referencias'
function Links() {
    return (
        <div className='md:flex gap-7 flex-row hidden font-serif'>
            {referencias.map((referencia) => (
                <div key={referencia.nombre}>
                    <a className='cursor-pointer hover:border-b-2 border-yellow-400' href={referencia.href}> {referencia.nombre} </a>
                </div>
            ))}
        </div>
    )
}

export default Links