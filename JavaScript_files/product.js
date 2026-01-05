// Product Page Management
document.addEventListener('DOMContentLoaded', () => {
    initProductPage();
});

let currentProduct = null;
let selectedSize = 'M';
let selectedColor = 'black';
let quantity = 1;

function initProductPage() {
    loadProductDetails();
    setupImageGallery();
    setupSizeSelector();
    setupColorSelector();
    setupQuantityControls();
    setupProductActions();
    setupTabs();
    loadRelatedProducts();
    loadReviews();
}

// Load product details from URL parameter
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (!productId) {
        // Default to first product if no ID provided
        currentProduct = products[0];
    } else {
        currentProduct = products.find(p => p.id === productId);
    }
    
    if (!currentProduct) {
        showProductNotFound();
        return;
    }
    
    // Update page title
    document.title = `${currentProduct.name} - WishLink`;
    
    // Update product details
    updateProductDisplay();
    updateBreadcrumb();
}

// Update product display
function updateProductDisplay() {
    const product = currentProduct;
    
    // Update main image
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
        mainImage.src = product.image;
        mainImage.alt = product.name;
    }
    
    // Update product title
    const title = document.getElementById('product-title');
    if (title) title.textContent = product.name;
    
    // Update product name in breadcrumb
    const productName = document.getElementById('product-name');
    if (productName) productName.textContent = product.name;
    
    // Update rating
    const rating = document.getElementById('product-rating');
    if (rating) rating.innerHTML = getStarRating(product.rating);
    
    // Update price
    const currentPrice = document.getElementById('current-price');
    const originalPrice = document.getElementById('original-price');
    const discountBadge = document.getElementById('discount-badge');
    
    if (currentPrice) currentPrice.textContent = `₹${product.price.toFixed(2)}`;
    
    if (product.discount > 0) {
        const original = (product.price / (1 - product.discount / 100)).toFixed(2);
        if (originalPrice) {
            originalPrice.textContent = `₹${original}`;
            originalPrice.style.display = 'inline';
        }
        if (discountBadge) {
            discountBadge.textContent = `-${product.discount}% OFF`;
            discountBadge.style.display = 'inline-block';
        }
    } else {
        if (originalPrice) originalPrice.style.display = 'none';
        if (discountBadge) discountBadge.style.display = 'none';
    }
    
    // Update SKU
    const sku = document.getElementById('product-sku');
    if (sku) sku.textContent = `WL-${String(product.id).padStart(6, '0')}`;
    
    // Update brand
    const brand = document.getElementById('product-brand');
    if (brand) brand.textContent = product.brand || 'WishLink Premium';
    
    // Update stock info
    const stockInfo = document.getElementById('stock-info');
    if (stockInfo) {
        if (product.inStock) {
            stockInfo.textContent = 'Only 5 items left in stock!';
            stockInfo.style.color = '#ef4444';
        } else {
            stockInfo.textContent = 'Out of Stock';
            stockInfo.style.color = '#6b7280';
        }
    }
    
    // Update add to cart button
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    if (addToCartBtn) {
        addToCartBtn.disabled = !product.inStock;
        addToCartBtn.innerHTML = product.inStock 
            ? '<span>🛒</span> Add to Cart' 
            : '<span>❌</span> Out of Stock';
    }
}

// Update breadcrumb
function updateBreadcrumb() {
    const categoryLink = document.getElementById('category-link');
    if (categoryLink && currentProduct) {
        const categoryName = currentProduct.category.charAt(0).toUpperCase() + currentProduct.category.slice(1);
        categoryLink.textContent = categoryName;
        categoryLink.href = `categories.html?category=${currentProduct.category}`;
    }
}

// Generate star rating HTML
function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) stars += '⭐';
    if (halfStar) stars += '⭐';
    for (let i = 0; i < emptyStars; i++) stars += '☆';
    
    return stars;
}

