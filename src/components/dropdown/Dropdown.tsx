import styles from './Dropdown.module.css';

interface DropdownProps {
  label: string;
  defaultString: string;
  options: { value: string, label: string }[];
  onChange: (value: string) => void;
}

export function Dropdown({ label, defaultString, options, onChange }: DropdownProps) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    onChange(e.target.value)
  }

  return (
    <div className={styles.Dropdown}>
      <label htmlFor="sort-select">{label}</label>
      <select name="sort" id="sort-select" onChange={handleChange}>
        <option value="">{defaultString}</option>
        {options.map((option) => {
          return <option
            value={option.value}
            key={option.value}
          >
            {option.label}
          </option>
        })}
      </select>
    </div>
  )
}