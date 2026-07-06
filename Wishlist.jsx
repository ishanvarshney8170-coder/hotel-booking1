import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

export default function Wishlist() {
    const { wishlist, removeFromWishlist } = useContext(WishlistContext);

    return (
        <div style={{ padding: "20px" }}>
            <h1>❤️ My Wishlist</h1>

            {wishlist.length === 0 ? (
                <p>No hotels in wishlist</p>
            ) : (
                wishlist.map((hotel, i) => (
                    <div key={i} className="hotel-card">
                        <img src={hotel.thumbnail} className="hotel-img" />

                        <div className="hotel-info">
                            <h2>{hotel.name}</h2>
                            <p>{hotel.des?.slice(0, 120)}</p>

                            <button
                                className="wishlist-btn"
                                onClick={() => removeFromWishlist(hotel.name)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}