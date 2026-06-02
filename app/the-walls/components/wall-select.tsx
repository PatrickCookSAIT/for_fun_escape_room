import React from 'react'

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
    <div>
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
       <button
        onClick={handleClickRight}
        className="group w-24 h-12 bg-black text-white rounded-full flex items-center justify-center"
      >
        {/* Normal text */}
        <p className="group-hover:hidden">GO RIGHT</p>

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
        <p className="group-hover:hidden">VIEW THE BOX</p>

        {/* Hover text */}
        <p className="hidden group-hover:block text-white">
          💀
        </p>
      </button>
    </div>
  )
}

export default WallSelect
