'use client'
import { useRouter } from 'next/dist/client/components/navigation'
import React, {useState} from 'react'

const LeftWallLights = () => {
    const [lightColour, setLightColour] = useState("red")
    const [firstOrder, setFirstOrder] = useState(1)
    
    return(
        
        <div
  className={`flex flex-col min-h-screen items-center justify-center ${
    lightColour === "red" ? "bg-red-800" : lightColour ==="blue" ? "bg-blue-800" : 
    lightColour ==="green" ? "bg-green-800" : lightColour === "yellow" ? "bg-yellow-500" :
    lightColour ==="purple" ? "bg-purple-800": lightColour ==="orange" ? "bg-orange-600" :"bg-black"
  }`}
>

            <section>
                <p>
                    <span>Press</span> <span>ed</span> <span>to</span> <span>make</span> <span>a</span>{" "}
                    <span>choice,</span> <span>the</span> <span>boy</span> <span>went</span>{" "}
                    <span>ahead.</span>{" "}
                    <span>It</span> <span>seemed</span> <span>each</span> <span>move</span>{" "}
                    <span>he</span> <span>made,</span> <span>set</span> <span>him</span>{" "}
                    <span>back</span> <span>to</span> <span>the</span> <span>start.</span>{" "}
                    <span>He</span> <span>buttoned</span> <span>his</span>{" "}
                    <span>orange</span> <span>shirt</span> <span>and</span>{" "}
                    <span>tied</span> <span>his</span> <span>blue</span> <span>shoes</span>{" "}
                    <span>before</span> <span>he</span> <span>gave</span> <span>it</span>{" "}
                    <span>another</span> <span>try.</span> <span>He</span> <span>went</span>{" "}
                    <span>to</span> <span>and</span> <span>fro,</span> <span>jumping</span>{" "}
                    <span>this</span> <span>way</span> <span>and</span> <span>that.</span>{" "}
                    <span>The</span> <span>instructions</span> <span>he</span>{" "}
                    <span>red</span> <span>gave</span> <span>no</span> <span>idea</span>{" "}
                    <span>where</span> <span>to</span> <span>go</span> <span>next.</span>{" "}
                    <span>He</span> <span>grabbed</span> <span>the</span>{" "}
                    <span>orange</span> <span>and</span> <span>tried</span>{" "}
                    <span>again.</span> <span>He</span> <span>ate</span> <span>it</span>{" "}
                    <span>until</span> <span>he</span> <span>was</span> <span>full.</span>{" "}
                    <span>This</span> <span>is</span> <span>his</span> <span>story.</span>
                </p>
            </section>
            <section className="grid p-5 grid-cols-3 gap-2 bg-gray-800 w-2xl justify-center items-center fixed bottom-0  ">
                
                {/*red button*/}
                <button className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-800 hover:bg-red-400"
                onClick={() => 
                    setLightColour("red")
                    }>
                </button>

                {/*blue button*/}
                <button className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-800 hover:bg-blue-400"
                onClick={() => 
                    setLightColour("blue")
                    }>
                </button>

                {/*green button*/}
                <button className="flex items-center justify-center w-10 h-10 rounded-xl bg-green-800 hover:bg-green-400"
                onClick={() => 
                    setLightColour("green")
                    }>
                </button>

                {/*yellow button*/}
                <button className="flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-500 hover:bg-yellow-200"
                onClick={() => 
                    setLightColour("yellow")
                    }>
                </button>

                {/*purple button*/}
                <button className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-800 hover:bg-purple-400"
                onClick={() => 
                    setLightColour("purple")
                    }>
                </button>

                {/*orange button*/}
                <button className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600 hover:bg-orange-300"
                onClick={() => 
                    setLightColour("orange")
                    }>
                </button>
            </section>
        </div>
    )
}

export default LeftWallLights