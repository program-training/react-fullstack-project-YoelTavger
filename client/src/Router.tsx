import { useContext } from "react"
import Home from "./components/Home"
import Trips from "./components/Trips"
import { PageContext } from "./assets/contexts/pageContext"
import TripDetail from "./components/TripDetail"

export default function Router() {
    const context = useContext(PageContext)
    if(!context)return null;
    const {mode} = context.page
    return (
        <div>
            {mode === "home" ? (<Home/>) : null }
            {mode === "trips" ? (<Trips/>) : null }
            {mode.includes("TripDetail") ? (<TripDetail id={+(mode.slice(10))}/>) : null}
        </div>
    )
}