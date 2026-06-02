'use client'
import { useRouter } from 'next/dist/client/components/navigation'
import React, {useState} from 'react'

const WallSelect = () => {
    const router= useRouter();
    const handleClickLeft = () => {
        router.push("/open-your-eyes");
    };
    const handleClickForward = () => {
        router.push("/open-your-eyes");
    };
    const handleClickRight = () => {
        router.push("/open-your-eyes");
    };
    const handleClickBox = () => {
        router.push("/open-your-eyes");
    };
  return (
    <div className="flex flex-col">
        <section>
            <p>
                You enter a room draped in bright white light. In front of you lays a box with a combination lock, type of lock you'd use in high school with a 3 number combination.
                Surrounding the box are three distinct walls. On your left, a wall that is bathed in red light from a fixture overhead. The wall on your right has WIP. And in front of you is the wall with a door. On the door are stange symbols ordered in a grid.
            </p>
        </section>
        <section className="flex items-center justify-center">
            <button
            onClick={handleClickForward}
            className="group w-24 h-12 bg-black text-white rounded-full flex items-center justify-center"
        >
            {/* Normal text */}
            <p className="group-hover:hidden">GO FORWARD</p>

            {/* Hover text */}
            <p className="hidden group-hover:block text-white">
            💀
            </p>
            </button>
        </section>
        <section className="flex flex-row items-center justify-center mt-10">
            <button
                onClick={handleClickLeft}
                className="group w-24 h-12 bg-black text-white rounded-full flex items-center justify-center"
            >
                {/* Normal text */}
                <p className="group-hover:hidden">GO LEFT</p>

                {/* Hover text */}
                <p className="hidden group-hover:block text-white">
                💀
                </p>
            </button>
            
            <button
                onClick={handleClickRight}
                className="group w-24 h-12 bg-black text-white rounded-full flex items-center justify-center mx-5"
            >
                {/* Normal text */}
                <p className="group-hover:hidden">VIEW THE BOX</p>

                {/* Hover text */}
                <p className="hidden group-hover:block text-white">
                💀
                </p>
            </button>
            <button
                onClick={handleClickBox}
                className="group w-24 h-12 bg-black text-white rounded-full flex items-center justify-center"
            >
                {/* Normal text */}
                <p className="group-hover:hidden">GO RIGHT</p>

                {/* Hover text */}
                <p className="hidden group-hover:block text-white">
                💀
                </p>
            </button>
        </section>
    </div>
  )
}

export default WallSelect
