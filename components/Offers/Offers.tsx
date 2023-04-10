import Offer from "./Offer";

const categories = [
  {
    title: "Smart watches",
    img: "https://content1.rozetka.com.ua/goods/images/big/285047321.jpg",
    discount: "-25%",
  },
  {
    title: "Laptops",
    img: "https://content1.rozetka.com.ua/goods/images/big/144249716.jpg",
    discount: "-15%",
  },
  {
    title: "GoPro cameras",
    img: "https://content.rozetka.com.ua/goods/images/big/286181259.jpg",
    discount: "-40%",
  },
  {
    title: "Headphones",
    img: "https://content.rozetka.com.ua/goods/images/big/229708418.jpg",
    discount: "-25%",
  },
  {
    title: "Smartphones",
    img: "https://content1.rozetka.com.ua/goods/images/big/284920875.jpg",
    discount: "-25%",
  },
];

export default function Offers() {
  return (
    <ul className="flex justify-between">
      {categories.map((offer, i) => (
        <li key={i} className="w-full">
          <Offer {...offer} />
        </li>
      ))}
    </ul>
  );
}
