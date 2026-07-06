export default function SearchBar({ search, setSearch }) {
    return (
        <div style={{ margin: "25px 0" }}>
            <input
                type="text"
                placeholder="Search hotel..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    width: "350px",
                    padding: "12px",
                    fontSize: "16px",
                    borderRadius: "8px",
                }}
            />
        </div>
    );
}