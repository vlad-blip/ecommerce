import Supplier from "./Supplier";

const suppliersData = [
  {
    flag: "/icons/flags/AE.svg",
    name: "Arabic Emirates",
    url: "shopname.ae",
  },
  {
    flag: "/icons/flags/AU.svg",
    name: "Australia",
    url: "shopname.au",
  },
  {
    flag: "/icons/flags/CN.svg",
    name: "China",
    url: "shopname.cn",
  },
  {
    flag: "/icons/flags/DE.svg",
    name: "Germany",
    url: "shopname.de",
  },
  {
    flag: "/icons/flags/DK.svg",
    name: "Denmark",
    url: "shopname.dk",
  },
  {
    flag: "/icons/flags/FR.svg",
    name: "France",
    url: "shopname.fr",
  },
  {
    flag: "/icons/flags/GB.svg",
    name: "Great Britain",
    url: "shopname.gb",
  },
  {
    flag: "/icons/flags/IT.svg",
    name: "Italy",
    url: "shopname.it",
  },
  {
    flag: "/icons/flags/UA.svg",
    name: "Ukraine",
    url: "shopname.ua",
  },
  {
    flag: "/icons/flags/US.svg",
    name: "United States",
    url: "shopname.us",
  },
];

export default function Suppliers() {
  return (
    <ul className="grid md:grid-flow-col grid-cols-2 md:gap-3 md:grid-cols-none md:grid-rows-2 md:justify-items-start md:w-auto w-fit mx-auto sm:gap-x-40 gap-x-10 align-between">
      {suppliersData.map((supplier, i) => (
        <li key={i}>
          <Supplier {...supplier} />
        </li>
      ))}
    </ul>
  );
}
