import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage";
import ContactUs from "../pages/ContactUs";

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
    )
}

export default AppRoute;