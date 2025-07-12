import { BrowserRouter, Route, Routes } from "react-router";
import SiteLayout from "../SiteLayout";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Experiences from "../pages/Experiences";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SiteLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experiences" element={<Experiences />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;