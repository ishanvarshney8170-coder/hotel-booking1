export default function FilterBar({
  rating,
  setRating,
  sort,
  setSort,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "20px",
      }}
    >
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        <option value={0}>All Ratings</option>
        <option value={3}>3 ⭐ & Above</option>
        <option value={4}>4 ⭐ & Above</option>
        <option value={5}>5 ⭐</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort Price</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>
    </div>
  );
}