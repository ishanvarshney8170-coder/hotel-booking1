import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("🎉 Booking Confirmed!");

    console.log(form);
  }

  return (
    <div
      style={{
        width: "500px",
        margin: "40px auto",
      }}
    >
      <h1>Book Hotel</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />

        <label>Check In</label>

        <input
          type="date"
          name="checkIn"
          onChange={handleChange}
        />

        <label>Check Out</label>

        <input
          type="date"
          name="checkOut"
          onChange={handleChange}
        />

        <input
          type="number"
          name="guests"
          min="1"
          max="10"
          value={form.guests}
          onChange={handleChange}
        />

        <button
          style={{
            background: "#222",
            color: "white",
            padding: "12px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}