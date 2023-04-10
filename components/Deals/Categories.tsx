import Category from "./Category";

type Props = {
  className?: string;
};

const categories = [
  "Smart watches",
  "Gaming chairs",
  "Smartphones",
  "Tablets",
  "Laptops",
  "TVs",
  "Powerbanks",
  "Smart home",
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
