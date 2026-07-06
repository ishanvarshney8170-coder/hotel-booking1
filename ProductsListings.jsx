import { useEffect, useState } from "react"
import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { Link } from "react-router-dom";
export function ProductsListings({ search, rating, sort }) {
    search.toLowerCase()
    let [current, setCurrent] = useState(0);
    let [totalCount, setTotalCount] = useState(0)
    let PAGE_SIZE = 33;
    let url = `https://demohotelsapi.pythonanywhere.com/hotels?limit=${PAGE_SIZE}&skip=${PAGE_SIZE * current}`
    let [data, setData] = useState([]);
    async function dataFetch() {
        let res = await fetch(url)
        let hotelsData = await res.json()
        // console.log(hotelsData.count)
        setTotalCount(hotelsData.count)
        setData(hotelsData.data);
    }
    useEffect(() => {
        dataFetch()
    }, [current])
    console.log(data);
    console.log(totalCount)

    let no_of_pages = Math.ceil(totalCount / PAGE_SIZE)
    console.log(no_of_pages)

    let start = current * PAGE_SIZE;
    let end = start + PAGE_SIZE

    let filteredHotels = data.filter((hotel) => {
        return (
            hotel.name.toLowerCase().includes(search.toLowerCase()) &&
            hotel.rating >= rating
        );
    });
    if (sort === "low") {
        filteredHotels.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
        filteredHotels.sort((a, b) => b.price - a.price);
    }
    return (
        <>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                    gap: "30px",
                    padding: "30px",
                    maxWidth: "1400px",
                    margin: "0 auto",
                }}
            >
                {filteredHotels.map((el) => (
                    <Product
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        thumbnail={el.thumbnail}
                        des={el.description}
                        location={el.location}
                        rating={el.rating}
                        price={el.price}
                    />
                ))}
            </div>
            {/* <div className="hotel-container">
                {
                    filteredHotels.map((el) => (
                        <Product
                            key={el.id} id={el.id} name={el.name} thumbnail={el.thumbnail} des={el.description} location={el.location} rating={el.rating} price={el.price} />
                    ))
                }
            </div> */}
            {/* <div>
                {
                    [...Array(no_of_pages).keys()].map((el) => (
                        <button key={el} onClick={() => setCurrent(el)}>
                            {el + 1}
                        </button>

                    ))

                }
            </div> */}
            <div className="pagination">

                <button
                    className="page-btn"
                    disabled={current === 0}
                    onClick={() => setCurrent(current - 1)}
                >
                    ←
                </button>

                {[...Array(no_of_pages).keys()].map((el) => (
                    <button
                        key={el}
                        className={`page-btn ${current === el ? "active-page" : ""}`}
                        onClick={() => setCurrent(el)}
                    >
                        {el + 1}
                    </button>
                ))}

                <button
                    className="page-btn"
                    disabled={current === no_of_pages - 1}
                    onClick={() => setCurrent(current + 1)}
                >
                    →
                </button>

            </div>
        </>
    )
}

