import Action from "./Action";

import Person from "../assets/Person.svg";
import Message from "../assets/Message.svg";
import Cart from "../assets/Cart.svg";
import Heart from "../assets/Heart.svg";

import styles from "./ActionsList.module.scss";

const ActionsList = () => {
  return (
    <ul className={styles.actions_container}>
      <li>
        <Action icon={Person}>Profile</Action>
      </li>
      <li>
        <Action icon={Message}>Message</Action>
      </li>
      <li>
        <Action icon={Heart}>Orders</Action>
      </li>
      <li>
        <Action icon={Cart}>My cart</Action>
      </li>
    </ul>
  );
};

export default ActionsList;
