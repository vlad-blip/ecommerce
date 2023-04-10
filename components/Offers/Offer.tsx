import Image from "next/image";

type Props = {
  title: string;
  img: string;
  discount: string;
};

export default function Offer({ title, img, discount }: Props) {
  return (
    <div className="flex border-l-2 border-y-2 md:border-y-0 flex-col items-center justify-between text-center h-full px-8 py-4 ">
      <Image
        className="md:w-36 md:h-36 max-w-none object-contain"
        src={img}
        width={140}
        height={140}
        alt="Item picture"
      />
      <div className="pt-4">
        <h5 className="pb-4">{title}</h5>
        <span className="bg-red-100 text-red-500 font-bold py-2 px-4 rounded-2xl">
          {discount}
        </span>
      </div>
    </div>
  );
}
