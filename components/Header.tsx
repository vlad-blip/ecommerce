import Image from "next/image";

import Search from "./Search";
import Menu from "./Navigation/Menu";
import ActionsList from "./ActionsList";

export default function Header() {
  return (
    <header className="grid items-center md:justify-between grid-cols-8 grid-rows-2 md:grid-cols-none md:grid-flow-col md:grid-rows-1 md:px-16 md:py-4">
      <Menu className="justify-self-center md:hidden" />
      <Image
        className="col-span-2 md:col-span-2"
        src="/icons/logo-colored.svg"
        width={116}
        height={36}
        alt="Brand logo"
      />
      <Search className="mx-4 md:mx-0 row-start-2 md:row-start-auto col-span-full md:col-span-5 md:col-start-auto" />
      <ActionsList className="justify-self-center col-start-7 md:col-start-auto col-span-2" />
    </header>
  );
}
