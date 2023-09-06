import { useState, useContext } from "react";
import { PageContext } from "../assets/contexts/pageContext";

interface Trip {
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  image: string;
}

export default function NewTripForm() {
  const [trip, setTrip] = useState<Trip>({
    name: "",
    destination: "",
    startDate: "",
    endDate: "",
    image: "",
  });

  const context: any = useContext(PageContext);
  if (!context) return null;
  const { setPage } = context;


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!trip?.name) return
    fetch("http://127.0.0.1:3000/api/trips/", {
      method: "POST",
      body: JSON.stringify(trip),
      headers: {
        authorization: "test-token",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((a) => console.log(a))
      setPage({ mode: "trips" });
  };

  return (
    <div>
        <button onClick={() => setPage({mode: "trips"})}>trips</button>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="enter a name"
            value={trip?.name}
            onChange={(e) => setTrip({ ...trip, ["name"]: e.target.value })}
          />

          <input
            type="text"
            placeholder="enter a destination"
            value={trip?.destination}
            onChange={(e) =>
              setTrip({ ...trip, ["destination"]: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="enter a startDate"
            value={trip?.startDate}
            onChange={(e) =>
              setTrip({ ...trip, ["startDate"]: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="enter a endDate"
            value={trip?.endDate}
            onChange={(e) => setTrip({ ...trip, ["endDate"]: e.target.value })}
          />

          <input
            type="url"
            placeholder="enter a imageURL"
            value={trip?.image}
            onChange={(e) => setTrip({ ...trip, ["image"]: e.target.value })}
          />
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}
