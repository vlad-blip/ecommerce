import NavButton from "./NavButton";
import Menu from "./Menu";

const NavList = () => {
  return (
    <ul className="flex gap-2 py-4 px-4">
      <li className="hidden md:block">
        <Menu />
      </li>
      <li>
        <NavButton>All category</NavButton>
      </li>
      <li>
        <NavButton>Hot offers</NavButton>
      </li>
      <li>
        <NavButton>Gift boxes</NavButton>
      </li>
      <li>
        <NavButton>Projects</NavButton>
      </li>
      <li>
        <NavButton>Menu item</NavButton>
      </li>
      <li>
        <NavButton>Help</NavButton>
      </li>
    </ul>
  );
};

export default NavList;
