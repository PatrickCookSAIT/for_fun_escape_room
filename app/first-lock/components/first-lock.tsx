'use client'
import React, {useState} from 'react'

const FirstLock = () => {
    const [countOne, setCountOne] = useState(1)
    const [countTwo, setCountTwo] = useState(4)
    const [countThree, setCountThree] = useState(5)
    const [countFour, setCountFour] = useState(3)

    const handleUpOne = () => {
        if(countOne === 9)
        {
            setCountOne(0)
        } else {
            setCountOne(countOne + 1)
        }      
    }
     const handleDownOne = () => {
        if(countOne === 0)
        {
            setCountOne(9)
        } else {
            setCountOne(countOne - 1)
        }      
    }
    const handleUpTwo = () => {
        if(countOne === 9)
        {
            setCountTwo(0)
        } else {
            setCountTwo(countOne + 1)
        }      
    }
     const handleDownTwo = () => {
        if(countOne === 0)
        {
            setCountTwo(9)
        } else {
            setCountTwo(countOne - 1)
        }      
    }
    const handleUpThree = () => {
        if(countOne === 9)
        {
            setCountThree(0)
        } else {
            setCountThree(countOne + 1)
        }      
    }
     const handleDownThree = () => {
        if(countOne === 0)
        {
            setCountThree(9)
        } else {
            setCountThree(countOne - 1)
        }      
    }
    const handleUpFour = () => {
        if(countOne === 9)
        {
            setCountFour(0)
        } else {
            setCountFour(countOne + 1)
        }      
    }
     const handleDownFour = () => {
        if(countOne === 0)
        {
            setCountFour(9)
        } else {
            setCountFour(countOne - 1)
        }      
    }
  return (
    <div className="flex flex-row">
      <section className="flex flew-col">
        <button onClick={handleUpOne} className="bg-red-500 m-1">+</button>
        <span className="bg-red-500">{countOne}</span>
        <button onClick={handleDownOne} className="bg-red-500 m-1">-</button>
      </section>
      <section className="flex flew-co">
        <button onClick={handleUpTwo}  className="bg-blue-500 m-1">+</button>
        <span className="bg-blue-500">{countTwo}</span>
        <button onClick={handleDownTwo} className="bg-blue-500 m-1">-</button>
      </section>
      <section className="flex flew-co">
        <button onClick={handleUpThree} className="bg-green-500 m-1">+</button>
        <span className="bg-green-500">{countThree}</span>
        <button onClick={handleDownThree} className="bg-green-500 m-1">-</button>
      </section>
      <section className="flex flew-col">
        <button onClick={handleUpFour} className="bg-yellow-500 m-1">+</button>
        <span className="bg-yellow-500">{countFour}</span>
        <button onClick={handleDownFour} className="bg-yellow-500 m-1">-</button>
      </section>
    </div>
  )
}

export default FirstLock
