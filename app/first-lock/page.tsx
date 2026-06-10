import Image from "next/image";
import FirstLock from "./components/first-lock";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-200">
      <main >
        <FirstLock />
      </main>
    </div>
  );
}
