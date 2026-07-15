import "./FilterBar.css";

function FilterBar({
  search,
  setSearch,
  filter,
  setFilter,
  sort,
  setSort,
}) {
  return (
    <section className="filter-bar">

      <input
        type="text"
        placeholder="🔍 Search transaction..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option>All</option>
        <option>Income</option>
        <option>Expense</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>

    </section>
  );
}

export default FilterBar;