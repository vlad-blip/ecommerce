import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full md:basis-3/4 relative md:px-4">
      <div className="relative z-10 pt-6 pl-4 md:pl-6 md:pt-12">
        <div className="mb-4">
          <span className="md:text-2xl">Latest trending</span>
          <h1 className="font-bold md:text-3xl">Electronic items</h1>
        </div>
        <button className="bg-white text-xs md:text-base p-1 px-2 text-blue-500 md:text-black md:px-4 md:py-2 rounded-md">
          Learn more
        </button>
      </div>
      <Image
        className="-z-1 absolute top-0 left-0 w-full md:h-full"
        src="/images/Banner.svg"
        style={{ objectFit: "cover" }}
        width={360}
        height={180}
        quality={100}
        alt="Deal banner"
      />
    </div>
  );
}
