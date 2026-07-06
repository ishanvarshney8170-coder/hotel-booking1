// import { createContext, useState } from "react";

// export const WishlistContext = createContext();

// export default function WishlistProvider({ children }) {
//     const [wishlist, setWishlist] = useState([]);

//     const addToWishlist = (hotel) => {
//         setWishlist((prev) => {
//             const exists = prev.find((item) => item.name === hotel.name);
//             if (exists) return prev;
//             return [...prev, hotel];
//         });
//     };

//     const removeFromWishlist = (name) => {
//         setWishlist((prev) => prev.filter((item) => item.name !== name));
//     };

//     return (
//         <WishlistContext.Provider value={{
//             wishlist,
//             addToWishlist,
//             removeFromWishlist
//         }}>
//             {children}
//         </WishlistContext.Provider>
//     );
// }
import { createContext, useState } from "react";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState([]);

    const addToWishlist = (hotel) => {
        setWishlist((prev) => [...prev, hotel]);
    };

    const removeFromWishlist = (id) => {
        setWishlist((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                addToWishlist,
                removeFromWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}