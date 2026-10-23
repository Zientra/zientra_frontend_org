import "./App.css";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Terms from "./components/terms";
import Privacy from "./components/privacy";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact"
import WhyZientra from "./components/whyzientra";
import Waitlist from "./components/waitlist";
import PricingPage from "./components/pricing";
import Download from "./components/download";


function App() {

    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/contact"
                    element={<Contact></Contact>}
                />

                <Route
                    path="/why-zientra"
                    element={<WhyZientra></WhyZientra>}
                />


                <Route 
                    path="/pricing" 
                    element={<PricingPage />} 
                />

                <Route 
                    path="/waitlist"
                    element={<Waitlist />}
                />

                <Route 
                    path="/terms" 
                    element={<Terms />} 
                />

                <Route 
                    path="/privacy" 
                    element={<Privacy />} 
                />

                <Route 
                    path="/download"
                    element={<Download />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;