import { Dropdown } from '@components/dropdown/Dropdown';
import styles from './Header.module.css';
import { sortOptions } from '@utils/constants';
import { SortOptionsValueType } from '@utils/types';
import { useProductQuery } from '@utils/hooks';
import { getCategoriesAsDropdownOptions } from '@api/productsApi';

interface HeaderProps {
  setFilterBy: (value: string) => void
  setSortBy: (value: SortOptionsValueType) => void
}

export function Header({ setFilterBy, setSortBy }: HeaderProps) {
  const { data, isLoading, error } = useProductQuery(() => getCategoriesAsDropdownOptions(), 'categories');
  return (
    <header>
      <h1>
        Dummy Store
      </h1>
      <div className={styles.SortAndFilter}>
        <Dropdown
          label="Filter by category"
          defaultString={error ? "Error fetching categories" : isLoading ? "Loading categories" : "All categories"}
          options={isLoading || error ? [] : data}
          onChange={setFilterBy}
        />
        <Dropdown
          label="Sort by"
          defaultString="default order"
          options={sortOptions}
          onChange={setSortBy}
        />
      </div>
    </header>
  )
}