import Image from "next/image";

type Props = {
  img: string;
  title: string;
  icon: string;
};

export default function Service({ img, title, icon }: Props) {
  return (
    <div className="rounded-md overflow-hidden bg-white border-2 h-full">
      <Image
        className="bg-black w-full max-h-[120px] h-full object-cover"
        src={img}
        width={280}
        height={120}
        alt={title}
      />
      <div className="relative p-6">
        <h5>{title}</h5>
        <div className="absolute bg-blue-200 p-3 border-2 border-white rounded-full right-5 -top-7">
          <Image src={icon} alt="Service icon" width={24} height={24} />
        </div>
      </div>
    </div>
  );
}
