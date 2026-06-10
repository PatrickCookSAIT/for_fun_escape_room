'use client'
import React from 'react'
import Image from "next/image";
import {useRouter} from "next/navigation";

function Seeing(){
    const router= useRouter();
    const handleClick = () => {
        router.push("/first-lock");
    };

  return (
    <>
      <div className="hidden sm:flex items-center justify-center flex-col bg-gray-200 min-h-screen">
        

        <Image src="/images/blur.jpg" alt="blur" width={500} height={500} />
        <p className="text-xs text-gray-700 w-2xl mt-5">
          You wake up, your head ringing, your vision blurred. You see a doorway, at least you think its a doorway.
          Its too difficult to see. Your eyes won&apos;t adjust and your head keeps pounding. Where are you? You don&apos;t remember getting here.
          Damn. If only you could focus to <i>narrow</i> the pain. Maybe then you could see better. Your eyes are blurred <i>windows</i>. Maybe if you squint...
        </p>
      </div>

      <div className="flex items-center justify-center flex-col md:hidden">
        
        <div className="mb-2">
          <Image src="/images/crazy-lock.jpg" alt="lock" width={200} height={200} />
        </div>
        <p className="text-xs text-gray-700 mb-2">
          Through narrowed slits your vision focuses. You see the door with a keypad lock
        </p>
        <button
        onClick={handleClick}
        className="group w-24 h-12 bg-black text-white rounded-full flex items-center justify-center"
      >
        {/* Normal text */}
        <p className="group-hover:hidden">View the lock</p>

        {/* Hover text */}
        <p className="hidden group-hover:block text-white">
          💀
        </p>
      </button>
      </div>
    </>
  )
}

export default Seeing