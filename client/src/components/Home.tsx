import "./Home.css";
import { useContext } from "react";
import { PageContext } from "../assets/contexts/pageContext";



export default function Home() {
    const context = useContext(PageContext);
    if(!context) return null;
    const {setPage} = context
  return (
    <div className="home">
      <button onClick={() => setPage({mode: "trips"})}>get all the trips</button>
      <button>sign up</button>
      <button>log in</button>
    </div>
  );
}
