import Image from "next/image";

import NavList from "./NavList";
import NavButton from "./NavButton";

const Nav = () => {
  return (
    <nav className="flex gap-4 overflow-auto">
      <NavList />
      <ul className="md:flex gap-2 hidden">
        <li>
          <NavButton>English, USD</NavButton>
        </li>
        <li>
          <NavButton>
            <span>Ship to</span>
            <Image
              src="/icons/de.svg"
              width={20}
              height={20}
              alt="Germany flag"
            />
          </NavButton>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
