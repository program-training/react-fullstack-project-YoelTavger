import { useState, useEffect } from "react";

interface Props {
  id: number;
}

export default function TripDetail(props: Props) {
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    const fetchGetTripById = async (id) => {
      const data = await fetch("http://localhost:3000/api/trips/" + id);
      const jsonData = await data.json();
      setTrip(jsonData);
    };
    fetchGetTripById(props.id);
  }, [trip]);
  return (
    <div>
      <button>Home</button>
      <h2>{trip.name}</h2>
      <p>{trip.destination}</p>
      <p>{trip.startDate}</p>
      <p>{trip.endDate}</p>
      <img src={trip.image} alt={trip.name + " Image"} /> <p></p>
    </div>
  );
}
