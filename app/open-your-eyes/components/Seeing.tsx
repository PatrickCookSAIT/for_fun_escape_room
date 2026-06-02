import React from 'react'
import Image from "next/image";

const Seeing = () => {
  return (
    <>
      <div className="hidden sm:flex items-center justify-center flex-col">
        <p className="text-sm text-gray-700">
          You wake up, your head ringing, your vision blurred. You see a doorway, at least you think its a doorway.
          Its too difficult to see. Your eyes won't adjust and your head keeps pounding. Where are you? You don't remember getting here.
          Damn. If only you could focus to <i>narrow</i> the pain. Maybe then you could see better. Your eyes are blurred <i>windows</i>. Maybe if you squint...
        </p>

        <Image src="/images/blur.jpg" alt="blur" width={500} height={500} />
      </div>

      <div className="flex items-center justify-center flex-col sm:hidden">
        <p className="text-sm text-gray-700">
          Through narrowed slits your vision focuses. You see the door with a keypad lock
        </p>

        <Image src="/images/crazy-lock.jpg" alt="lock" width={500} height={500} />
      </div>
    </>
  )
}

export default Seeing