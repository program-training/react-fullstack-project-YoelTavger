import Home from "./components/Home";
import "./App.css";
import Trips from "./components/Trips";
import { useState } from "react";

function App() {
  const [flagTrips, setFlagTrips] = useState(false);
  const [flagHome, setFlagHome] = useState(true);

  return (
    <>
      <div>
        {flagHome ? (
          <Home flagTrips={setFlagTrips} flagHome={setFlagHome} />
        ) : null}
        {flagTrips ? <Trips /> : null}
      </div>
    </>
  );
}

export default App;
