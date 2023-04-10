import Image from "next/image";

type Props = {
  title: string;
  price: string;
  img: string;
};

export default function Item({ title, price, img }: Props) {
  return (
    <div className="flex gap-10 h-44 justify-between items-center outline outline-1 outline-gray-200 md:border-y-0 border-y-2 px-6">
      <div>
        <h5>{title}</h5>
        <p className="text-gray-500">From USD {price}</p>
      </div>
      <Image
        className="max-w-none max-h-24 object-contain"
        src={img}
        width={80}
        height={80}
        alt={title}
      />
    </div>
  );
}
