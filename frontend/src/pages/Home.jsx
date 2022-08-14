import "./home.css";
import Navbar from "../components/Navbar";
import Splash from "../components/Splash";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import { useSelector} from "react-redux";

function App() {
    const { user } = useSelector((state) => state.auth);
    if (user) {
        return (
            <>
                <NavbarLoggedIn />
                <Splash />
            </>
        )
    }
    else {
        return (
            <>
                <Navbar />
                <Splash />
            </>
        )
    }
}


export default App;
