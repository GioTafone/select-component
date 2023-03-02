import { SelectProps } from "../types";
import styles from "../styles/select.module.css";

const Select = ({ value, onChange, options }: SelectProps) => {
  return (
    <div tabIndex={0} className={styles.container}>
      <span className={styles.value}>Value</span>
      <button className={styles["clear-btn"]}>&times;</button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={styles.options}>
        {options.map(option => (
          <li key={option.value} className={styles.option}>{option.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
