import NavButton from "./NavButton";
import styles from "./NavList.module.scss";
import Menu from "./Menu";

const NavList = () => {
  return (
    <ul className={styles.nav_list}>
      <li>
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
