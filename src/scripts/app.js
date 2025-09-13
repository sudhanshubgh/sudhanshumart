// This file contains the JavaScript code for the website. It handles dynamic functionality, such as loading products, managing affiliate links, and any interactive elements on the site.

// Manually add product details here
const products = [
  {
    title: "Amazon Echo Dot (5th Gen) | Smart speaker with Bigger sound",
    image: "https://m.media-amazon.com/images/I/71jNr0MoZEL._SY450_.jpg",
    originalPrice: "₹5,499",
    offerPrice: "₹4,449",
    link: "https://amzn.to/3IlicmT",
    category: "electronics"
  },
  {
    title: "Acer RS272 W 27 Inch Smart Full HD IPS Backit LED Monitor",
    image: "https://m.media-amazon.com/images/I/71Ap6wOc1-L._SX679_.jpg",
    originalPrice: "₹25,999",
    offerPrice: "₹14,999",
    link: "https://amzn.to/4mgONsa",
    category: "electronics"
  },
  {
    title: "ZEBRONICS Juke BAR 3903 Soundbar, 80 Watts, Virtual 5.1 Surround",
    image: "https://m.media-amazon.com/images/I/71tbf3Nfz5L._SY450_.jpg",
    originalPrice: "₹6,999",
    offerPrice: "₹3,799",
    link: "https://amzn.to/46AltrN",
    category: "electronics"
  },
  {
    title: "Lymio Men Cargo || Men Cargo Pants Cotton || Casual Cargos Pant (Cargo-62-65)",
    image: "https://m.media-amazon.com/images/I/61mSCTdk1nL._SY445_.jpg",
    originalPrice: "₹4,999",
    offerPrice: "₹749",
    link: "https://amzn.to/3IlicmT",
    category: "apparel"
  },
  {
    title: "Lymio Men Cargo || Men Cargo Pants Cotton || Casual Cargos Pant (Cargo-62-65)",
    image: "https://m.media-amazon.com/images/I/51EedPunioL._SY445_.jpg",
    originalPrice: "₹4,999",
    offerPrice: "₹749",
    link: "https://amzn.to/3VfEr0t",
    category: "apparel"
  },
  {
    title: "GenOne Stylish Laptop Backpack for Men & Women",
    image: "https://m.media-amazon.com/images/I/81C+mpVx1hL._SY606_.jpg",
    originalPrice: "₹999",
    offerPrice: "₹399",
    link: "https://amzn.to/42omUqH",
    category: "luggage"
  },
  {
    title: "KAJARU Men's Polyster Blend Regular Fit T-Shirt with Half Sleeve Chain Polo Collar",
    image: "https://m.media-amazon.com/images/I/61q49o-2VCL._SY606_.jpg",
    originalPrice: "₹999",
    offerPrice: "₹328",
    link: "https://amzn.to/4gmxsfK",
    category: "apparel"
  },
   {
    title: "TOPLOT Men's Cotton Cargo Pants || Cargo for Men",
    image: "https://m.media-amazon.com/images/I/41Svu39Q8XL._SY445_.jpg",
    originalPrice: "₹2,999",
    offerPrice: "₹699",
    link: "https://amzn.to/47CE07S",
    category: "apparel"
  },
  {
    title: "One94Store RGB LED Strip Light – 2 Meter USB Powered Light",
    image: "https://m.media-amazon.com/images/I/711Jo0TSFEL._SX679_.jpg",
    originalPrice: "₹999",
    offerPrice: "₹299",
    link: "https://amzn.to/4n28tks",
    category: "home"
  },
  // Add more products as needed
];

// Render products to the page in a grid
function renderProducts(category = "all") {
  const productList = document.getElementById('product-list');
  let filtered = category === "all" ? products : products.filter(p => p.category === category);
  productList.innerHTML = filtered.map(product => `
    <div class="product-card">
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.title}" class="product-image"/>
      </div>
      <h3 class="product-title">${product.title}</h3>
      <div class="product-prices">
        <span class="product-original-price">${product.originalPrice}</span>
        <span class="product-offer-price">${product.offerPrice}</span>
      </div>
      <a href="${product.link}" target="_blank" class="product-btn">View on Amazon</a>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  document.getElementById('categorySelect').addEventListener('change', function() {
    renderProducts(this.value);
  });
});