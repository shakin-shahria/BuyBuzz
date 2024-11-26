const AppURL = {
    BaseURL: "http://127.0.0.1:8000/api/",
    ImageURL: "http://127.0.0.1:8000/uploads/",

    // All Category Details
    AllCategoryDetails: "http://127.0.0.1:8000/api/getCategories",
    getAllFeaturedCategory: "http://127.0.0.1:8000/api/getAllFeaturedCategory",

    categoryImagePath: "http://127.0.0.1:8000/uploads/category/original/",

    submitOrderDetails: "http://127.0.0.1:8000/api/submitOrderDetails",

    ProductListByCategory: (categoryid) => 
        `http://127.0.0.1:8000/api/getProductsByCategoryId/${categoryid}`,

    productImagePath: "http://127.0.0.1:8000/uploads/products/",

    getProductsById: (pid) => 
        `http://127.0.0.1:8000/api/getProductsById/${pid}`,
};

export default AppURL;