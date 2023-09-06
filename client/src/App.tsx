// import Home from "./components/Home";
// import Trips from "./components/Trips";
import "./App.css";
import PageContextProvider from "./assets/contexts/pageContext";
import Router from "./Router";

function App() {

  return (
    <>
      <div>
        <PageContextProvider>
          <Router />
        </PageContextProvider>


        {/* {flagHome ? (
          <Home flagTrips={setFlagTrips} flagHome={setFlagHome} />
        ) : null}
        {flagTrips ? <Trips /> : null} */}
      </div>
    </>
  );
}

export default App;
