"use client";
import Image from "next/image";

export default function UpcomingProjects() {
  const projects = [
    {
      title: "KORREMULA OPEN LAYOUT",
      location: "@KORREMULA",
      acres: "15+ ACRES",
      image: "/up1.jpeg",
    },
    {
      title: "SANGAREDDY",
      location: "@SANGAREDDY",
      acres: "55+ ACRES",
      image: "/up2.jpeg",
    },
    {
      title: "COMMERCIAL PLOTS",
      location: "@JODIMETLA",
      acres: "4+ ACRES",
      image: "/up3.jpeg",
    },
    {
      title: "KUNDANPALLY OPEN LAYOUT",
      location: "@KUNDANPALLY",
      acres: "20+ ACRES",
      image: "/up4.jpeg",
    },
    {
      title: "YADGARPALLY",
      location: "@YADGARPALLY",
      acres: "30+ ACRES",
      image: "/projects/House1.jpg", // Add your 5th image
    },
    {
      title: "VIKARABAD",
      location: "@VIKARABAD",
      acres: "25+ ACRES",
      image: "/projects/House2.jpg", // Add your 6th image
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
        UPCOMING PROJECTS
      </h1>
<div className="grid grid-cols-2 gap-6 justify-items-center">
  {projects.map((p, idx) => (
    <div
      key={idx}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full max-w-xs"
    >
      <div className="relative">
        <Image
          src={p.image}
          alt={p.title}
          width={320}
          height={200}
          className="w-full h-40 object-cover"
        />
      </div>
      <div className="p-3">
        <h2 className="text-yellow-500 font-bold text-base mb-1">{p.title}</h2>
        <p className="text-gray-800 font-semibold text-sm mb-2">{p.location}</p>
        <div className="flex items-center text-gray-600">
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <span className="text-xs">{p.acres}</span>
        </div>
      </div>
    </div>
  ))}
</div>


    </main>
  );
}