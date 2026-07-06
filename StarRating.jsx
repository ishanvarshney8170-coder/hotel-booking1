import { IoStarSharp } from "react-icons/io5";

function StarRating({ rating }) {
    return (
        <div style={{ display: "flex", gap: "2px" }}>
            {Array.from({ length: Math.round(rating) }).map((_, i) => (
                <IoStarSharp key={i} color="gold" />
            ))}
        </div>
    );
}