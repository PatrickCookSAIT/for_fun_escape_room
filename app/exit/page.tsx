import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <main className="flex flex-col items-center justify-center">
        <h1 className="mb-10 text-4xl text-red-700">CONGRATULATIONS</h1>
        <Image src="/images/dooropen.jpg" alt="Door with an arm bar locking it" width={400} height={400}/>
        <p className="mt-5 text-sm w-lg"> You manage to remove the bar. You twist the door handle. It opens. You are free</p>
      </main>
    </div>
  );
}

