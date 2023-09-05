import { useState, useEffect } from "react";
import "./trips.css";
import TripDetail from "./TripDetail";

export default function Trips(): JSX.Element {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const data = await fetch("http://localhost:3000/api/trips");
      const jsonData = await data.json();
      setTrips(jsonData);
    };
    fetchTrips();
  }, [trips]);

  const fetchDeleteTrip = async (id) => {
    await fetch("http://localhost:3000/api/trips/" + id, {
      method: "DELETE",
      headers: {
        "authorization": "test-token",
      },
    });
    
  };
  const flag = false
  return (
    <div className="body">
      <button>Home</button>
      <button>Crete trip</button>
      <div className="cardContain">
        {trips.map((user) => (
          <div className="tripCard" onClick={() => {flag = true}}>
            
            <h2 id="titleCard">{user.name}</h2>
            <p>{user.destination}</p>
            <p>{user.startDate}</p>
            <p>{user.endDate}</p>
            <button
              onClick={() => {
                fetchDeleteTrip(user.id);
              }}
            >
              delete
            </button>
            <img src={user.image} alt={user.name+" Image"} />
          </div>
        ))}
      </div>
    </div>
  );
}
