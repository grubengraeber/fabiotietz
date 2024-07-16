import React from 'react'

function MenuButton({ label, onClickFunction } : {
    label: string, 
    onClickFunction: any
}) {
  return (
    <button
    onClick={onClickFunction}
    className='text-2xl font-bold cursor-pointer hover:text-emerald-600 transition-colors'
    >
      {label}
    </button>
  )
}

export default MenuButton
