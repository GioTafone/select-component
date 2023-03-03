import { useState } from "react";
import { SelectOption, SelectProps } from "../types";
import styles from "../styles/select.module.css";

const Select = ({ value, onChange, options }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = () => {
    setIsOpen((prevState) => !prevState);
  };
  const closeSelect = () => {
    setIsOpen(false);
  };
  const clearOptions = () => {
    onChange(undefined);
  };
  const selectOption = (option: SelectOption) => {
    onChange(option)
  }
  return (
    <div
      onBlur={closeSelect}
      onClick={handleSelect}
      tabIndex={0}
      className={styles.container}
    >
      <span className={styles.value}>{value?.label}</span>
      <button
        className={styles["clear-btn"]}
        onClick={(e) => {
          e.stopPropagation()
          clearOptions();
        }}
      >
        &times;
      </button>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option) => (
          <li onClick={e => {
            e.stopPropagation()
            selectOption(option)
            closeSelect()
          }} key={option.value} className={styles.option}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
