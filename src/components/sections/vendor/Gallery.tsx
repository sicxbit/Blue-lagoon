"use client";

import Image from "next/image";

export default function Gallery() {
  const galleryImages = [
    { src: "/assets/imgs/vendor/G1.png", span: "col-span-2" }, // large left
    { src: "/assets/imgs/vendor/G2.png", span: "col-span-1" }, // small right
    { src: "/assets/imgs/vendor/G3.png", span: "col-span-1" }, // small left
    { src: "/assets/imgs/vendor/G4.png", span: "col-span-2" }, // large right
  ];

  return (
    <section className="mt-20">
      {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-left text-white">
        Gallery
      </h2> */}

      {/* Responsive alternating grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Row 1 */}
        <div className="col-span-2">
          <Image
            src={galleryImages[0].src}
            alt="Gallery 1"
            width={800}
            height={500}
            className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div>
          <Image
            src={galleryImages[1].src}
            alt="Gallery 2"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Row 2 */}
        <div>
          <Image
            src={galleryImages[2].src}
            alt="Gallery 3"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="col-span-2">
          <Image
            src={galleryImages[3].src}
            alt="Gallery 4"
            width={800}
            height={500}
            className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
