import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute top-0 left-0 w-full h-full object-cover z-0"
>
  <source src="/KCVideo.mp4" type="video/mp4" />
</video>

      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-28">
      <h1 className="text-sky-500 text-4xl md:text-6xl font-bold text-center drop-shadow-[0_1px_2px_white]">
  Welcome to Kaythri Clone
</h1>




      </div>
      <br/>
    </div>
    
  );
}

