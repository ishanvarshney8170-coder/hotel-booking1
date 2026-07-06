import { useParams } from "react-router-dom";
export default function HotelDetails() {
    const { id } = useParams();
    return (
        <div style={{ padding: "30px" }}>
            <h1>Hotel Details</h1>
            <p>Hotel ID:{id}</p>
        </div>
    );
}