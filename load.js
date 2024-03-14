const productList = document.getElementById('product-list');
const loadMoreBtn = document.getElementById('load-more-btn');

function fetchProducts() {
    const api = `https://fakestoreapi.com/products?limit=10`;
    fetch(api)
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const productHTML = `
                    <li>
                        <div class="product">
                            <div class="product-image">
                                <img src="${product.image}" alt="Product Image">
                            </div>
                            <div class="product-details">
                                <h2 class="product-title">${product.title}</h2>
                                <p class="product-description">${product.description}</p>
                                <div class="bottom">
                                    <p class="product-price">$${product.price}</p>
                                    <div class="product-rating">
                                        <span class="rating">${product.rating.rate}</span>
                                        <span class="rating-count">(${product.rating.count})</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>`;
                if(product.id<=5){
                    productList.innerHTML += productHTML;
                }else if (product.id<=10){
                    loadMoreBtn.addEventListener('click', () => {
                    productList.innerHTML += productHTML;});
                }
            });
        })
}


fetchProducts();
