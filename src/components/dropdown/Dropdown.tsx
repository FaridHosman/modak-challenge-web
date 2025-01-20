import styles from './Dropdown.module.css';

interface DropdownProps {
  label: string;
  defaultString: string;
  options: string[];
}

export function Dropdown({ label, defaultString, options }: DropdownProps) {
  return (
    <div className={styles.Dropdown}>
      <label htmlFor="sort-select">{label}</label>
      <select name="sort" id="sort-select">
        <option value="">{defaultString}</option>
        {options.map((option) => {
          return <option value={option}>{option}</option>
        })}
      </select>
    </div>
  )
}