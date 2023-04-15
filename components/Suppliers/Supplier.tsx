import Image from "next/image";

type Props = {
  flag: string;
  name: string;
  url: string;
};

export default function Supplier({ flag, name, url }: Props) {
  return (
    <div className="flex flex-col text-center sm:text-left sm:flex-row gap-3 items-center w-full">
      <Image src={flag} width={30} height={20} alt={`${name} flag icon`} />
      <div className="">
        <h6>{name}</h6>
        <span className="text-gray-500">{url}</span>
      </div>
    </div>
  );
}
