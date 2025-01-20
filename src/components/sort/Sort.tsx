export function Sort() {
  return (
    <>
      <div>
        <label htmlFor="sort-select">Sort By</label>
        <select name="sort" id="sort-select">
          <option value="">Default</option>
          <option value="dog">Rating ↓</option>
          <option value="dog">Rating ↑</option>
          <option value="dog">Price ↓</option>
          <option value="dog">Price ↑</option>
        </select>
      </div>
    </>
  )
}