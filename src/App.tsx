import "./App.css";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact"
import WhyZientra from "./components/whyzientra";
import Platform from "./platform/platform";
import Waitlist from "./components/waitlist";

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


                // Testing editor
                <Route
                    path="/editor-test"
                    element={<Platform />}
                />

                <Route 
                    path="/waitlist"
                    element={<Waitlist />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;