// Setup image gallery
function setupImageGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-product-image');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            thumbnails.forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
            
            const img = thumbnail.querySelector('img');
            if (mainImage && img) {
                mainImage.src = img.src.replace('/100/100', '/600/600');
            }
        });
    });
    
    // Zoom button
    const zoomBtn = document.getElementById('zoom-btn');
    if (zoomBtn && mainImage) {
        zoomBtn.addEventListener('click', () => {
            openImageModal(mainImage.src);
        });
    }
}

// Open image modal for zoom
function openImageModal(imageSrc) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <img src="${imageSrc}" alt="Product Image">
            </div>
        </div>
    `;
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    modal.querySelector('.modal-content').style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
    `;
    
    modal.querySelector('img').style.cssText = `
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
    `;
    
    modal.querySelector('.modal-close').style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
    `;
    
    document.body.appendChild(modal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('modal-close') || e.target.classList.contains('modal-overlay')) {
            document.body.removeChild(modal);
        }
    });
}

// Setup size selector
function setupSizeSelector() {
    const sizeButtons = document.querySelectorAll('.size-btn');
    
    sizeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            sizeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedSize = btn.dataset.size;
        });
    });
    
    // Size guide
    const sizeGuideLink = document.getElementById('size-guide-link');
    if (sizeGuideLink) {
        sizeGuideLink.addEventListener('click', (e) => {
            e.preventDefault();
            showSizeGuide();
        });
    }
}

// Show size guide modal
function showSizeGuide() {
    cart.showNotification('Size guide coming soon! (Demo)');
}

// Setup color selector
function setupColorSelector() {
    const colorButtons = document.querySelectorAll('.color-btn');
    
    colorButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            colorButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedColor = btn.dataset.color;
        });
    });
}

// Setup quantity controls
function setupQuantityControls() {
    const decreaseBtn = document.getElementById('quantity-decrease');
    const increaseBtn = document.getElementById('quantity-increase');
    const quantityInput = document.getElementById('quantity-input');
    
    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                if (quantityInput) quantityInput.value = quantity;
            }
        });
    }
    
    if (increaseBtn) {
        increaseBtn.addEventListener('click', () => {
            if (quantity < 10) {
                quantity++;
                if (quantityInput) quantityInput.value = quantity;
            }
        });
    }
    
    if (quantityInput) {
        quantityInput.addEventListener('change', (e) => {
            let val = parseInt(e.target.value);
            if (isNaN(val) || val < 1) val = 1;
            if (val > 10) val = 10;
            quantity = val;
            quantityInput.value = quantity;
        });
    }
}

// Setup product action buttons
function setupProductActions() {
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const buyNowBtn = document.getElementById('buy-now-btn');
    const wishlistBtn = document.getElementById('wishlist-btn');
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            if (currentProduct && currentProduct.inStock) {
                cart.addItem(currentProduct, quantity);
            }
        });
    }
    
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', () => {
            if (currentProduct && currentProduct.inStock) {
                cart.addItem(currentProduct, quantity);
                window.location.href = 'checkout.html';
            }
        });
    }
    
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', () => {
            if (currentProduct) {
                if (wishlist.isInWishlist(currentProduct.id)) {
                    wishlist.removeItem(currentProduct.id);
                    wishlistBtn.innerHTML = '<span>❤️</span> Add to Wishlist';
                } else {
                    wishlist.addItem(currentProduct);
                    wishlistBtn.innerHTML = '<span>💔</span> Remove from Wishlist';
                }
            }
        });
        
        // Check initial wishlist state
        if (currentProduct && wishlist.isInWishlist(currentProduct.id)) {
            wishlistBtn.innerHTML = '<span>💔</span> Remove from Wishlist';
        }
    }
    
    // Pincode check
    const checkPincodeBtn = document.getElementById('check-pincode-btn');
    if (checkPincodeBtn) {
        checkPincodeBtn.addEventListener('click', () => {
            const pincode = document.getElementById('pincode-input')?.value;
            if (pincode && pincode.length >= 5) {
                cart.showNotification(`Delivery available to ${pincode}! Estimated: 3-5 days`);
            } else {
                cart.showNotification('Please enter a valid pincode');
            }
        });
    }
}

// Setup tabs
function setupTabs() {
    const tabButtons = document.querySelectorAll('.spec-tabs .tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            tabPanes.forEach(pane => {
                pane.classList.toggle('active', pane.id === tabId);
            });
        });
    });
}

// Load related products
function loadRelatedProducts() {
    const container = document.getElementById('related-products-grid');
    if (!container || !currentProduct) return;
    
    const related = products
        .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
        .slice(0, 4);
    
    if (related.length === 0) {
        container.innerHTML = products.slice(0, 4).map(p => renderProduct(p)).join('');
    } else {
        container.innerHTML = related.map(p => renderProduct(p)).join('');
    }
}

// Load reviews
function loadReviews() {
    const container = document.getElementById('reviews-list');
    if (!container) return;
    
    const sampleReviews = [
        {
            name: 'John D.',
            rating: 5,
            date: 'December 28, 2025',
            title: 'Excellent Quality!',
            comment: 'This product exceeded my expectations. The quality is top-notch and it arrived faster than expected. Highly recommend!',
            verified: true
        },
        {
            name: 'Sarah M.',
            rating: 4,
            date: 'December 25, 2025',
            title: 'Great Value',
            comment: 'Good product for the price. Fits well and looks great. Would buy again.',
            verified: true
        },
        {
            name: 'Mike R.',
            rating: 5,
            date: 'December 20, 2025',
            title: 'Perfect!',
            comment: 'Exactly what I was looking for. The material is comfortable and durable.',
            verified: false
        }
    ];
    
    container.innerHTML = sampleReviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <div class="reviewer-info">
                    <span class="reviewer-name">${review.name}</span>
                    ${review.verified ? '<span class="verified-badge">✓ Verified Purchase</span>' : ''}
                </div>
                <div class="review-rating">${getStarRating(review.rating)}</div>
            </div>
            <div class="review-title">${review.title}</div>
            <div class="review-date">${review.date}</div>
            <div class="review-comment">${review.comment}</div>
            <div class="review-actions">
                <button class="helpful-btn">👍 Helpful</button>
                <button class="report-btn">🚩 Report</button>
            </div>
        </div>
    `).join('');
    
    // Add styles for reviews
    addReviewStyles();
}

