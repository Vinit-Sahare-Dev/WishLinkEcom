// Wishlist Page Management
document.addEventListener('DOMContentLoaded', () => {
    initWishlistPage();
});

function initWishlistPage() {
    renderWishlistItems();
    setupWishlistActions();
    renderRecommendations();
    updateWishlistStats();
}

// Render wishlist items
function renderWishlistItems() {
    const container = document.getElementById('wishlist-items-container');
    const emptyWishlist = document.getElementById('empty-wishlist');
    
    if (!container) return;
    
    if (wishlist.items.length === 0) {
        container.style.display = 'none';
        emptyWishlist.style.display = 'block';
    } else {
        container.style.display = 'block';
        emptyWishlist.style.display = 'none';
        
        container.innerHTML = wishlist.items.map(item => `
            <div class="wishlist-item" data-id="${item.id}">
                <div class="wishlist-item-image">
                    <a href="product.html?id=${item.id}">
                        <img src="${item.image}" alt="${item.name}">
                    </a>
                </div>
                <div class="wishlist-item-details">
                    <h3 class="wishlist-item-name">
                        <a href="product.html?id=${item.id}">${item.name}</a>
                    </h3>
                    <p class="wishlist-item-brand">${item.brand || 'WishLink'}</p>
                    <p class="wishlist-item-price">₹${item.price.toFixed(2)}</p>
                    <div class="wishlist-item-stock ${item.inStock ? 'in-stock' : 'out-of-stock'}">
                        ${item.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                    </div>
                </div>
                <div class="wishlist-item-actions">
                    <button class="btn btn-primary add-to-cart-from-wishlist" data-id="${item.id}" ${!item.inStock ? 'disabled' : ''}>
                        Add to Cart
                    </button>
                    <button class="btn btn-outline remove-from-wishlist" data-id="${item.id}">
                        Remove
                    </button>
                </div>
            </div>
        `).join('');
        
        // Add event listeners
        container.querySelectorAll('.add-to-cart-from-wishlist').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.id);
                const product = products.find(p => p.id === productId);
                if (product) {
                    cart.addItem(product);
                    showNotification('Added to cart!', 'success');
                }
            });
        });
        
        container.querySelectorAll('.remove-from-wishlist').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.id);
                wishlist.removeItem(productId);
                renderWishlistItems();
                updateWishlistStats();
            });
        });
    }
}

// Setup wishlist action buttons
function setupWishlistActions() {
    const clearBtn = document.getElementById('clear-wishlist-btn');
    const addAllBtn = document.getElementById('add-all-to-cart-btn');
    const setAlertBtn = document.getElementById('set-alert-btn');
    
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear your wishlist?')) {
                wishlist.items = [];
                wishlist.saveWishlist();
                renderWishlistItems();
                updateWishlistStats();
                showNotification('Wishlist cleared', 'info');
            }
        });
    }
    
    if (addAllBtn) {
        addAllBtn.addEventListener('click', () => {
            let addedCount = 0;
            wishlist.items.forEach(item => {
                if (item.inStock) {
                    const product = products.find(p => p.id === item.id);
                    if (product) {
                        cart.addItem(product);
                        addedCount++;
                    }
                }
            });
            showNotification(`${addedCount} items added to cart!`, 'success');
        });
    }
    
    if (setAlertBtn) {
        setAlertBtn.addEventListener('click', () => {
            showNotification('Price drop alerts enabled! (Demo)', 'success');
        });
    }
}

// Update wishlist statistics
function updateWishlistStats() {
    const totalItems = document.getElementById('total-items');
    const totalValue = document.getElementById('total-value');
    const avgPrice = document.getElementById('avg-price');
    
    if (totalItems) {
        totalItems.textContent = wishlist.items.length;
    }
    
    if (totalValue) {
        const total = wishlist.items.reduce((sum, item) => sum + item.price, 0);
        totalValue.textContent = `₹${total.toFixed(2)}`;
    }
    
    if (avgPrice) {
        const avg = wishlist.items.length > 0 
            ? wishlist.items.reduce((sum, item) => sum + item.price, 0) / wishlist.items.length
            : 0;
        avgPrice.textContent = `₹${avg.toFixed(2)}`;
    }
}

// Render recommendations based on wishlist
function renderRecommendations() {
    const container = document.getElementById('recommendation-grid');
    if (!container) return;
    
    // Get categories from wishlist items
    const wishlistCategories = [...new Set(wishlist.items.map(item => item.category))];
    
    // Find products in same categories not in wishlist
    let recommendations = products
        .filter(p => {
            const inCategory = wishlistCategories.length === 0 || wishlistCategories.includes(p.category);
            const notInWishlist = !wishlist.items.find(item => item.id === p.id);
            return inCategory && notInWishlist;
        })
        .slice(0, 4);
    
    // If no recommendations, show random products
    if (recommendations.length === 0) {
        recommendations = products.slice(0, 4);
    }
    
    container.innerHTML = recommendations.map(product => `
        <div class="recommendation-item">
            <a href="product.html?id=${product.id}" class="recommendation-link">
                <img src="${product.image}" alt="${product.name}">
                <div class="recommendation-info">
                    <h4>${product.name}</h4>
                    <p class="recommendation-price">₹${product.price.toFixed(2)}</p>
                </div>
            </a>
        </div>
    `).join('');
}

// Show notification helper
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}
