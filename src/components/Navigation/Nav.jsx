import styles from "./Nav.module.scss";
import IconDe from "../../assets/de.svg";
import NavList from "./NavList";
import NavButton from "./NavButton";

const Nav = () => {
  return (
    <nav className={`${styles.nav_container} container`}>
      <NavList />
      <ul className={styles.right_side}>
        <li>
          <NavButton>English, USD</NavButton>
        </li>
        <li>
          <NavButton>
            Ship to <img src={IconDe} alt="Germany flag" />
          </NavButton>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
