// Sample Product Data with Enhanced Attributes
const products = [
    // Men's Fashion
    { id: 1, name: "Classic White Shirt", price: 899, category: "men", image: "https://imagescdn.louisphilippe.com/img/app/product/9/962928-17224804.jpg?auto=format&w=390", rating: 4.5, reviews: 234, brand: "WishLink Premium", inStock: true, discount: 20 },
    { id: 2, name: "Blue Denim Jeans", price: 1299, category: "men", image: "https://frenchcrown.in/cdn/shop/files/J412_2.jpg?v=1716438227&width=1750", rating: 4.3, reviews: 189, brand: "Denim Co", inStock: true, discount: 0 },
    { id: 3, name: "Leather Jacket", price: 2499, category: "men", image: "https://barneysoriginals.com/wp-content/uploads/2019/01/WEASLEY-BLCK-0047h-scaled.jpg", rating: 4.7, reviews: 156, brand: "Leather Pro", inStock: true, discount: 15 },
    { id: 4, name: "Sports Shoes", price: 1899, category: "men", image: "https://redtape.com/cdn/shop/files/RSO3783_8_jpg_d419433a-ce38-4b05-9ece-9a442af3767d.jpg?v=1755860965", rating: 4.4, reviews: 298, brand: "SportMax", inStock: false, discount: 10 },
    { id: 5, name: "Casual T-Shirt", price: 499, category: "men", image: "https://4.imimg.com/data4/KS/HD/MY-718120/mens-casual-t-shirts.jpg", rating: 4.2, reviews: 445, brand: "Comfort Wear", inStock: true, discount: 25 },
    { id: 6, name: "Formal Suit", price: 3999, category: "men", image: "https://candidmen.in/static/ecommerce/img/products/site_images/beige-subtle-formal-suit_medium_2.jpg", rating: 4.8, reviews: 89, brand: "Elite Formal", inStock: true, discount: 30 },
    
    // Women's Fashion
    { id: 7, name: "Summer Dress", price: 999, category: "women", image: "https://imgmedia.lbb.in/media/2022/12/63a997b971f2a478816177aa_1672058809001.jpg", rating: 4.6, reviews: 267, brand: "Fashion Hub", inStock: true, discount: 20 },
    { id: 8, name: "Handbag", price: 1599, category: "women", image: "https://assets.oyegifts.com/flowers-n-gifts/vendordata/resized/womens-modern-handbag-lightweight-shoulder-bag-with-comfy-straps-front.jpg", rating: 4.5, reviews: 178, brand: "Bag Studio", inStock: true, discount: 0 },
    { id: 9, name: "High Heels", price: 1299, category: "women", image: "https://www.gloriellas.com/media/cc/52/cf/1761915181/Gloriellas%20Blogbeitrag%20warum%20Frauen%20High%20Heels%20tragen%20sollten%20Anlsse%20und%20Grnde%20fr%20bequeme%20High%20Heels%20(2).jpg?ts=1766484429", rating: 4.3, reviews: 234, brand: "Shoe Paradise", inStock: true, discount: 15 },
    { id: 10, name: "Elegant Blouse", price: 799, category: "women", image: "https://cdn.shopify.com/s/files/1/0688/8498/8193/files/Accessorizing_Fancy_Blouse_Designs.jpg?v=1747986924", rating: 4.4, reviews: 156, brand: "Elegant Wear", inStock: true, discount: 10 },
    { id: 11, name: "Skirt", price: 699, category: "women", image: "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AU5987s.jpg?im=Resize,width=750", rating: 4.2, reviews: 123, brand: "Trendy Style", inStock: false, discount: 25 },
    { id: 12, name: "Winter Coat", price: 2299, category: "women", image: "https://deeds.pk/cdn/shop/files/Women-Long-Coat.jpg?v=1737547672", rating: 4.7, reviews: 198, brand: "Winter Warm", inStock: true, discount: 35 },
    
    // Unisex
    { id: 13, name: "Hoodie", price: 899, category: "unisex", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1sEi4gEzgFGyt3rF6MfaK22Ce_kIFXqhp1w&s", rating: 4.5, reviews: 312, brand: "Comfort Zone", inStock: true, discount: 20 },
    { id: 14, name: "Sneakers", price: 1499, category: "unisex", image: "https://i.pinimg.com/originals/48/1e/ef/481eefbf0e6348bb451d0e11454d673c.jpg", rating: 4.6, reviews: 423, brand: "Street Style", inStock: true, discount: 0 },
    { id: 15, name: "Backpack", price: 799, category: "unisex", image: "https://images-static.nykaa.com/media/catalog/product/4/8/48fe48d267596_1.jpg?tr=w-500", rating: 4.4, reviews: 289, brand: "Travel Gear", inStock: true, discount: 15 },
    { id: 16, name: "Watch", price: 2999, category: "unisex", image: "https://cdn.shopify.com/s/files/1/0088/2484/8442/files/091202_large.jpg?v=1568274869", rating: 4.8, reviews: 167, brand: "Time Master", inStock: true, discount: 25 },
    { id: 17, name: "Sunglasses", price: 599, category: "unisex", image: "https://firstlens.in/cdn/shop/files/First-Lens-ovalo-UV400-rimless-sunglasses-S007-24_4ad49905-4c0f-41af-83e6-c16c737708b7.jpg?v=1755274494&width=2048", rating: 4.3, reviews: 234, brand: "Eye Wear Pro", inStock: true, discount: 10 },
    { id: 18, name: "Cap", price: 299, category: "unisex", image: "https://m.media-amazon.com/images/I/81NDevJ1wnL._AC_UY1100_.jpg", rating: 4.1, reviews: 145, brand: "Head Gear", inStock: true, discount: 30 },
    
    // Children
    { id: 19, name: "Kids T-Shirt", price: 299, category: "children", image: "https://www.tenstickers.in/webp/t-shirts/large/spider-man-kids-t-shirt-with-name-19709.webp", rating: 4.4, reviews: 267, brand: "Kids Zone", inStock: true, discount: 20 },
    { id: 20, name: "Shorts Set", price: 499, category: "children", image: "https://image.hm.com/assets/hm/e6/b2/e6b256ed15ecc5643eef7d9f6dc0bfc04f1acfef.jpg?imwidth=2160", rating: 4.3, reviews: 189, brand: "Play Wear", inStock: true, discount: 0 },
    { id: 21, name: "School Bag", price: 599, category: "children", image: "https://www.alimasy.com.au/cdn/shop/files/7.png?v=1753930862&width=1500", rating: 4.5, reviews: 234, brand: "School Pro", inStock: true, discount: 15 },
    { id: 22, name: "Party Dress", price: 699, category: "children", image: "https://www.monsoon.co.uk/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-monsoon-master-catalog/default/dw47cbfd45/images/large/51_51800510021_1.jpg?sw=663&sh=848&sm=cut", rating: 4.6, reviews: 156, brand: "Party Time", inStock: false, discount: 25 },
    { id: 23, name: "Toy Set", price: 399, category: "children", image: "https://baybee.co.in/cdn/shop/files/71NUqkX6BsL._SL1500_1400x.jpg?v=1744994430", rating: 4.2, reviews: 345, brand: "Fun Toys", inStock: true, discount: 30 },
    { id: 24, name: "Kids Shoes", price: 449, category: "children", image: "https://i5.walmartimages.com/asr/a2d9cd48-7851-4053-a364-58a393873d21.2cd437baed164f273ad34cdfbaaf04a7.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF", rating: 4.4, reviews: 278, brand: "Tiny Steps", inStock: true, discount: 10 },
    
    // Sports & Fitness
    { id: 25, name: "Yoga Mat", price: 699, category: "sports", image: "https://m.media-amazon.com/images/I/71rkqWqzVIL._AC_UF894,1000_QL80_.jpg", rating: 4.6, reviews: 234, brand: "FitGear Pro", inStock: true, discount: 15 },
    { id: 26, name: "Dumbbells Set", price: 1899, category: "sports", image: "https://www.theflexnest.com/cdn/shop/products/1_26f7cabd-aa5a-4256-9c47-24833f009086.jpg?v=1635230112", rating: 4.7, reviews: 189, brand: "Strength Master", inStock: true, discount: 20 },
    { id: 27, name: "Running Shoes", price: 2299, category: "sports", image: "https://www.campusshoes.com/cdn/shop/files/FUNK_FUNK_WHITE-C.BLUE_07_43dc8d41-2970-4997-bdaa-3ec1197fbfce.webp?v=1757921352", rating: 4.5, reviews: 445, brand: "Speed Runner", inStock: true, discount: 10 },
    { id: 28, name: "Fitness Tracker", price: 2499, category: "sports", image: "https://www.stuff.tv/wp-content/uploads/sites/2/2025/02/Charge-6.jpg?w=1024", rating: 4.3, reviews: 312, brand: "Health Track", inStock: true, discount: 25 },
    { id: 29, name: "Sports Water Bottle", price: 399, category: "sports", image: "https://www.jiomart.com/images/product/original/rvjx8baa7a/dimitra-water-bottle-2l-set-of-3-sports-water-bottles-with-straw-leak-proof-motivational-time-marker-bpa-free-plastic-large-water-bottle-for-running-gym-outdoor-multicolor-product-images-orvjx8baa7a-p610731845-0-202412091516.jpg?im=Resize=(420,420)", rating: 4.4, reviews: 567, brand: "Hydro Sport", inStock: true, discount: 30 },
    { id: 30, name: "Gym Bag", price: 799, category: "sports", image: "https://store.cosco.in/cdn/shop/files/Gym-Bag-Magna-1.jpg?v=1731585351", rating: 4.2, reviews: 223, brand: "Sport Carry", inStock: false, discount: 0 },
    
    // Electronics
    { id: 31, name: "Wireless Headphones", price: 2999, category: "electronics", image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/425.png?v=1645772065", rating: 4.6, reviews: 789, brand: "Sound Pro", inStock: true, discount: 20 },
    { id: 32, name: "Smartphone", price: 15999, category: "electronics", image: "https://www.zdnet.com/a/img/resize/5559b1594a6863de392970c57e6fbc49c5f3c24d/2025/04/04/38aac0c2-a5ac-4e4a-94c9-96bf7e8908d3/dsc05222.jpg?auto=webp&fit=crop&height=900&width=1200", rating: 4.5, reviews: 1234, brand: "Tech Mobile", inStock: true, discount: 15 },
    { id: 33, name: "Laptop", price: 45999, category: "electronics", image: "https://saudewala.in/cdn/shop/collections/Laptop.jpg?v=1732216115", rating: 4.7, reviews: 456, brand: "Compute Pro", inStock: true, discount: 10 },
    { id: 34, name: "Smart Watch", price: 4999, category: "electronics", image: "https://gourban.in/cdn/shop/files/Pulse.jpg?v=1749553994&width=2048", rating: 4.4, reviews: 678, brand: "Time Tech", inStock: true, discount: 25 },
    { id: 35, name: "Bluetooth Speaker", price: 1899, category: "electronics", image: "https://arcticfox.com/cdn/shop/files/8_b5937b5b-8c26-4450-a248-3162a20e83a3.jpg?v=1706020146", rating: 4.3, reviews: 334, brand: "Sound Wave", inStock: true, discount: 30 },
    { id: 36, name: "Tablet", price: 22999, category: "electronics", image: "https://cdn.thewirecutter.com/wp-content/media/2025/03/BEST-IPAD-2048px-11thgen-pencil.jpg", rating: 4.5, reviews: 223, brand: "Tab Pro", inStock: false, discount: 0 },
    
    // Home & Living
    { id: 37, name: "Coffee Maker", price: 2999, category: "home", image: "https://images.immediate.co.uk/production/volatile/sites/30/2024/12/DeLonghi-Eletta-Explore-coffee-machine-1cf0c57.jpg?quality=90&resize=708,643", rating: 4.5, reviews: 445, brand: "Brew Master", inStock: true, discount: 20 },
    { id: 38, name: "LED Lamp", price: 899, category: "home", image: "https://www.mojolife.in/cdn/shop/files/desk-1_2.png?v=1727094719", rating: 4.3, reviews: 267, brand: "Light Home", inStock: true, discount: 15 },
    { id: 39, name: "Throw Pillows Set", price: 799, category: "home", image: "https://m.media-amazon.com/images/I/91vrXMMt1oL._AC_UF350,350_QL80_.jpg", rating: 4.4, reviews: 189, brand: "Comfort Home", inStock: true, discount: 25 },
    { id: 40, name: "Wall Clock", price: 599, category: "home", image: "https://www.jaipurcraftonline.com/cdn/shop/files/71CTEUJGy2L._SL1500.jpg", rating: 4.2, reviews: 156, brand: "Time Decor", inStock: true, discount: 10 },
    { id: 41, name: "Kitchen Knife Set", price: 1299, category: "home", image: "https://pyxis.nymag.com/v1/imgs/ecf/a00/580034ece9e907261653e86bc0f166eb8d.jpg", rating: 4.6, reviews: 278, brand: "Chef Pro", inStock: true, discount: 30 },
    { id: 42, name: "Plant Pot Set", price: 499, category: "home", image: "https://image.made-in-china.com/2f0j00SHGqBLvRZYkm/Outdoor-Indoor-Decoration-Pink-Ceramic-Large-Flower-Pots-Cheap-Pots-for-Plants-Flower.webp", rating: 4.1, reviews: 123, brand: "Green Living", inStock: true, discount: 0 }
];

// Sample Order Data
const orders = [
    {
        id: "ORD001",
        date: "2024-01-15",
        status: "delivered",
        total: 89.97,
        items: ["Classic White Shirt", "Blue Denim Jeans", "Sports Shoes"]
    },
    {
        id: "ORD002", 
        date: "2024-01-20",
        status: "shipped",
        total: 119.97,
        items: ["Summer Dress", "Handbag", "High Heels"]
    },
    {
        id: "ORD003",
        date: "2024-01-25",
        status: "processing",
        total: 54.98,
        items: ["Hoodie", "Sneakers"]
    }
];

// Cart Management
class Cart {
    constructor() {
        this.items = this.loadCart();
    }

    loadCart() {
        const savedCart = localStorage.getItem('wishlink-cart');
        return savedCart ? JSON.parse(savedCart) : [];
    }

    saveCart() {
        localStorage.setItem('wishlink-cart', JSON.stringify(this.items));
        this.updateCartCount();
    }

    addItem(product, quantity = 1) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ ...product, quantity });
        }
        
        this.saveCart();
        this.showNotification(`${product.name} added to cart!`);
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.showNotification('Item removed from cart');
        // Re-render cart to update the display
        if (document.getElementById('cart-items-container')) {
            renderCartItems();
        }
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
            }
            // Re-render cart to update the display
            if (document.getElementById('cart-items-container')) {
                renderCartItems();
            }
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        if (cartCount) {
            cartCount.textContent = this.getItemCount();
        }
    }

    clearCart() {
        this.items = [];
        this.saveCart();
    }

    showNotification(message, type = 'success') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        // Add cart-specific class for cart notifications
        if (message.includes('added to cart') || message.includes('cart')) {
            notification.classList.add('cart-success');
        }
        
        notification.innerHTML = `
            <div class="notification-content">
                <div class="notification-icon"></div>
                <div class="notification-message">${message}</div>
            </div>
        `;

        document.body.appendChild(notification);

        // Add show class for animation
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            notification.classList.add('hide');
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Initialize Cart
const cart = new Cart();

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Enhanced Product Rendering with Ratings and Reviews
function renderProduct(product) {
    const originalPrice = product.discount > 0 ? (product.price / (1 - product.discount / 100)).toFixed(2) : product.price;
    const stockStatus = product.inStock ? 'In Stock' : 'Out of Stock';
    const stockClass = product.inStock ? 'in-stock' : 'out-of-stock';
    
    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.discount > 0 ? `<div class="discount-badge">-${product.discount}%</div>` : ''}
                ${!product.inStock ? '<div class="out-of-stock-overlay">Out of Stock</div>' : ''}
                <button class="wishlist-btn" onclick="toggleWishlist(${product.id})">
                    <span class="wishlist-icon">❤️</span>
                </button>
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-name">
                    <a href="product.html?id=${product.id}">${product.name}</a>
                </h3>
                <div class="product-rating">
                    <div class="stars">${getStarRating(product.rating)}</div>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toFixed(2)}</span>
                    ${product.discount > 0 ? `<span class="original-price">₹${originalPrice}</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="cart.addItem(products.find(p => p.id === ${product.id}))" ${!product.inStock ? 'disabled' : ''}>
                        ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Generate star rating HTML
function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '⭐';
    }
    if (halfStar) {
        stars += '⭐';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '☆';
    }
    
    return stars;
}

// Wishlist Management
class Wishlist {
    constructor() {
        this.items = this.loadWishlist();
    }

    loadWishlist() {
        const savedWishlist = localStorage.getItem('wishlink-wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    }

    saveWishlist() {
        localStorage.setItem('wishlink-wishlist', JSON.stringify(this.items));
        this.updateWishlistCount();
    }

    addItem(product) {
        if (!this.items.find(item => item.id === product.id)) {
            this.items.push(product);
            this.saveWishlist();
            cart.showNotification(`${product.name} added to wishlist!`);
        } else {
            cart.showNotification('Item already in wishlist');
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveWishlist();
        cart.showNotification('Item removed from wishlist');
    }

    getItemCount() {
        return this.items.length;
    }

    updateWishlistCount() {
        const wishlistCount = document.getElementById('wishlist-count');
        if (wishlistCount) {
            wishlistCount.textContent = this.getItemCount();
        }
    }

    isInWishlist(productId) {
        return this.items.find(item => item.id === productId);
    }
}

// Initialize Wishlist
const wishlist = new Wishlist();

// Toggle wishlist item
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (wishlist.isInWishlist(productId)) {
        wishlist.removeItem(productId);
    } else {
        wishlist.addItem(product);
    }
}

// Search functionality
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    if (searchInput && searchBtn) {
        // Search on button click
        searchBtn.addEventListener('click', performSearch);
        
        // Search on Enter key
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        // Live search as user types
        searchInput.addEventListener('input', debounce(performLiveSearch, 300));
    }
}

function performSearch() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim().toLowerCase();
    
    if (!query) {
        showNotification('Please enter a search term', 'warning');
        return;
    }
    
    // Search categories
    const categoryResults = searchCategories(query);
    
    // Search products
    const productResults = searchProducts(query);
    
    // Display results
    displaySearchResults(categoryResults, productResults, query);
}

function performLiveSearch() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim().toLowerCase();
    
    if (query.length < 2) {
        hideSearchSuggestions();
        return;
    }
    
    // Get quick suggestions
    const suggestions = getSearchSuggestions(query);
    displaySearchSuggestions(suggestions);
}

function searchCategories(query) {
    const categories = [
        { name: "Men's Fashion", slug: "men", keywords: ["men", "male", "boys", "gentlemen", "fashion", "clothing", "shirts", "pants", "jeans", "t-shirts"] },
        { name: "Women's Fashion", slug: "women", keywords: ["women", "female", "girls", "ladies", "fashion", "clothing", "dresses", "skirts", "tops", "handbags"] },
        { name: "Unisex", slug: "unisex", keywords: ["unisex", "gender neutral", "all", "everyone", "universal", "both"] },
        { name: "Children", slug: "children", keywords: ["children", "kids", "boys", "girls", "baby", "toddlers", "youth", "infants"] },
        { name: "Electronics", slug: "electronics", keywords: ["electronics", "tech", "gadgets", "phones", "laptops", "computers", "tablets", "headphones", "cameras"] },
        { name: "Home & Living", slug: "home", keywords: ["home", "living", "furniture", "decor", "kitchen", "bedroom", "bathroom", "garden", "appliances"] },
        { name: "Sports & Fitness", slug: "sports", keywords: ["sports", "fitness", "exercise", "gym", "workout", "running", "yoga", "equipment", "gear"] }
    ];
    
    return categories.filter(category => {
        // Check category name
        if (category.name.toLowerCase().includes(query)) {
            return true;
        }
        
        // Check keywords
        return category.keywords.some(keyword => keyword.includes(query));
    });
}

function searchProducts(query) {
    if (!products || products.length === 0) {
        return [];
    }
    
    return products.filter(product => {
        // Search in product name
        if (product.name.toLowerCase().includes(query)) {
            return true;
        }
        
        // Search in brand
        if (product.brand && product.brand.toLowerCase().includes(query)) {
            return true;
        }
        
        // Search in category
        if (product.category && product.category.toLowerCase().includes(query)) {
            return true;
        }
        
        // Search in description (if available)
        if (product.description && product.description.toLowerCase().includes(query)) {
            return true;
        }
        
        return false;
    });
}

function getSearchSuggestions(query) {
    const suggestions = [];
    
    // Get matching categories
    const categoryResults = searchCategories(query);
    categoryResults.forEach(category => {
        suggestions.push({
            type: 'category',
            name: category.name,
            slug: category.slug,
            url: `categories.html?category=${category.slug}`
        });
    });
    
    // Get matching products (limit to 5)
    const productResults = searchProducts(query).slice(0, 5);
    productResults.forEach(product => {
        suggestions.push({
            type: 'product',
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.image,
            url: `product.html?id=${product.id}`
        });
    });
    
    return suggestions;
}

function displaySearchSuggestions(suggestions) {
    // Remove existing suggestions
    hideSearchSuggestions();
    
    if (suggestions.length === 0) {
        return;
    }
    
    // Create suggestions container
    const suggestionsContainer = document.createElement('div');
    suggestionsContainer.className = 'search-suggestions';
    suggestionsContainer.style.cssText = `
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid var(--border-color);
        border-top: none;
        border-radius: 0 0 8px 8px;
        box-shadow: var(--shadow-lg);
        max-height: 400px;
        overflow-y: auto;
        z-index: 1000;
    `;
    
    // Create suggestion items
    suggestions.forEach(suggestion => {
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        item.style.cssText = `
            padding: 12px 16px;
            cursor: pointer;
            border-bottom: 1px solid var(--border-color);
            transition: background-color var(--transition-normal);
            display: flex;
            align-items: center;
            gap: 12px;
        `;
        
        if (suggestion.type === 'category') {
            item.innerHTML = `
                <span style="font-size: 1.2rem;">📁</span>
                <div style="flex: 1;">
                    <div style="font-weight: 600; color: var(--text-primary);">${suggestion.name}</div>
                    <div style="font-size: 0.85rem; color: var(--text-secondary);">Category</div>
                </div>
                <span style="color: var(--text-light);">→</span>
            `;
        } else {
            item.innerHTML = `
                <img src="${suggestion.image}" alt="${suggestion.name}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px;">
                <div style="flex: 1;">
                    <div style="font-weight: 600; color: var(--text-primary);">${suggestion.name}</div>
                    <div style="font-size: 0.85rem; color: var(--text-secondary);">${suggestion.brand} • $${suggestion.price}</div>
                </div>
                <span style="color: var(--text-light);">→</span>
            `;
        }
        
        item.addEventListener('click', () => {
            window.location.href = suggestion.url;
        });
        
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = 'var(--bg-secondary)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = 'white';
        });
        
        suggestionsContainer.appendChild(item);
    });
    
    // Add suggestions to search bar
    const searchContainer = document.querySelector('.search-bar');
    searchContainer.style.position = 'relative';
    searchContainer.appendChild(suggestionsContainer);
    
    // Hide suggestions when clicking outside
    setTimeout(() => {
        document.addEventListener('click', hideSearchSuggestionsOnClickOutside);
    }, 100);
}

function hideSearchSuggestions() {
    const suggestions = document.querySelector('.search-suggestions');
    if (suggestions) {
        suggestions.remove();
    }
    document.removeEventListener('click', hideSearchSuggestionsOnClickOutside);
}

function hideSearchSuggestionsOnClickOutside(e) {
    if (!e.target.closest('.search-bar')) {
        hideSearchSuggestions();
    }
}

function displaySearchResults(categoryResults, productResults, query) {
    // Create search results modal
    const modal = document.createElement('div');
    modal.className = 'modal search-results-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Search Results for "${query}"</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                ${categoryResults.length > 0 ? `
                    <div class="search-section">
                        <h3>Categories (${categoryResults.length})</h3>
                        <div class="category-results">
                            ${categoryResults.map(category => `
                                <div class="search-result-item category-result" onclick="window.location.href='categories.html?category=${category.slug}'">
                                    <div class="result-icon">📁</div>
                                    <div class="result-info">
                                        <h4>${category.name}</h4>
                                        <p>Browse ${category.name.toLowerCase()} products</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                ${productResults.length > 0 ? `
                    <div class="search-section">
                        <h3>Products (${productResults.length})</h3>
                        <div class="product-results">
                            <div class="products-grid">
                                ${productResults.map(product => renderProduct(product)).join('')}
                            </div>
                        </div>
                    </div>
                ` : ''}
                ${categoryResults.length === 0 && productResults.length === 0 ? `
                    <div class="no-results">
                        <div class="no-results-icon">🔍</div>
                        <h3>No results found</h3>
                        <p>Try searching for different keywords or browse our categories.</p>
                        <button class="btn btn-primary" onclick="window.location.href='categories.html'">Browse Categories</button>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
    
    // Add styles for search results
    const style = document.createElement('style');
    style.textContent = `
        .search-results-modal .modal-content {
            max-width: 900px;
            max-height: 80vh;
            overflow-y: auto;
        }
        
        .search-section {
            margin-bottom: 30px;
        }
        
        .search-section h3 {
            color: var(--text-primary);
            margin-bottom: 15px;
            font-size: 1.2rem;
        }
        
        .category-results {
            display: grid;
            gap: 10px;
        }
        
        .search-result-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 15px;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            cursor: pointer;
            transition: all var(--transition-normal);
        }
        
        .search-result-item:hover {
            background: var(--bg-secondary);
            transform: translateX(5px);
        }
        
        .result-icon {
            font-size: 1.5rem;
        }
        
        .result-info h4 {
            margin: 0 0 5px 0;
            color: var(--text-primary);
        }
        
        .result-info p {
            margin: 0;
            color: var(--text-secondary);
            font-size: 0.9rem;
        }
        
        .no-results {
            text-align: center;
            padding: 40px;
        }
        
        .no-results-icon {
            font-size: 3rem;
            margin-bottom: 20px;
        }
        
        .no-results h3 {
            color: var(--text-primary);
            margin-bottom: 10px;
        }
        
        .no-results p {
            color: var(--text-secondary);
            margin-bottom: 20px;
        }
    `;
    document.head.appendChild(style);
    
    // Add modal to page
    document.body.appendChild(modal);
    
    // Show modal
    setTimeout(() => modal.classList.add('show'), 100);
    
    // Close modal handlers
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
            style.remove();
        }, 300);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.remove();
                style.remove();
            }, 300);
        }
    });
    
    // Initialize cart functionality for product results
    if (productResults.length > 0) {
        setTimeout(() => {
            modal.querySelectorAll('.add-to-cart-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const productId = parseInt(btn.getAttribute('onclick').match(/\d+/)[0]);
                    const product = products.find(p => p.id === productId);
                    if (product) {
                        cart.addItem(product);
                        showNotification('Product added to cart!', 'success');
                    }
                });
            });
        }, 100);
    }
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Language and Currency Switcher
function initLanguageCurrency() {
    const languageSelect = document.getElementById('language-select');
    const currencySelect = document.getElementById('currency-select');

    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            const language = e.target.value;
            cart.showNotification(`Language changed to ${language} (Demo)`);
        });
    }

    if (currencySelect) {
        currencySelect.addEventListener('change', (e) => {
            const currency = e.target.value;
            cart.showNotification(`Currency changed to ${currency} (Demo)`);
        });
    }
}

