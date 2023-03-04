import styles from "./Header.module.scss";
import Search from "./Search";
import Logo from "../assets/logo-colored.svg";
import ActionsList from "./ActionsList";

const Header = () => {
  return (
    <header className={`${styles.header_container} container`}>
      <img src={Logo} alt="Brand logo" />
      <Search />
      <ActionsList />
    </header>
  );
};

export default Header;
