
$(document).ready(function() {
function fetchRecommendedProducts() {
return [
    {
        image: "static/picture/product01_Americano.png",
        name: "Americano",
        price: "$4.6",
        link: "shop_details.html"
    },
    {
        image: "static/picture/product02_latte.png",
        name: "Latte",
        price: "$5.2",
        link: "shop_details.html"
    },
    {
        image: "static/picture/product04_Mocha.png",
        name: "Mocha",
        price: "$5.8",
        link: "shop_details.html"
    },
    {
        image: "static/picture/product06_ColdBrew.png",
        name: "Cold Brew",
        price: "$5.3",
        link: "shop_details.html"
    }
];
}

function displayRecommendedProducts(products) {
var productList = $("#recommendedProductList");
productList.empty(); 

products.forEach(function(product) {
    var productItem = `
        <div class="recommended_product_item">
            <a href="${product.link}">
                <img src="${product.image}" alt="${product.name}">
                <h5 class="product_name">${product.name}</h5>
                <span class="product_price">${product.price}</span>
            </a>
        </div>
    `;
    productList.append(productItem);
});
}


var recommendedProducts = fetchRecommendedProducts();
displayRecommendedProducts(recommendedProducts);
});
