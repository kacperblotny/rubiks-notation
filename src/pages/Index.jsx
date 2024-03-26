import React from 'react'
import { useState } from 'react'

import ImgMapper from '../components/ImgMapper'

function Index() {
  const [notation, setNotation] = useState('')

  const handleChange = (event) => {
    setNotation(event.target.value)
  }

  console.log(notation)

  const input = `U U' M R`
  return (
    <>
      <div className='flex mx-auto pt-32'>
        <div className='mx-auto'>
          <input
            type='text'
            onChange={handleChange}
            className='w-[850px] mb-4 rounded p-2'
            placeholder='Paste notation...'
          />
          <ImgMapper input={notation.toUpperCase()} />
        </div>
      </div>
    </>
  )
}

export default Index
