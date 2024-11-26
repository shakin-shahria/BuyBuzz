import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage";
import ContactUs from "../pages/ContactUs";
import ShopByCategory from "../pages/ShopByCategory";

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop/:categoryid" element={<ShopByCategory />} />
            <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
    )
}

export default AppRoute;