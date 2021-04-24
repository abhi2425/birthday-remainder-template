import React from 'react'
import './ShowPerson.css'

const showPerson = ({ person }) => {
   return (
      <div className='showPerson'>
         <div className='showPersonImage'>
            <img src={person?.image} alt={person?.name} />
         </div>
         <div className='showPersonDetails'>
            <div className='personName'>{person?.name}</div>
            <div className='personAge'>{person?.age}</div>
         </div>
      </div>
   )
}
export default showPerson
