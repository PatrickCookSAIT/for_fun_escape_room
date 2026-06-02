'use client'
import React, {useState} from 'react'

const FirstLock = () => {
    const [countOne, setCountOne] = useState(1)
    const [countTwo, setCountOne] = useState(4)
    const [countThree, setCountOne] = useState(5)
    const [countFour, setCountOne] = useState(3)

    const handleUpOne = () => {
        setCountOne(countOne + 1)
    }
     const handleDownOne = () => {
        setCountOne(countOne - 1)
    }
  return (
    <div>
      
    </div>
  )
}

export default FirstLock
