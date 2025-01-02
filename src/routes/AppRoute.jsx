import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage";
import ContactUs from "../pages/ContactUs";
import ShopByCategory from "../pages/ShopByCategory";
import ProductDetails from "../pages/ProductDetails";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop/:categoryid" element={<ShopByCategory />} />
            <Route path="/productdetails/:productid" element={<ProductDetails />} />
            <Route path="/cartPage" element={<CartPage />} />
            <Route path="/checkoutPage" element={<CheckoutPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
    )
}

export default AppRoute;