import Category from "./Category";

type Props = {
  className?: string;
};

const categories = [
  "Automobiles",
  "Clothes and wear",
  "Home Interiors",
  "Computer and tech",
  "Tools, equipments",
  "Sports and outdoor",
  "Animal and pets",
  "Machinery tools",
  "More category",
];

export default function Categories({ className = "" }: Props) {
  return (
    <ul className={`flex-col basis-1/4 ${className}`}>
      {categories.map((category, i) => (
        <Category key={i}>{category}</Category>
      ))}
    </ul>
  );
}