// Category Menu Toggle
function initCategoryMenu() {
    const categoryToggle = document.getElementById('category-toggle');
    const categoryMenu = document.getElementById('category-menu');

    if (categoryToggle && categoryMenu) {
        categoryToggle.addEventListener('click', () => {
            categoryMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!categoryToggle.contains(e.target) && !categoryMenu.contains(e.target)) {
                categoryMenu.classList.remove('active');
            }
        });
    }
}

// Hero Slider
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    const dotsContainer = document.getElementById('slider-dots');
    
    if (slides.length === 0) return;

    let currentSlide = 0;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'dot';
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateSlider();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
    }

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Auto-play slider
    setInterval(nextSlide, 5000);

    updateSlider();
}

// Timer for deals
function initDealTimer() {
    const timerElement = document.getElementById('flash-timer');
    if (!timerElement) return;

    function updateTimer() {
        const now = new Date();
        const endTime = new Date();
        endTime.setHours(23, 59, 59);
        
        const timeDiff = endTime - now;
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        timerElement.innerHTML = `
            <span class="time-unit">${hours}h</span>
            <span class="time-unit">${minutes}m</span>
            <span class="time-unit">${seconds}s</span>
        `;
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

// Render Featured Products (Home Page)
function renderFeaturedProducts() {
    const featuredContainer = document.getElementById('featured-products');
    if (featuredContainer) {
        const featuredProducts = products.slice(0, 8);
        featuredContainer.innerHTML = featuredProducts.map(renderProduct).join('');
    }
}

// Render All Products (Categories Page)
function renderAllProducts(filteredProducts = products) {
    const productsGrid = document.getElementById('products-grid');
    const noProducts = document.getElementById('no-products');
    
    if (productsGrid) {
        if (filteredProducts.length === 0) {
            productsGrid.style.display = 'none';
            noProducts.style.display = 'block';
        } else {
            productsGrid.style.display = 'grid';
            noProducts.style.display = 'none';
            productsGrid.innerHTML = filteredProducts.map(renderProduct).join('');
        }
    }
}

// Category Filtering
function initCategoryFilters() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const priceMin = document.getElementById('price-min');
    const priceMax = document.getElementById('price-max');
    const minPriceDisplay = document.getElementById('min-price');
    const maxPriceDisplay = document.getElementById('max-price');
    const sortSelect = document.getElementById('sort-select');

    if (tabButtons.length > 0) {
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                tabButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                filterProducts();
            });
        });
    }

    if (priceMin && priceMax) {
        priceMin.addEventListener('input', () => {
            minPriceDisplay.textContent = priceMin.value;
            if (parseInt(priceMin.value) > parseInt(priceMax.value)) {
                priceMax.value = priceMin.value;
                maxPriceDisplay.textContent = priceMax.value;
            }
            filterProducts();
        });

        priceMax.addEventListener('input', () => {
            maxPriceDisplay.textContent = priceMax.value;
            if (parseInt(priceMax.value) < parseInt(priceMin.value)) {
                priceMin.value = priceMax.value;
                minPriceDisplay.textContent = priceMin.value;
            }
            filterProducts();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', filterProducts);
    }

    // Check for URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
        const categoryBtn = document.querySelector(`[data-category="${categoryParam}"]`);
        if (categoryBtn) {
            tabButtons.forEach(b => b.classList.remove('active'));
            categoryBtn.classList.add('active');
        }
    }
}

