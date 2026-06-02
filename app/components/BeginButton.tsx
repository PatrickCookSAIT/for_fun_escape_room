'use client'
import React from 'react'
import {useRouter} from "next/navigation";

function BeginButton(){
    const router= useRouter();
    const handleClick = () => {
        router.push("/open-your-eyes");
    };

  return (
    <button onClick={handleClick}>
        BEGIN
    </button>
  );
}

export default BeginButton
