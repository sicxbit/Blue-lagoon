import Image from "next/image";

export default function PackageGallery() {
  return (
    <section className="py-20 container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 grid md:grid-cols-2 gap-6">
      <div className="flex flex-col w-[600px] h-[500px]">
        <Image
        src="/assets/imgs/vendor/G7.png"
        alt="Gallery 1"
        width={600}
        height={500}
        className="rounded-2xl object-cover"
      />
      </div>
      <div className="flex flex-col gap-6 w-[600px] h-[500px]">
        <Image
          src="/assets/imgs/vendor/G6.png"
          alt="Gallery 2"
          width={600}
          height={300}
          className="rounded-2xl object-cover"
        />
        <Image
          src="/assets/imgs/vendor/G5.png"
          alt="Gallery 3"
          width={600}
          height={200}
          className="rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}
