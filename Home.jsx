import { useState } from "react";
import Navbar from "../component/Navbar";
import SearchBar from "../component/SearchBar";
import { ProductsListings } from "../component/ProductsListings";
import FilterBar from "../component/FilterBar";



export default function Home() {
    const [search, setSearch] = useState("");
    const [rating, setRating] = useState(0);
    const [sort, setSort] = useState("");
    

    return (
        <>
            <Navbar />

            <div
                style={{
                    width: "90%",
                    margin: "30px auto",
                }}
            >
                <SearchBar
                    search={search}
                    setSearch={setSearch}
                />
                <FilterBar
                    rating={rating}
                    setRating={setRating}
                    sort={sort}
                    setSort={setSort}
                />

                <ProductsListings 
                search={search}
                rating={rating}
                sort={sort}
                 />
            </div>
        </>
    );
}