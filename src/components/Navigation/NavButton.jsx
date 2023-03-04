import styles from "./NavButton.module.scss";

const NavButton = ({ children }) => {
  return <button className="title">{children}</button>;
};

export default NavButton;
