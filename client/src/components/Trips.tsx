import { useState, useEffect, useContext } from "react";
import "./trips.css";
import { PageContext } from "../assets/contexts/pageContext";

interface Trip {
  id: string | number;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  image: string;
}

export default function Trips(): JSX.Element {
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const data = await fetch("http://localhost:3000/api/trips");
      const jsonData = await data.json();
      setTrips(jsonData);
    };
    fetchTrips();
  }, [trips]);

  const fetchDeleteTrip = async (id: string | number) => {
    await fetch("http://localhost:3000/api/trips/" + id, {
      method: "DELETE",
      headers: {
        authorization: "test-token",
      },
    });
  };
  const context = useContext(PageContext);
  if (!context) return null;
  const { setPage } = context;

  return (
    <div className="body">
      <button onClick={() => setPage({ mode: "home" })}>Home</button>
      <button>Crete trip</button>
      <div className="cardContain" >
        {trips.map((user) => (
          <div className="tripCard"  onClick={() => setPage({mode: "TripDetail" + user.id})}>
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
            <img src={user.image} alt={user.name + " Image"} />
          </div>
        ))}
      </div>
    </div>
  );
}
