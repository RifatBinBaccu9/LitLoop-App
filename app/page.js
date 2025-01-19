import Image from "next/image";
import Link from "next/link";
import { HiSparkles } from "react-icons/hi2";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image 
      className="blur-sm"
      src={"/Home/book-bg.png"}
      alt="background "
      fill
      quality={100}
      sizes="100%"
      style={{objectFit : "cover"}}
      />

<div className="z-10 bg-white p-2 rounded-lg">
  <div className="flex gap-1 text-5xl text-purple-500 p-5">
  <HiSparkles className="mt-1 w-12 h-12"/>
  <p className="">LitLoop</p>
  </div>
  <div className="text-center p-3">
    <Link href={'/'}
    className="bg-purple-700 text-white hover:bg-purple-900 hover:text-green-500 text-lg p-2 rounded-lg">TAKE ME TO THE STORE</Link>
  </div>
</div>
    </div>
  );
}
