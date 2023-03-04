import styles from "./Action.module.scss";

const Action = ({ icon, children }) => {
  return (
    <div className={styles.action_container}>
      <img src={icon} alt={children} className={styles.icon} />
      <span>{children}</span>
    </div>
  );
};

export default Action;
