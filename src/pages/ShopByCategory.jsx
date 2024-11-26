import React from 'react';
import TopNavigation from "./components/common/TopNavigation";
import Navigation from "./components/homepage/Navigation";
import Footer from "./components/common/Footer";
import Products from './components/common/Products';
import { useParams } from "react-router-dom";

const ShopByCategory = () => {
    let { categoryid } = useParams();
    console.log(categoryid);
    return (
        <>
            <TopNavigation />
            <Navigation />
            <Products categoryId={categoryid} />
            <Footer />
        </>
    );
};

export default ShopByCategory;