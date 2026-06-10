'use client'
import { useRouter } from 'next/dist/client/components/navigation'
import React, {useState} from 'react'

const FirstLock = () => {
    const [countOne, setCountOne] = useState(1)
    const [countTwo, setCountTwo] = useState(4)
    const [countThree, setCountThree] = useState(5)
    const [countFour, setCountFour] = useState(3)
    const router= useRouter();
    const handleClick = () => {
        if(countOne === 1 && countTwo === 2 && countThree === 6 && countFour === 4)
        router.push("/the-walls");
    };

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
        if(countTwo === 9)
        {
            setCountTwo(0)
        } else {
            setCountTwo(countTwo + 1)
        }      
    }
     const handleDownTwo = () => {
        if(countTwo === 0)
        {
            setCountTwo(9)
        } else {
            setCountTwo(countTwo - 1)
        }      
    }
    const handleUpThree = () => {
        if(countThree === 9)
        {
            setCountThree(0)
        } else {
            setCountThree(countThree + 1)
        }      
    }
     const handleDownThree = () => {
        if(countThree === 0)
        {
            setCountThree(9)
        } else {
            setCountThree(countThree - 1)
        }      
    }
    const handleUpFour = () => {
        if(countFour === 9)
        {
            setCountFour(0)
        } else {
            setCountFour(countFour + 1)
        }      
    }
     const handleDownFour = () => {
        if(countFour === 0)
        {
            setCountFour(9)
        } else {
            setCountFour(countFour - 1)
        }      
    }
  return (
    <div className="flex flex-col justify-center items-center">
        <section className="flex flex-col w-300 px-60">
            <h2 className="font-bold text-sm mb-2">By the lock you find a note:</h2>
            <div className="text-xs text-gray-600 bg-gray-200 flex flex-col mb-5">
                <p>The week has ended in a haze, you&apos;ve gained a lot in 7 days</p>
                <p>Today you have four times more than what you had the day before. </p>
                <p>On the day it all began, you held 11 in both hands</p>
                <p>From that day to the next, your amount increased by double X</p>
                <p>X is an amount one greater than the sum of 23 and 44 minus 10</p>
                <p>And X you have once again, as the amount you had 2 days after it began,</p>
                <p>From that day, two more days go and pass then on this day you&apos;ve 5 times more than the first, banked and clasped</p>
                <p>To fill the forth day and the fifth, take the second and add the sixth</p>
                <p>Now that you have each day&apos;s sum, add them back one by one</p>
                <p>Thats the number you have won, place it in the lock and see it spun</p>
            </div>
        </section>
        <section className="flex flex-row">
            <section className="flex flex-col m-1">
                <button onClick={handleUpOne} className="bg-red-500 m-1 w-20 h-10">+</button>
                <span className="bg-red-500 w-20 m-1 h-20 flex items-center justify-center">{countOne}</span>
                <button onClick={handleDownOne} className="bg-red-500 m-1 w-20 h-10">-</button>
            </section>
            <section className="flex flex-col m-1">
                <button onClick={handleUpTwo}  className="bg-blue-500 w-20 m-1 h-10">+</button>
                <span className="bg-blue-500 w-20 m-1 h-20 flex items-center justify-center">{countTwo}</span>
                <button onClick={handleDownTwo} className="bg-blue-500 w-20 m-1 h-10">-</button>
            </section>
            <section className="flex flex-col m-1">
                <button onClick={handleUpThree} className="bg-green-500 w-20 m-1 h-10">+</button>
                <span className="bg-green-500 w-20 m-1 h-20 flex items-center justify-center">{countThree}</span>
                <button onClick={handleDownThree} className="bg-green-500 w-20 m-1 h-10">-</button>
            </section>
            <section className="flex flex-col m-1">
                <button onClick={handleUpFour} className="bg-yellow-500 w-20 m-1 h-10">+</button>
                <span className="bg-yellow-500 w-20 m-1 h-20 flex items-center justify-center">{countFour}</span>
                <button onClick={handleDownFour} className="bg-yellow-500 w-20 m-1 h-10">-</button>
            </section>
        </section>
        <button
        onClick={handleClick}
        className="group w-24 h-12 bg-black text-white rounded-full flex items-center justify-center mt-5"
      >
        {/* Normal text */}
        <p className="group-hover:hidden">UNLOCK</p>

        {/* Hover text */}
        <p className="hidden group-hover:block text-white">
          💀
        </p>
      </button>
    </div>
  )
}

export default FirstLock
