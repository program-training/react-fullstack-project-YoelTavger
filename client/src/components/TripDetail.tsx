import "./TripDetail.css"
import { useState, useEffect, useContext } from "react";
import { PageContext } from "../assets/contexts/pageContext";

interface Props {
  id: number | string;
}

interface Trip {
  id: string | number;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  image: string;
}

export default function TripDetail(props: Props) {
  const [trip, setTrip] = useState<Trip | null>(null);

  useEffect(() => {
    const fetchGetTripById = async (id: number | string) => {
      const respons: Response = await fetch(
        "http://localhost:3000/api/trips/" + id
      );
      const data: Trip = await respons.json();
      setTrip(data);
    };
    if (props.id) {
      fetchGetTripById(props.id);
    }
  }, [props.id]);

  const context = useContext(PageContext);
  if (!context) return null;
  const { setPage } = context;
  console.log(props.id);

  return (
    <div>
      <button onClick={() => setPage({ mode: "home" })}>Home</button>
        <div>
          <h1>{trip?.name}</h1>
          <p>{trip?.destination}</p>
          <p>{trip?.startDate}</p>
          <p>{trip?.endDate}</p>
          <img src={trip?.image} alt={trip?.name + " Image"} />
        </div>
  
    </div>
  );
}
