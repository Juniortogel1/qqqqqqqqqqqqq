const productForm = document.getElementById('product-form');
const productListAdmin = document.getElementById('product-list-admin');

// Mengambil produk dari localStorage atau inisialisasi kosong
let products = JSON.parse(localStorage.getItem('products')) || [];

// Menampilkan produk di panel admin
function displayProducts() {
    productListAdmin.innerHTML = '';
    products.forEach((product, index) => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - ${product.description}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Hapus';
        deleteBtn.onclick = () => {
            products.splice(index, 1);
            localStorage.setItem('products', JSON.stringify(products));
            displayProducts();
            updateHomepage();
        };
        li.appendChild(deleteBtn);
        productListAdmin.appendChild(li);
    });
}

// Menangani penambahan produk baru
productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const image = e.target.image.value;

    products.push({ name, description, image });
    localStorage.setItem('products', JSON.stringify(products));
    productForm.reset();
    displayProducts();
    updateHomepage();
});

// Memperbarui halaman utama dengan data terbaru
function updateHomepage() {
    // Anda bisa mengimplementasikan mekanisme seperti AJAX atau WebSockets untuk memperbarui halaman utama secara real-time
    // Namun, untuk kesederhanaan, halaman utama akan membaca data dari localStorage juga

    // Jika situs dihosting, Anda perlu menggunakan backend (seperti PHP, Node.js) untuk menyimpan dan mengambil data
}

displayProducts();
