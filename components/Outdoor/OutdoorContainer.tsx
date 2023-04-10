import Image from "next/image";

import BlockItems from "../BlockItems";
import Items from "../Items";

const categories = [
  {
    title: "Tent",
    price: "40",
    img: "https://content1.rozetka.com.ua/goods/images/big/193520440.jpg",
  },
  {
    title: "Cooking",
    price: "20",
    img: "https://content2.rozetka.com.ua/goods/images/big/290011557.jpg",
  },
  {
    title: "Gaming chairs",
    price: "80",
    img: "https://content1.rozetka.com.ua/goods/images/big/20357890.jpg",
  },
  {
    title: "Shelf",
    price: "50",
    img: "https://content1.rozetka.com.ua/goods/images/big/234602631.jpg",
  },
  {
    title: "Gaming table",
    price: "70",
    img: "https://content2.rozetka.com.ua/goods/images/big/309461607.jpg",
  },
  {
    title: "Smart home",
    price: "90",
    img: "https://content.rozetka.com.ua/goods/images/big/318509789.jpg",
  },
  {
    title: "Brush cutters",
    price: "100",
    img: "https://content1.rozetka.com.ua/goods/images/big/277741290.jpg",
  },
  {
    title: "Garden chairs",
    price: "150",
    img: "https://content2.rozetka.com.ua/goods/images/big/319731833.jpg",
  },
];

function Aside() {
  return (
    <div className="h-full md:w-72 py-4 md:py-0 relative flex md:flex-col md:items-baseline items-center justify-between px-4">
      <Image
        className="-z-1 hidden md:block object-cover object-right"
        src={"/images/HomeBackground.png"}
        fill
        alt="Home and outdoor"
      />
      <div className="relative z-10 py-4 flex md:flex-col md:items-baseline items-center justify-between w-full">
        <h4 className="text-xl font-bold">Home and outdoor</h4>
        <button className="md:bg-white md:text-black text-blue-500 rounded-md px-4 py-2 md:mt-6">
          Source now <span className="md:hidden text-xl font-bold">&rarr;</span>
        </button>
      </div>
    </div>
  );
}

export default function OutdoorContainer() {
  return (
    <BlockItems aside={<Aside />} content={<Items items={categories} />} />
  );
}
