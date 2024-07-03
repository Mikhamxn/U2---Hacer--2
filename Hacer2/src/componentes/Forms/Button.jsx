import React from 'react'

function Button(props) {
    return (
        <button type="submit" className='bg-blue-600 text-white rounded-lg h-10 text-xl hover:bg-blue-800'> {props.children} </button>

    )
}

export default Button