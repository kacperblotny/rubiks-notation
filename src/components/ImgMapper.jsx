import React from 'react'

// import x from '../../public/notation/'

const ImageMapper = ({ input }) => {
  // Define a mapping between characters and corresponding image sources
  const imageMap = {
    M: `/notation/M'.png`,
    L: `/notation/L'.png`,
    R: '/notation/R.png',
    U: `/notation/U'.png`,
    "U'": `/notation/cube.png`,
  }

  const parseInput = (input) => {
    const characters = []
    let i = 0

    while (i < input.length) {
      let char = input[i]
      let prime = ''

      if (input[i + 1] === "'") {
        prime = "'"
        i++
      }

      characters.push(char + prime)
      i++
    }

    return characters
  }

  // Function to render images based on parsed characters
  const renderImages = () => {
    const characters = parseInput(input)

    return characters.map((char, index) => {
      // If character mapping exists, render the corresponding image
      if (imageMap[char]) {
        return (
          <img key={index} src={imageMap[char]} alt={char} className='h-32' />
        )
      } else {
        // Handle characters without mappings (optional)
        return <span key={index}>{char}</span>
      }
    })
  }
  return <div className='flex flex-row gap-4'>{renderImages()}</div>
}

export default ImageMapper
