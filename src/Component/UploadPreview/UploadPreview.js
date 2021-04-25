import React, { useState } from 'react'
import './uploadPreview.css'

const UploadPreview = ({ uploadedImage, close, personList }) => {
   const [name, setName] = useState('')
   const [age, setAge] = useState('')
   const uploadHandler = () => {
      if (name === '' && age === '') return
      let dummyList = []
      personList.push({ name, age: age + ' years', image: uploadedImage })
      dummyList.push({ name, age: age + ' years', image: uploadedImage })
      localStorage.setItem(uploadedImage, JSON.stringify(dummyList))
      setAge('')
      setName('')
      close()
   }
   return (
      <div className='preview'>
         <img src={uploadedImage} alt='uploaded' />
         <section className='details'>
            <input
               placeholder='Name'
               type='text'
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
            <input
               placeholder='Age'
               type='text'
               value={age}
               onChange={(e) => setAge(e.target.value)}
            />
            <button className='btn btn-pink' onClick={uploadHandler}>
               Upload
            </button>
            <button className='btn btn-red' onClick={() => close()}>
               Cancel
            </button>
         </section>
      </div>
   )
}

export default UploadPreview
