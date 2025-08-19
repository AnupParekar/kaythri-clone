"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Top Section with Zig-Zag Design */}
      <div className="bg-black text-center text-yellow-400 py-16 relative">
        <h1 className="text-4xl font-bold">ABOUT US</h1>
        <div
          className="absolute bottom-0 left-0 w-full"
          style={{ lineHeight: 0 }}
        >
          <svg
            viewBox="0 0 1440 100"
            className="w-full h-24"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,0 L480,50 L960,0 L1440,60 L1440,100 L0,100 Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="text-center px-6 md:px-24 py-12">
        <h2 className="text-3xl font-bold text-yellow-500 mb-4">WHO WE ARE</h2>
        <p className="max-w-4xl mx-auto text-gray-800 leading-relaxed">
          <strong>Kaythri Group</strong> is a trusted real estate company in Solapur, founded
          12 years ago by Vikram Sen. Starting with just three acres,
          the company has grown into a reputed brand known for developing
          premium villas and open plots. With a strong focus on trust, quality,
          and timely delivery, Kaythri Group has successfully completed numerous
          ventures across the city. Backed by a skilled professional team, the
          company ensures every project meets high standards of planning and
          execution.
        </p>
      </div>

      {/* Projects Section */}
      <div className="bg-gray-50 px-6 md:px-24 py-12">
        <h2 className="text-3xl font-bold text-center text-sky-700 mb-8">
          Completed Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white rounded shadow p-4">
            <Image
              src="/project1.jpeg"
              alt="Project 1"
              width={400}
              height={250}
              className="rounded"
            />
            <h3 className="mt-4 text-lg font-semibold">Kaythri Villas</h3>
            <p className="text-sm text-gray-600">
              Premium gated community with modern amenities and lush landscapes.
            </p>
          </div>

          <div className="bg-white rounded shadow p-4">
            <Image
              src="/project2.jpeg"
              alt="Project 2"
              width={400}
              height={250}
              className="rounded"
            />
            <h3 className="mt-4 text-lg font-semibold">Open Plot Ventures</h3>
            <p className="text-sm text-gray-600">
              Fully developed plots with clear title and legal approvals.
            </p>
          </div>

          <div className="bg-white rounded shadow p-4">
            <Image
              src="/project3.jpeg"
              alt="Project 3"
              width={400}
              height={250}
              className="rounded"
            />
            <h3 className="mt-4 text-lg font-semibold">Green County</h3>
            <p className="text-sm text-gray-600">
              Environment-friendly residential layouts with smart infrastructure.
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
}
