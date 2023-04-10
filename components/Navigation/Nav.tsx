import Image from "next/image";

import NavList from "./NavList";
import NavButton from "./NavButton";

const Nav = () => {
  return (
    <nav className="bg-white md:border-y-2 md:mb-10">
      <div className="flex gap-4 justify-between overflow-auto md:w-4/5 md:mx-auto">
        <NavList />
        <ul className="md:flex gap-2 hidden items-center">
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
      </div>
    </nav>
  );
};

export default Nav;