// export function Product({ key,name, thumbnail, des, location, rating, price }) {
//     return (
//         <div style={{ display: "flex", gap: "20px", border: "2px solid white", padding: "30px", borderRadius: "30px" }}>
//             <div>
//                 <img width="300px" height="250px" src={thumbnail} alt="" />
//             </div>
//             <div style={{ display: "flex", gap: "20px", flexDirection: "column", textAlign: "left" }}>
//                 <h2>{name}</h2>
//                 <p>{des.slice(0, 200)}...</p>
//                 <div style={{ display: "flex", justifyContent: "space-between" }}>
//                     <p>Location : {location}</p>
//                     <p><StarRating rating={rating} /></p>
//                 </div>
//                 <div style={{ display: "flex", justifyContent: "space-between" }}>
//                     <p>Price :{price}</p>
//                     <button style={{ backgroundColor: "white", color: "black", border: "none", padding: "10px 20px" }}>Move to WishList</button>
//                 </div>
//             </div>
//         </div>
//     )
// }
export function Product({ id, name, thumbnail, des, location, rating, price }) {
    const { addToWishlist } = useContext(WishlistContext);

    const hotel = { id, name, thumbnail, des, location, rating, price };
    // const styles = {
    //     card: {

    //         background: "#fff",
    //         border:"1px solid #ddd",
    //         borderRadius: "15px",
    //         overflow: "hidden",
    //         boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
    //         transition: "0.3s",
    //         cursor: "pointer",
    //         display: "flex",
    //         flexWrap:"wrap",
    //         flexDirection: "column",
    //         gap:"20px",
    //         margin:"15px",

    //     },

    //     image: {
    //         width: "100%",
    //         height: "260px",
    //         objectFit: "cover",

    //     },

    //     info: {
    //         padding: "20px",
    //     },

    //     title: {
    //         margin: "0",
    //         color: "#1e293b",
    //         fontSize: "24px",
    //     },

    //     desc: {
    //         color: "#64748b",
    //         margin: "15px 0",
    //         lineHeight: "1.6",
    //     },

    //     row: {
    //         display: "flex",
    //         justifyContent: "space-between",
    //         alignItems: "center",
    //         margin: "15px 0",
    //     },

    //     price: {
    //         color: "#2563eb",
    //         fontSize: "28px",
    //         fontWeight: "bold",
    //     },

    //     wishlist: {
    //         padding: "10px 18px",
    //         borderRadius: "30px",
    //         border: "2px solid crimson",
    //         background: "white",
    //         color: "crimson",
    //         cursor: "pointer",
    //         fontWeight: "600",
    //     },

    //     button: {
    //         width: "100%",
    //         padding: "14px",
    //         marginTop: "12px",
    //         border: "none",
    //         borderRadius: "12px",
    //         background: "linear-gradient(90deg,#2563eb,#4f46e5)",
    //         color: "white",
    //         fontSize: "16px",
    //         cursor: "pointer",
    //         fontWeight: "bold",
    //     },
    // };
    const styles = {
        card: {
            width: "100%",
            maxWidth: "340px",
            minHeight:"500px",
            background: "#ffffff",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            transition: "all 0.3s ease",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            margin: "20px auto",
            border: "1px solid #f1f5f9",
            justifyContent: "center",
        },

        image: {
            width: "100%",
            height: "180px",
            objectFit: "cover",
        },

        info: {
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
        },

        title: {
            margin: 0,
            fontSize: "24px",
            fontWeight: "700",
            color: "#1f2937",
        },

        //desc: {
        // margin: 0,
        // fontSize: "15px",
        // lineHeight: "1.7",
        // color: "#6b7280",
        desc: {
            margin: 0,
            fontSize: "15px",
            lineHeight: "1.5",
            color: "#6b7280",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
        },
    //},

        row: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "8px",
        },

        price: {
            fontSize: "28px",
            fontWeight: "700",
            color: "#0f766e",
        },

        wishlist: {
            padding: "10px 18px",
            border: "1px solid #ef4444",
            borderRadius: "30px",
            background: "#fff5f5",
            color: "#ef4444",
            fontWeight: "600",
            cursor: "pointer",
            transition: "0.3s ease",
        },

        button: {
            marginTop: "18px",
            padding: "14px",
            border: "none",
            borderRadius: "10px",
            background: "#2563eb",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "0.3s ease",
        },
};



return (
    <div style={styles.card} >
        <img src={thumbnail} alt={name} style={styles.image}/>

        <div style={styles.info}>
            <h2 style={styles.title}>{name}</h2>

            <p style={styles.desc}>
                {des?.slice(0, 80)}...
            </p>

            <div style={styles.row}>
                <span>📍 {location}</span>
                <span><StarRating rating={rating} /></span>
            </div>

            <div style={styles.row}>
                <h3 style={styles.price}>₹ {price}</h3>

                <button style={styles.wishlist}
                    onClick={() => addToWishlist(hotel)}>
                    ❤️ Wishlist
                </button>

            </div>
            <Link to={`/hotel/${id}`}>
                <button style={styles.button}>
                    View Details
                </button>
            </Link>



            <Link to="/booking">
                <button style={styles.button}>
                    Book Now
                </button>
            </Link>
        </div>
    </div >
);
}

import { IoStarSharp } from "react-icons/io5";
// function StarRating({ rating }) {
//     let stars = [];
//     for (let i = 1; i <= Math.ceil(rating); i++) {
//         stars.push(<IoStarSharp color="yellow" />)
//     }

//     return stars;
// }
function StarRating({ rating }) {

    return (
        <div className="stars">

            {
                Array.from({ length: Math.ceil(rating) }).map((_, i) => (
                    <IoStarSharp
                        key={i}
                        color="#FFD700"
                        size={20}
                    />
                ))
            }

        </div>
    );
}