function filterProducts() {
    const activeCategory = document.querySelector('.tab-btn.active')?.dataset.category || 'all';
    const minPrice = parseInt(document.getElementById('price-min')?.value || 0);
    const maxPrice = parseInt(document.getElementById('price-max')?.value || 200);
    const sortBy = document.getElementById('sort-select')?.value || 'default';

    let filtered = products.filter(product => {
        const categoryMatch = activeCategory === 'all' || product.category === activeCategory;
        const priceMatch = product.price >= minPrice && product.price <= maxPrice;
        return categoryMatch && priceMatch;
    });

    // Sort products
    switch (sortBy) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }

    renderAllProducts(filtered);
}

// Cart Page Functions
function renderCartItems() {
    const cartContainer = document.getElementById('cart-items-container');
    const emptyCart = document.getElementById('empty-cart');
    
    if (cartContainer) {
        if (cart.items.length === 0) {
            cartContainer.style.display = 'none';
            emptyCart.style.display = 'block';
        } else {
            cartContainer.style.display = 'block';
            emptyCart.style.display = 'none';
            
            cartContainer.innerHTML = cart.items.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <h4 class="cart-item-name">${item.name}</h4>
                        <p class="cart-item-price">₹${item.price.toFixed(2)}</p>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                            <span class="quantity-value">${item.quantity}</span>
                            <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        </div>
                    </div>
                    <button class="remove-item" onclick="cart.removeItem(${item.id})">Remove</button>
                </div>
            `).join('');
        }
        
        updateCartSummary();
    }
}

function updateCartSummary() {
    const subtotal = cart.getTotal();
    const shipping = subtotal > 500 ? 0 : 99; // Free shipping above ₹500, otherwise ₹99
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    const elements = {
        subtotal: document.getElementById('subtotal'),
        shipping: document.getElementById('shipping'),
        tax: document.getElementById('tax'),
        total: document.getElementById('total')
    };

    if (elements.subtotal) elements.subtotal.textContent = `₹${subtotal.toFixed(2)}`;
    if (elements.shipping) elements.shipping.textContent = shipping === 0 ? 'FREE' : `₹${shipping.toFixed(2)}`;
    if (elements.tax) elements.tax.textContent = `₹${tax.toFixed(2)}`;
    if (elements.total) elements.total.textContent = `₹${total.toFixed(2)}`;
}

// Profile Page Functions
function renderOrders() {
    const ordersList = document.getElementById('orders-list');
    
    if (ordersList) {
        ordersList.innerHTML = orders.map(order => `
            <div class="order-item">
                <div class="order-header">
                    <div>
                        <span class="order-number">${order.id}</span>
                        <span class="order-date">${order.date}</span>
                    </div>
                    <span class="order-status status-${order.status}">${order.status.toUpperCase()}</span>
                </div>
                <p>Items: ${order.items.join(', ')}</p>
                <p class="order-total">Total: ₹${order.total.toFixed(2)}</p>
            </div>
        `).join('');
    }
}

// Profile Form
function initProfileForm() {
    const profileForm = document.getElementById('profile-form');
    const cancelBtn = document.getElementById('cancel-btn');

    if (profileForm) {
        // Load saved profile data
        const savedProfile = localStorage.getItem('wishlink-profile');
        if (savedProfile) {
            const profile = JSON.parse(savedProfile);
            document.getElementById('name').value = profile.name || '';
            document.getElementById('email').value = profile.email || '';
            document.getElementById('phone').value = profile.phone || '';
            document.getElementById('address').value = profile.address || '';
        }

        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const profile = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                address: document.getElementById('address').value
            };
            
            localStorage.setItem('wishlink-profile', JSON.stringify(profile));
            cart.showNotification('Profile saved successfully!');
        });

        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => {
                profileForm.reset();
            });
        }
    }
}

// Newsletter Form
function initNewsletterForm() {
    const newsletterForms = document.querySelectorAll('#newsletter-form');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            cart.showNotification(`Thank you for subscribing with ${email}!`);
            form.reset();
        });
    });
}

// Checkout Button
function initCheckoutButton() {
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.items.length === 0) {
                cart.showNotification('Your cart is empty!');
                return;
            }
            
            // Redirect to checkout page
            window.location.href = 'checkout.html';
        });
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navActions = document.querySelector('.nav-actions');
    
    if (hamburger && navActions) {
        hamburger.addEventListener('click', () => {
            navActions.classList.toggle('mobile-active');
            hamburger.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navActions.contains(e.target)) {
                navActions.classList.remove('mobile-active');
                hamburger.classList.remove('active');
            }
        });
    }
}

// Dynamic CSS Enhancements
class DynamicCSS {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollEffects();
        this.setupDynamicClasses();
        this.setupRippleEffects();
        this.setupTooltips();
        this.setupNotifications();
        this.setupModals();
        this.setupAccordions();
        this.setupTabs();
        this.setupDropdowns();
        this.setupLoadingStates();
        this.setupParallax();
        this.setupIntersectionObserver();
    }

    // Scroll Effects
    setupScrollEffects() {
        const navbar = document.querySelector('.navbar');
        let lastScrollTop = 0;

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Navbar scroll effect
            if (navbar) {
                if (scrollTop > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }

            lastScrollTop = scrollTop;
        });
    }

    // Dynamic Classes
    setupDynamicClasses() {
        // Add dynamic classes to elements
        document.addEventListener('DOMContentLoaded', () => {
            // Add dynamic-hover to buttons
            document.querySelectorAll('.btn').forEach(btn => {
                btn.classList.add('dynamic-hover');
            });

            // Add dynamic-card to product cards
            document.querySelectorAll('.product-card').forEach(card => {
                card.classList.add('dynamic-card');
            });

            // Add hover classes to various elements
            document.querySelectorAll('.nav-action').forEach(action => {
                action.classList.add('hover-lift');
            });

            document.querySelectorAll('.deal-card, .highlight-item').forEach(card => {
                card.classList.add('hover-lift');
            });
        });
    }

    // Ripple Effects
    setupRippleEffects() {
        document.addEventListener('click', (e) => {
            const rippleElement = e.target.closest('.ripple, .btn');
            if (rippleElement) {
                this.createRipple(rippleElement, e);
            }
        });
    }

    createRipple(element, event) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple-effect');

        element.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Tooltips
    setupTooltips() {
        document.querySelectorAll('[data-tooltip]').forEach(element => {
            element.classList.add('tooltip');
        });
    }

    // Notifications
    setupNotifications() {
        // Global notification function
        window.showNotification = (message, type = 'success') => {
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.textContent = message;
            document.body.appendChild(notification);

            setTimeout(() => notification.classList.add('show'), 100);
            
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        };
    }

    // Modals
    setupModals() {
        // Global modal functions
        window.showModal = (modalId) => {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        };

        window.hideModal = (modalId) => {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }
        };

        // Close modal on background click
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }

    // Accordions
    setupAccordions() {
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                const content = header.nextElementSibling;
                const icon = header.querySelector('.accordion-icon');

                // Close other accordion items
                document.querySelectorAll('.accordion-item').forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.accordion-content').style.maxHeight = '0';
                    }
                });

                // Toggle current item
                item.classList.toggle('active');
                if (item.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = '0';
                }
            });
        });
    }

    // Tabs
    setupTabs() {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tabContainer = btn.parentElement;
                const targetTab = btn.dataset.tab;

                // Remove active class from all tabs and buttons
                tabContainer.querySelectorAll('.tab-btn').forEach(tabBtn => {
                    tabBtn.classList.remove('active');
                });
                btn.classList.add('active');

                // Hide all tab content
                const allTabContents = document.querySelectorAll('.tab-pane');
                allTabContents.forEach(content => {
                    content.classList.remove('active');
                });

                // Show target tab content
                const targetContent = document.getElementById(targetTab);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }

    // Dropdowns
    setupDropdowns() {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            const trigger = dropdown.querySelector('.dropdown-trigger');
            const content = dropdown.querySelector('.dropdown-content');

            if (trigger && content) {
                trigger.addEventListener('click', (e) => {
                    e.stopPropagation();
                    content.style.opacity = content.style.opacity === '1' ? '0' : '1';
                    content.style.visibility = content.style.visibility === 'visible' ? 'hidden' : 'visible';
                });
            }
        });

        // Close dropdowns on outside click
        document.addEventListener('click', () => {
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.style.opacity = '0';
                content.style.visibility = 'hidden';
            });
        });
    }

    // Loading States
    setupLoadingStates() {
        // Add loading state to buttons
        document.addEventListener('click', (e) => {
            const button = e.target.closest('.btn');
            if (button && button.classList.contains('btn-primary')) {
                this.addLoadingState(button);
            }
        });
    }

    addLoadingState(button) {
        const originalText = button.innerHTML;
        button.innerHTML = '<span class="spinner"></span> Loading...';
        button.disabled = true;

        // Simulate loading (remove this in production)
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 2000);
    }

    // Parallax Effects
    setupParallax() {
        const parallaxElements = document.querySelectorAll('.parallax-layer');
        
        if (parallaxElements.length > 0) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                
                parallaxElements.forEach(element => {
                    const speed = element.dataset.speed || 0.5;
                    const yPos = -(scrolled * speed);
                    element.style.transform = `translateY(${yPos}px)`;
                });
            });
        }
    }

    // Intersection Observer for animations
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    // Add animation classes based on element type
                    if (element.classList.contains('product-card')) {
                        element.style.animation = 'fadeInUp 0.6s ease-out';
                    } else if (element.classList.contains('deal-card')) {
                        element.style.animation = 'slideInFromLeft 0.6s ease-out';
                    } else if (element.classList.contains('highlight-item')) {
                        element.style.animation = 'slideInFromRight 0.6s ease-out';
                    } else if (element.classList.contains('testimonial-card')) {
                        element.style.animation = 'fadeInUp 0.8s ease-out';
                    }
                    
                    observer.unobserve(element);
                }
            });
        }, observerOptions);

        // Observe elements
        document.querySelectorAll('.product-card, .deal-card, .highlight-item, .testimonial-card').forEach(element => {
            observer.observe(element);
        });
    }

    // Dynamic color scheme
    updateColorScheme(primary, secondary) {
        document.documentElement.style.setProperty('--primary-color', primary);
        document.documentElement.style.setProperty('--secondary-color', secondary);
    }

    // Dynamic font size
    updateFontSize(size) {
        document.documentElement.style.fontSize = size + 'px';
    }

    // Dark mode toggle
    toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark);
    }

    // Initialize dark mode from localStorage
    initDarkMode() {
        const darkMode = localStorage.getItem('darkMode') === 'true';
        if (darkMode) {
            document.body.classList.add('dark-mode');
        }
    }
}

// Initialize Dynamic CSS
const dynamicCSS = new DynamicCSS();

// Additional dynamic features
class AdvancedAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.setupMagneticButtons();
        this.setupTextAnimations();
        this.setupProgressBars();
        this.setupCounters();
        this.setupTypewriter();
    }

    // Magnetic button effect
    setupMagneticButtons() {
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });

            button.addEventListener('mouseleave', () => {
                button.style.transform = '';
            });
        });
    }

    // Text animations
    setupTextAnimations() {
        document.querySelectorAll('.text-gradient').forEach(element => {
            element.style.animation = 'text-gradient 3s ease-in-out infinite';
        });
    }

    // Progress bars
    setupProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const progress = progressBar.dataset.progress || 75;
                    progressBar.style.setProperty('--progress', progress + '%');
                    progressObserver.unobserve(progressBar);
                }
            });
        });

        progressBars.forEach(bar => progressObserver.observe(bar));
    }

    // Animated counters
    setupCounters() {
        const counters = document.querySelectorAll('.counter');
        
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.dataset.target);
                    const duration = parseInt(counter.dataset.duration) || 2000;
                    const increment = target / (duration / 16);
                    let current = 0;

                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.textContent = Math.floor(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target;
                        }
                    };

                    updateCounter();
                    counterObserver.unobserve(counter);
                }
            });
        });

        counters.forEach(counter => counterObserver.observe(counter));
    }

    // Typewriter effect
    setupTypewriter() {
        const typewriterElements = document.querySelectorAll('.typewriter');
        
        typewriterElements.forEach(element => {
            const text = element.dataset.text || element.textContent;
            const speed = parseInt(element.dataset.speed) || 100;
            element.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                }
            };
            
            typeWriter();
        });
    }
}

// Initialize Advanced Animations
const advancedAnimations = new AdvancedAnimations();

// Performance optimization
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.setupLazyLoading();
        this.setupThrottledScroll();
        this.setupDebouncedResize();
    }

    // Lazy loading for images
    setupLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Throttled scroll events
    setupThrottledScroll() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    // Scroll-based animations here
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // Debounced resize events
    setupDebouncedResize() {
        let resizeTimer;
        
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                // Resize-based adjustments here
                this.adjustLayout();
            }, 250);
        });
    }

    adjustLayout() {
        // Dynamic layout adjustments
        const width = window.innerWidth;
        
        if (width < 768) {
            document.body.classList.add('mobile-layout');
        } else {
            document.body.classList.remove('mobile-layout');
        }
    }
}

// Initialize Performance Optimizer
const performanceOptimizer = new PerformanceOptimizer();

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Update cart count on all pages
    cart.updateCartCount();
    
    // Update wishlist count
    wishlist.updateWishlistCount();
    
    // Initialize authentication state
    initAuthState();
    
    // Initialize new features
    initSearch();
    initLanguageCurrency();
    initCategoryMenu();
    initHeroSlider();
    initDealTimer();
    initMobileMenu();
    
    // Page-specific initializations
    if (document.getElementById('featured-products')) {
        renderFeaturedProducts();
    }
    
    if (document.getElementById('new-arrivals-grid')) {
        renderNewArrivals();
    }
    
    if (document.getElementById('related-products-grid')) {
        renderRelatedProducts();
    }
    
    if (document.getElementById('products-grid')) {
        initCategoryFilters();
        filterProducts();
    }
    
    if (document.getElementById('cart-items-container')) {
        renderCartItems();
        initCheckoutButton();
    }
    
    if (document.getElementById('orders-list')) {
        renderOrders();
        initProfileForm();
    }
    
    // Initialize newsletter forms on all pages
    initNewsletterForm();
});

// Render New Arrivals
function renderNewArrivals() {
    const newArrivalsContainer = document.getElementById('new-arrivals-grid');
    if (newArrivalsContainer) {
        const newArrivals = products.slice(0, 4);
        newArrivalsContainer.innerHTML = newArrivals.map(renderProduct).join('');
    }
}

// Render Related Products
function renderRelatedProducts() {
    const relatedContainer = document.getElementById('related-products-grid');
    if (relatedContainer) {
        const relatedProducts = products.slice(4, 8);
        relatedContainer.innerHTML = relatedProducts.map(renderProduct).join('');
    }
}

// Initialize authentication state
function initAuthState() {
    const authLink = document.getElementById('auth-link');
    const profileLink = document.getElementById('profile-link');
    
    // Check if user is logged in
    const userData = localStorage.getItem('wishlink-user');
    const isLoggedIn = userData && JSON.parse(userData).isLoggedIn;
    
    if (authLink) {
        if (isLoggedIn) {
            const user = JSON.parse(userData);
            authLink.textContent = 'Sign Out';
            authLink.addEventListener('click', (e) => {
                e.preventDefault();
                signOut();
            });
        } else {
            authLink.textContent = 'Sign In';
            authLink.href = 'auth.html';
        }
    }
    
    if (profileLink && !isLoggedIn) {
        profileLink.addEventListener('click', (e) => {
            e.preventDefault();
            cart.showNotification('Please sign in to access your profile');
            setTimeout(() => {
                window.location.href = 'auth.html';
            }, 1000);
        });
    }
}

// Sign out function
function signOut() {
    localStorage.removeItem('wishlink-user');
    cart.showNotification('You have been signed out');
    
    // Redirect to home page
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

// Re-render cart when items change
window.addEventListener('storage', (e) => {
    if (e.key === 'wishlink-cart') {
        cart.items = cart.loadCart();
        cart.updateCartCount();
        
        if (document.getElementById('cart-items-container')) {
            renderCartItems();
        }
    }
});

// Back to Top Button
function initBackToTop() {
    // Create button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopBtn);
    
    // Show/hide on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize back to top on all pages
document.addEventListener('DOMContentLoaded', initBackToTop);

// Initialize categories page
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('products-grid')) {
        initCategoriesPage();
    }
});

// Initialize categories page
function initCategoriesPage() {
    console.log('initCategoriesPage called');
    console.log('Total products available:', products.length);
    console.log('Products by category:');
    console.log('Men:', products.filter(p => p.category === 'men').length);
    console.log('Women:', products.filter(p => p.category === 'women').length);
    console.log('Unisex:', products.filter(p => p.category === 'unisex').length);
    console.log('Children:', products.filter(p => p.category === 'children').length);
    console.log('Electronics:', products.filter(p => p.category === 'electronics').length);
    console.log('Home:', products.filter(p => p.category === 'home').length);
    console.log('Sports:', products.filter(p => p.category === 'sports').length);
    
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    const filterParam = urlParams.get('filter');
    
    console.log('Category param:', categoryParam, 'Filter param:', filterParam);
    
    // Set active category
    const activeCategory = categoryParam || 'all';
    
    // Filter products based on category
    let filteredProducts = products;
    if (activeCategory !== 'all') {
        filteredProducts = products.filter(product => product.category === activeCategory);
        console.log(`Filtered by ${activeCategory}:`, filteredProducts.length, 'products');
    }
    
    // Apply additional filters
    if (filterParam) {
        switch (filterParam) {
            case 'new':
                filteredProducts = filteredProducts.slice(0, 8);
                break;
            case 'premium':
                filteredProducts = filteredProducts.filter(product => product.price > 1000);
                break;
            case 'flash':
                filteredProducts = filteredProducts.filter(product => product.discount > 0);
                break;
            case 'seasonal':
                filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes('winter') || product.name.toLowerCase().includes('summer'));
                break;
            case 'bogo':
                filteredProducts = filteredProducts.filter(product => product.discount >= 50);
                break;
        }
    }
    
    console.log('Final filtered products:', filteredProducts.length);
    
    // Render products
    renderAllProducts(filteredProducts);
    
    // Initialize filters
    initFilters();
    
    // Update page title
    updatePageTitle(activeCategory);
}

// Initialize filters
function initFilters() {
    const minPriceInput = document.getElementById('price-min');
    const maxPriceInput = document.getElementById('price-max');
    const sortSelect = document.getElementById('sort-select');
    
    if (minPriceInput) {
        minPriceInput.addEventListener('input', filterProducts);
    }
    
    if (maxPriceInput) {
        maxPriceInput.addEventListener('input', filterProducts);
    }
    
    if (sortSelect) {
        sortSelect.addEventListener('change', filterProducts);
    }
}

// Filter products
function filterProducts() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category') || 'all';
    const filterParam = urlParams.get('filter');
    const minPrice = parseInt(document.getElementById('price-min')?.value || 0);
    const maxPrice = parseInt(document.getElementById('price-max')?.value || 20000);
    const sortBy = document.getElementById('sort-select')?.value || 'default';
    
    let filtered = products.filter(product => {
        const categoryMatch = categoryParam === 'all' || product.category === categoryParam;
        const priceMatch = product.price >= minPrice && product.price <= maxPrice;
        return categoryMatch && priceMatch;
    });
    
    // Apply additional filters
    if (filterParam) {
        switch (filterParam) {
            case 'new':
                filtered = filtered.slice(0, 8);
                break;
            case 'premium':
                filtered = filtered.filter(product => product.price > 1000);
                break;
            case 'flash':
                filtered = filtered.filter(product => product.discount > 0);
                break;
            case 'seasonal':
                filtered = filtered.filter(product => product.name.toLowerCase().includes('winter') || product.name.toLowerCase().includes('summer'));
                break;
            case 'bogo':
                filtered = filtered.filter(product => product.discount >= 50);
                break;
        }
    }
    
    // Sort products
    switch (sortBy) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            // Keep original order
            break;
    }
    
    renderAllProducts(filtered);
}

// Update page title
function updatePageTitle(category) {
    const titles = {
        'men': "Men's Fashion",
        'women': "Women's Fashion",
        'unisex': 'Unisex',
        'children': 'Children',
        'electronics': 'Electronics',
        'home': 'Home & Living',
        'sports': 'Sports & Fitness',
        'all': 'All Products'
    };
    
    const title = titles[category] || 'All Products';
    document.title = `${title} - WishLink`;
}

// Update auth link based on login state
function updateAuthLink() {
    const authLink = document.getElementById('auth-link');
    if (!authLink) return;
    
    const userData = localStorage.getItem('wishlink-user');
    const isLoggedIn = userData && JSON.parse(userData).isLoggedIn;
    
    if (isLoggedIn) {
        const user = JSON.parse(userData);
        authLink.innerHTML = `
            <span class="action-icon">👤</span>
            <span class="action-text">${user.name ? user.name.split(' ')[0] : 'Profile'}</span>
        `;
        authLink.href = 'profile.html';
    }
}

// Initialize auth link on page load
document.addEventListener('DOMContentLoaded', updateAuthLink);
