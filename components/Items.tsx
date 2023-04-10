import Item from "./Item";

type Item = {
  title: string;
  price: string;
  img: string;
};

type Props = {
  items: Array<Item>;
};

export default function Items({ items }: Props) {
  return (
    <ul className="grid grid-rows-1 md:grid-rows-2 grid-flow-col">
      {items.map((item, i) => (
        <li key={i}>
          <Item {...item} />
        </li>
      ))}
    </ul>
  );
}