// Add review styles
function addReviewStyles() {
    if (document.getElementById('review-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'review-styles';
    style.textContent = `
        .review-item {
            padding: 25px;
            border-bottom: 1px solid #e5e7eb;
        }
        .review-item:last-child {
            border-bottom: none;
        }
        .review-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }
        .reviewer-name {
            font-weight: 600;
            color: #0f1111;
        }
        .verified-badge {
            background: #d1fae5;
            color: #047857;
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 0.75rem;
            margin-left: 10px;
        }
        .review-title {
            font-weight: 600;
            font-size: 1.1rem;
            color: #0f1111;
            margin-bottom: 5px;
        }
        .review-date {
            color: #565959;
            font-size: 0.85rem;
            margin-bottom: 15px;
        }
        .review-comment {
            color: #0f1111;
            line-height: 1.6;
            margin-bottom: 15px;
        }
        .review-actions {
            display: flex;
            gap: 15px;
        }
        .helpful-btn, .report-btn {
            background: none;
            border: 1px solid #e5e7eb;
            padding: 5px 12px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.85rem;
            transition: all 0.3s ease;
        }
        .helpful-btn:hover {
            background: #f0fdf4;
            border-color: #10b981;
        }
        .report-btn:hover {
            background: #fef2f2;
            border-color: #ef4444;
        }
    `;
    document.head.appendChild(style);
}

// Show product not found
function showProductNotFound() {
    const main = document.querySelector('.product-detail');
    if (main) {
        main.innerHTML = `
            <div class="container" style="text-align: center; padding: 80px 20px;">
                <div style="font-size: 5rem; margin-bottom: 30px;">🔍</div>
                <h1 style="font-size: 2rem; color: #0f1111; margin-bottom: 15px;">Product Not Found</h1>
                <p style="color: #565959; margin-bottom: 30px;">Sorry, we couldn't find the product you're looking for.</p>
                <a href="categories.html" class="btn btn-primary">Browse Products</a>
            </div>
        `;
    }
}
