import React from 'react'
import { useState } from 'react'

import ImgMapper from '../components/ImgMapper'
import StringCropper from '../components/StringCropper'

function Index() {
  const [notation, setNotation] = useState('')
  const [userInput, setUserInput] = useState('')

  const handleChange = (event) => {
    setNotation(StringCropper(event.target.value))
    setUserInput(event.target.value)
  }

  const input = `F U R B L (D F' U' R' B') L' D'`

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
          <ImgMapper input={notation} userInput={userInput} />
        </div>
      </div>
    </>
  )
}

export default Index
