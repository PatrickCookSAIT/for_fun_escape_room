import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <main className="flex flex-col items-center justify-center">
        <Image src="/images/bardoor.jpg" alt="Door with an arm bar locking it" width={400} height={400}/>
        <p className="mt-5 text-sm w-xl"> You reach a room with a barred door. You can see sunlight seeping in from beneath the crack. You are almost free.
            You just have to figure out how to remove the bar. You might need to think outside the box</p>
      </main>
    </div>
  );
}

