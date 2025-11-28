"use client";
// import InstallersTest from "./installers-test/page";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-2xl font-bold">Let's test the installers</h1>
        <button onClick={() => {
          router.push("/installers-test");
        }} className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">Installers Test</button>
      </div>
    </>
  );
}
