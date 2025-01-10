const AppURL = {
    BaseURL: "http://127.0.0.1:8000/api/",
    ImageURL: "http://127.0.0.1:8000/uploads/",

    // All Category Details
    AllCategoryDetails: "http://127.0.0.1:8000/api/getCategories",
    ProductSearch: "http://127.0.0.1:8000/api/products/search",
    getAllFeaturedCategory: "http://127.0.0.1:8000/api/getAllFeaturedCategory",

    categoryImagePath: "http://127.0.0.1:8000/uploads/category/original/",

    submitOrderDetails: "http://127.0.0.1:8000/api/submitOrderDetails",

    ProductListByCategory: (categoryid) => 
        `http://127.0.0.1:8000/api/getProductsByCategoryId/${categoryid}`,

    productImagePath: "http://127.0.0.1:8000/uploads/products/",

    sslCommerzPayment: "http://127.0.0.1:8000/api/pay-via-ajax/",

    getProductsById: (pid) => 
        `http://127.0.0.1:8000/api/getProductsById/${pid}`,



    GET_ALL_ORDERS: '/orders',
    GET_ORDER_BY_ID: '/orders',  //  will append order ID to this in the frontend
};

export default AppURL;