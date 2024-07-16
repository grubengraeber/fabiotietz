import React from 'react'

function TechnologySkillBase({items, label} : {items: {title: string, level: number}[], label: string},) {

  return (
    <div>
      <h3 className='text-4xl font-semibold'>{label}</h3>
      {items.map((item) => (
        <>
        <p>{item.title}</p>
        <div className='h-2 w-full bg-gray-200 dark:bg-gray-900 rounded-full mt-2' style={{ width: `${item.level}%`}} />
        </>
      ))}
    </div>
  )
}

export default TechnologySkillBase
