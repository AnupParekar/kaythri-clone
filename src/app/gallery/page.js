import Image from "next/image";

const images = [
  "project1.jpeg",
  "project2.jpeg",
  "project3.jpeg",
  
];

const videos = [
  'jPkBJY1KI_Q',
  'f7X9baEehv4',
  '4jnzf1yj48M',
];

export default function GalleryPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="text-center bg-black text-yellow-400 py-12 relative">
        <div
  className="bg-black bg-cover bg-center text-yellow-400 py-40 text-center"
  style={{ backgroundImage: "url('/bg-texture.jpg')" }}
>
  <h1 className="text-5xl font-bold uppercase tracking-wide drop-shadow-lg">
    Gallery
  </h1>
</div>

      </section>

      {/* Images */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold text-yellow-500 mb-8">IMAGES</h2>
        <div className="flex flex-wrap justify-center gap-6 px-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="w-[250px] h-[180px] overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={`/gallery/${img}`}
                alt={`Gallery Image ${index + 1}`}
                width={250}
                height={180}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Videos */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold text-yellow-500 mb-8">VIDEOS</h2>
        <div className="flex flex-wrap justify-center gap-6 px-6">
          {videos.map((id, index) => (
            <div
              key={index}
              className="w-[250px] h-[180px] overflow-hidden rounded-lg shadow-md"
            >
              <div className="relative w-full h-full pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
