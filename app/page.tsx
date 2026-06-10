import Image from "next/image";
import BeginButton from "./components/BeginButton";

export default function Home() {
  return (
      <main className="flex justify-center flex-col items-center bg-gray-200">
        <div className="mb-5">
          <Image src="https://media.istockphoto.com/id/2181988818/photo/woman-walking-with-her-suitcase-on-the-street-in-new-york-at-night.jpg?s=1024x1024&w=is&k=20&c=Eq7ETg7wV5cqFeYzPRupRuf0CxzmiQuJiz4F9uxlFBo=" alt="steaming street" width={500} height={500}/>
        </div>
        <div className= "w-2xl mb-3">
          <p className="text-sm"> Its late at night as you make your way home. You are out later than normal, seeing the city around you transformed under the darkness of the night. 
          Its quiet and oddly lonely out on the empty streets. You can hear traffic in the background an the constant hiss of steam as it rises up from manholes and gutters. Your footsteps echo off block as you walk. 
          They are joined by...whats that? Another set of footsteps? You turn your head to look behind he. All you see is a shadow sweep up from behind. Then pain overrides your senses and the world turns black
          </p>
        </div>
        <BeginButton/>
      </main>

  );
}
