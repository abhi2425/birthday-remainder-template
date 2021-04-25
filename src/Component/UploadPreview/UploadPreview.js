import React, { useState } from 'react'
import './uploadPreview.css'

const UploadPreview = ({ uploadedImage, close, list }) => {
   const [name, setName] = useState('')
   const [age, setAge] = useState('')
   const [error, setError] = useState({})

   const uploadHandler = () => {
      if ((name === '' && age === '') || error.show === true) return
      list.push({ name, age: age + ' years', image: uploadedImage })

      const key = name + age + ' years'
      localStorage.setItem(key, JSON.stringify({ name, age: age + ' years', image: uploadedImage }))
      setAge('')
      setName('')
      close()
   }

   let timer = null
   const inputNameHandler = (e) => {
      clearTimeout(timer)
      setName(e.target.value)
      timer = setTimeout(() => {
         if (name.length < 3) setError({ show: true, message: "Too short name!" })
         else setError({ show: false })
      }, 1000)

   }

   let ageTimer = null
   const inputAgeHandler = (e) => {
      clearTimeout(ageTimer)
      ageTimer = setAge(e.target.value)
      setTimeout(() => {
         if (isNaN(+age) || +age === 0) setError({ show: true, message: 'Age must be a number and not 0' })
         else setError({ show: false })
      }, 1000)
   }
   return (
      <div className='preview'>
         <img src={uploadedImage} alt='uploaded' />
         <section className='details'>
            <input
               placeholder='Name'
               type='text'
               value={name}
               onChange={(e) => inputNameHandler(e)}
            />
            <input
               placeholder='Age'
               type='text'
               value={age}
               onChange={(e) => inputAgeHandler(e)}
            />
            {
               error.show ? <p className='error'>{error.message}</p> : null
            }
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
