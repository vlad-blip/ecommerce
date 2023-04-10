import RecommendedItem from "./RecommendedItem";

const DUMMY_DATA = [
  {
    img: "https://content1.rozetka.com.ua/goods/images/big/24532569.jpg",
    title: "Lugin 23М90 38 Темно-синя з вишивкою",
    price: "10.3",
  },
  {
    img: "https://content1.rozetka.com.ua/goods/images/big/24532569.jpg",
    title: "Lugin 23М90 38 Темно-синя з вишивкою",
    price: "10.3",
  },
  {
    img: "https://content1.rozetka.com.ua/goods/images/big/24532569.jpg",
    title: "Lugin 23М90 38 Темно-синя з вишивкою",
    price: "10.3",
  },
  {
    img: "https://content1.rozetka.com.ua/goods/images/big/24532569.jpg",
    title: "Lugin 23М90 38 Темно-синя з вишивкою",
    price: "10.3",
  },
  {
    img: "https://content1.rozetka.com.ua/goods/images/big/24532569.jpg",
    title: "Lugin 23М90 38 Темно-синя з вишивкою",
    price: "10.3",
  },
  {
    img: "https://content1.rozetka.com.ua/goods/images/big/24532569.jpg",
    title: "Lugin 23М90 38 Темно-синя з вишивкою",
    price: "10.3",
  },
  {
    img: "https://content1.rozetka.com.ua/goods/images/big/24532569.jpg",
    title: "Lugin 23М90 38 Темно-синя з вишивкою",
    price: "10.3",
  },
  {
    img: "https://content1.rozetka.com.ua/goods/images/big/24532569.jpg",
    title: "Lugin 23М90 38 Темно-синя з вишивкою",
    price: "10.3",
  },
  {
    img: "https://content1.rozetka.com.ua/goods/images/big/24532569.jpg",
    title: "Lugin 23М90 38 Темно-синя з вишивкою",
    price: "10.3",
  },
  {
    img: "https://content1.rozetka.com.ua/goods/images/big/24532569.jpg",
    title: "Lugin 23М90 38 Темно-синя з вишивкою",
    price: "10.3",
  },
];

export default function RecommendedItems() {
  return (
    <ul className="grid grid-cols-flexible gap-5">
      {DUMMY_DATA.map((item, i) => (
        <li key={i}>
          <RecommendedItem {...item} />
        </li>
      ))}
    </ul>
  );
}
