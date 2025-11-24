

const Filters = ({ search, setSearch, category, setCategory, sort, setSort }) => {
  return (
    <div className="flex flex-col gap-3 mb-6">

      <input
        type="text"
        placeholder="Search product..."
        className="border p-2 rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="border p-2 rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Fashion">Fashion</option>
        <option value="Electronics">Electronics</option>
      </select>

      <select
        className="border p-2 rounded"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort</option>
        <option value="low-high">Price Low → High</option>
        <option value="high-low">Price High → Low</option>
        <option value="rating">Rating</option>
      </select>

    </div>
  );
};

export default Filters;