"use client";

import Image from 'next/image';
import { Button } from 'flowbite-react';

const completedProjects = [
  {
    title: "GRAND WAY - I",
    location: "@NARAPALLY",
    details: "3 ACRES | 52 VILLAS",
    img: "/projects/House1.jpg",
    pdf: "/pdfs/grandway1.pdf"
  },
  {
    title: "GRAND WAY - II",
    location: "@KORREMULA",
    details: "14 ACRES | 250 PLOTS/VILLAS",
    img: "/projects/House2.jpg",
    pdf: "/pdfs/grandway2.pdf"
  },
  {
    title: "GRAND WAY - III",
    location: "@NARAPALLY",
    details: "2 ACRES | 29 VILLAS",
    img: "/projects/House3.jpeg",
    pdf: "/pdfs/grandway3.pdf"
  }
];

export default function CompletedProjects() {
  return (
    <div>
      <div className="relative w-full h-96 md:h-[500px] text-white">
  <Image
    src="/projects/hero-bg.jpg"
    alt="Completed Projects"
    layout="fill"
    objectFit="cover"
    className="absolute inset-0 z-0"
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-sky-500">COMPLETED PROJECTS</h1>
  </div>
</div>


      <div className="text-center mt-6 px-4 md:px-20">
        <p>
          Kaythri Group’s completed projects reflect quality, trust, and timely delivery,
          offering premium living spaces with enduring value and customer satisfaction.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 p-10 justify-items-center">
        {completedProjects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col w-80"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.img}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-lg font-bold text-yellow-500">{project.title}</h2>
              <p className="text-black font-semibold">{project.location}</p>
              <p className="text-gray-600 mt-2 flex-grow">{project.details}</p>

              <Button
                type="button"
                className="mt-4 bg-black hover:bg-sky-700 text-black px-4 py-2 rounded"
                onClick={() => window.open(project.pdf, "_self")}
              >
                Know More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
