import { useEffect, useState } from "react";
import { SelectOption, SelectProps } from "../types";
import styles from "../styles/select.module.css";

const Select = ({ value, onChange, options }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    if(isOpen) {
      setHighlightedIndex(0)
    }
  }, [isOpen])


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
    if(option !== value) onChange(option);
  };

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
          e.stopPropagation();
          clearOptions();
        }}
      >
        &times;
      </button>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              closeSelect();
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.value}
            className={`${styles.option} ${
              option === value ? styles.selected : ""
            } ${
              index === highlightedIndex ? styles.highlighted : ""
            }`}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
