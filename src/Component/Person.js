import React, { memo } from 'react'
import './Person.css'
const Persons = ({ clicked, name, age, image, remove }) => {
   return (
      <article className='person'>
         <div style={{ display: 'flex', cursor: 'pointer' }} onClick={clicked}>
            <div className='personImage'>
               <img src={image} alt={name} />
            </div>
            <div className='personDetails'>
               <div className='name'>{name}</div>
               <div className='age'>{age}</div>
            </div>
         </div>

         <i className='delete-icon' onClick={remove}>
            remove
         </i>
      </article>
   )
}

export default memo(Persons)
