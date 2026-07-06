import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./pages/Booking";

import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import HotelDetails from "./pages/HotelDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        <Route
          path="/hotel/:id"
          element={<HotelDetails />}
        />
        <Route
          path="/booking"
          element={<Booking />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;