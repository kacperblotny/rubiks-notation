import React from 'react'

const ImageMapper = ({ input, userInput }) => {
  console.log(input)
  // Define a mapping between characters and corresponding image sources
  const imageMap = {
    "D'": `/notation/D'.png`,
    D: `/notation/D.png`,
    "B'": `/notation/B'.png`,
    B: `/notation/B.png`,
    "E'": `/notation/E'.png`,
    E: `/notation/E.png`,
    "F'": `/notation/F'.png`,
    F: `/notation/F.png`,
    "L'": `/notation/L'.png`,
    L: `/notation/L.png`,
    "M'": `/notation/M'.png`,
    M: `/notation/M.png`,
    "R'": `/notation/R'.png`,
    R: `/notation/R.png`,
    "S'": `/notation/S'.png`,
    S: `/notation/S.png`,
    "U'": `/notation/U'.png`,
    U: `/notation/U.png`,
    "X'": `/notation/X'.png`,
    X: `/notation/X.png`,
    "Y'": `/notation/Y'.png`,
    Y: `/notation/Y.png`,
    "Z'": `/notation/Z'.png`,
    Z: `/notation/Z.png`,
  }

  // DBEFLMRSUXYZ

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

  const renderImages = () => {
    const characters = parseInput(input)

    return characters.map((char, index) => {
      if (imageMap[char]) {
        return (
          <img
            key={index}
            src={imageMap[char]}
            alt={char}
            className='h-32 bg-white'
          />
        )
      } else {
        return <span key={index}>{char}</span>
      }
    })
  }

  return (
    <div className=''>
      <p className='my-4 font-bold text-2xl border-b'>{userInput}</p>
      <div className='grid grid-cols-6 gap-4'>{renderImages()}</div>
    </div>
  )
}

export default ImageMapper
