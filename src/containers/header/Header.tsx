import { Dropdown } from '@components/dropdown/Dropdown';
import styles from './Header.module.css';
import { productCategories, sortOptions } from '@utils/constants';
import { SortOptionsValueType } from '@utils/types';

interface HeaderProps {
  setFilterBy: (value: string) => void
  setSortBy: (value: SortOptionsValueType) => void
}

export function Header({ setFilterBy, setSortBy }: HeaderProps) {
  return (
    <header>
      <h1>
        Dummy Store
      </h1>
      <div className={styles.SortAndFilter}>
        <Dropdown label="Filter by category" defaultString="none" options={productCategories} onChange={setFilterBy} />
        <Dropdown label="Sort by" defaultString="default order" options={sortOptions} onChange={setSortBy} />
      </div>
    </header>
  )
}