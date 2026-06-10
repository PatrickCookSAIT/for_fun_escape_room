'use client'
import React from 'react'
import {useRouter} from "next/navigation";

function BeginButton(){
    const router= useRouter();
    const handleClick = () => {
        router.push("/open-your-eyes");
    };

  return (
    <div className="flex w-full h-full items-center justify-center">
      <button
        onClick={handleClick}
        className="group w-24 h-12 bg-black text-white rounded-full flex items-center justify-center mb-4"
      >
        {/* Normal text */}
        <p className="group-hover:hidden">BEGIN</p>

        {/* Hover text */}
        <p className="hidden group-hover:block text-white">
          💀
        </p>
      </button>
    </div>
  );
}

export default BeginButton
