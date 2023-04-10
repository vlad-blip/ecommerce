import Image from "next/image";

type Props = {
  price: string;
  title: string;
  img: string;
};

export default function RecommendedItem({ price, title, img }: Props) {
  return (
    <div className="bg-white p-4 rounded-md border-2">
      <Image
        className="mx-auto"
        src={img}
        alt="Product picture"
        width={150}
        height={150}
      />
      <div className="mt-4">
        <p className="text-xl mb-2">{`$${price}`}</p>
        <h6 className="text-gray-500">{title}</h6>
      </div>
    </div>
  );
}
