import React from 'react'

function Input(props) {
  return (
    <div className='flex flex-col gap-1'>
        <label className='text-2xl font-semibold'>
            {props.label}
        </label>
        <input className='h-10 rounded-md px-2'
                        type={props.type}
                        name={props.name}
                        placeholder={props.placeholder}
                        value={props.value}

                    />
    </div>
  )
}

export default Input