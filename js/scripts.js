// Contoh data produk
const products = [
    { name: "Produk 1", description: "Deskripsi Produk 1", image: "product1.jpg" },
    { name: "Produk 2", description: "Deskripsi Produk 2", image: "product2.jpg" },
    { name: "Produk 3", description: "Deskripsi Produk 3", image: "product3.jpg" },
];

// Menampilkan produk di halaman utama
const productList = document.querySelector('.product-list');

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <img src="assets/images/${product.image}" alt="${product.name}" width="100%">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
    `;
    productList.appendChild(productDiv);
});
