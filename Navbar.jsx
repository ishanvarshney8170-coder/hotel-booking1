import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
                background: "#222",
                color: "white",
            }}
        >
            <h2>🏨 Hotel Booking</h2>

            <div style={{ display: "flex", gap: "20px" }}>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                    Home
                </Link>

                <Link
                    to="/wishlist"
                    style={{ color: "white", textDecoration: "none" }}
                >
                    Wishlist
                </Link>
            </div>
        </nav>
    );
}