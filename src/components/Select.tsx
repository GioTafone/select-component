import { SelectProps } from "../types"
import styles from "../styles/select.module.css"


const Select = ({ value, onChange, options}: SelectProps) => {
  return (
    <div className={styles.container}>Select</div>
  )
}

export default Select