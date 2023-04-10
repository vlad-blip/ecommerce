import Image from "next/image";

import BlockItems from "../BlockItems";
import Items from "../Items";

const categories = [
  {
    title: "Smartphones",
    price: "500",
    img: "https://content.rozetka.com.ua/goods/images/big/315965135.jpg",
  },
  {
    title: "TVs",
    price: "300",
    img: "https://content.rozetka.com.ua/goods/images/big/311143482.jpg",
  },
  {
    title: "Tablets",
    price: "700",
    img: "https://content2.rozetka.com.ua/goods/images/big/224009737.jpg",
  },
  {
    title: "Powerbanks",
    price: "200",
    img: "https://content.rozetka.com.ua/goods/images/big/299950918.png",
  },
  {
    title: "Smart watches",
    price: "500",
    img: "https://content2.rozetka.com.ua/goods/images/big/325620127.jpg",
  },
  {
    title: "Cameras",
    price: "400",
    img: "https://content.rozetka.com.ua/goods/images/big/273943732.jpg",
  },
  {
    title: "Laptops",
    price: "700",
    img: "https://content.rozetka.com.ua/goods/images/big/320913050.jpg",
  },
  {
    title: "Personal Computers",
    price: "800",
    img: "https://content1.rozetka.com.ua/goods/images/big/176926543.jpg",
  },
];

function Aside() {
  return (
    <div className="h-full md:w-72 py-4 md:py-0 relative flex md:flex-col md:items-baseline md:items-initial items-center justify-between px-4">
      <Image
        className="-z-1 hidden md:block object-cover object-right"
        src={"/images/GadgetsBackground.png"}
        fill
        alt="Consumer electronics"
      />
      <div className="relative z-10 py-4 flex md:flex-col md:items-baseline items-center justify-between w-full">
        <h4 className="text-xl font-bold">Consumer electronics</h4>
        <button className="md:bg-white md:text-black text-blue-500 rounded-md px-4 py-2 md:mt-6">
          Source now <span className="md:hidden text-xl font-bold">&rarr;</span>
        </button>
      </div>
    </div>
  );
}

export default function GadgetsContainer() {
  return (
    <BlockItems aside={<Aside />} content={<Items items={categories} />} />
  );
}
