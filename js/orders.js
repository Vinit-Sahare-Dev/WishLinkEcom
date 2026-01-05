// Orders Page Management
document.addEventListener('DOMContentLoaded', () => {
    initOrdersPage();
});

// Sample orders data (would come from backend in production)
const sampleOrders = [
    {
        id: 'ORD-2026-001',
        date: '2026-01-03',
        status: 'delivered',
        total: 89.97,
        items: [
            { id: 1, name: 'Classic White Shirt', price: 29.99, quantity: 1, image: 'https://picsum.photos/seed/shirt1/100/100.jpg' },
            { id: 2, name: 'Blue Denim Jeans', price: 49.99, quantity: 1, image: 'https://picsum.photos/seed/jeans1/100/100.jpg' }
        ],
        shipping: {
            address: '123 Main St, New York, NY 10001',
            method: 'Standard Delivery',
            tracking: 'TRK123456789'
        }
    },
    {
        id: 'ORD-2026-002',
        date: '2026-01-02',
        status: 'shipped',
        total: 119.97,
        items: [
            { id: 7, name: 'Summer Dress', price: 39.99, quantity: 1, image: 'https://picsum.photos/seed/dress1/100/100.jpg' },
            { id: 8, name: 'Handbag', price: 59.99, quantity: 1, image: 'https://picsum.photos/seed/bag1/100/100.jpg' }
        ],
        shipping: {
            address: '456 Oak Ave, Los Angeles, CA 90001',
            method: 'Express Delivery',
            tracking: 'TRK987654321'
        }
    },
    {
        id: 'ORD-2026-003',
        date: '2026-01-01',
        status: 'processing',
        total: 54.98,
        items: [
            { id: 13, name: 'Hoodie', price: 44.99, quantity: 1, image: 'https://picsum.photos/seed/hoodie1/100/100.jpg' }
        ],
        shipping: {
            address: '789 Pine Blvd, Chicago, IL 60601',
            method: 'Standard Delivery',
            tracking: null
        }
    }
];

function initOrdersPage() {
    loadOrders();
    setupOrderFilters();
    setupOrderSearch();
    setupModalHandlers();
}

// Load and render orders
function loadOrders(filter = 'all') {
    const container = document.getElementById('orders-list');
    const emptyOrders = document.getElementById('empty-orders');
    
    if (!container) return;
    
    // Get orders from localStorage or use sample data
    let orders = JSON.parse(localStorage.getItem('wishlink-orders')) || sampleOrders;
    
    // Apply filter
    if (filter !== 'all') {
        orders = orders.filter(order => order.status === filter);
    }
    
    if (orders.length === 0) {
        container.style.display = 'none';
        emptyOrders.style.display = 'block';
    } else {
        container.style.display = 'block';
        emptyOrders.style.display = 'none';
        
        container.innerHTML = orders.map(order => `
            <div class="order-card" data-order-id="${order.id}">
                <div class="order-card-header">
                    <div class="order-info">
                        <h3>Order ${order.id}</h3>
                        <p>Placed on ${formatDate(order.date)}</p>
                    </div>
                    <span class="order-status-badge ${order.status}">${capitalizeFirst(order.status)}</span>
                </div>
                <div class="order-card-body">
                    <div class="order-items">
                        ${order.items.map(item => `
                            <div class="order-item-mini">
                                <img src="${item.image}" alt="${item.name}" title="${item.name}">
                            </div>
                        `).join('')}
                        <div class="order-items-count">
                            ${order.items.length} item${order.items.length > 1 ? 's' : ''}
                        </div>
                    </div>
                </div>
                <div class="order-card-footer">
                    <div class="order-total">
                        Total: ₹${order.total.toFixed(2)}
                    </div>
                    <div class="order-actions">
                        <button class="btn btn-outline view-order-btn" data-order-id="${order.id}">
                            View Details
                        </button>
                        ${order.status === 'shipped' ? `
                            <button class="btn btn-primary track-order-btn" data-order-id="${order.id}">
                                Track Order
                            </button>
                        ` : ''}
                        ${order.status === 'delivered' ? `
                            <button class="btn btn-primary reorder-btn" data-order-id="${order.id}">
                                Reorder
                            </button>
                        ` : ''}
                    </div>
                </div>
            </div>
        `).join('');
        
        // Add event listeners to buttons
        container.querySelectorAll('.view-order-btn').forEach(btn => {
            btn.addEventListener('click', () => showOrderDetails(btn.dataset.orderId));
        });
        
        container.querySelectorAll('.track-order-btn').forEach(btn => {
            btn.addEventListener('click', () => showTrackingInfo(btn.dataset.orderId));
        });
        
        container.querySelectorAll('.reorder-btn').forEach(btn => {
            btn.addEventListener('click', () => handleReorder(btn.dataset.orderId));
        });
    }
}

// Setup filter tabs
function setupOrderFilters() {
    const tabs = document.querySelectorAll('.filter-tabs .tab-btn');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            loadOrders(tab.dataset.filter);
        });
    });
}

// Setup order search
function setupOrderSearch() {
    const searchInput = document.getElementById('order-search');
    const searchBtn = document.getElementById('search-order-btn');
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', () => searchOrders(searchInput.value));
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchOrders(searchInput.value);
            }
        });
    }
}

function searchOrders(query) {
    const orders = JSON.parse(localStorage.getItem('wishlink-orders')) || sampleOrders;
    const searchQuery = query.toLowerCase().trim();
    
    if (!searchQuery) {
        loadOrders('all');
        return;
    }
    
    const filtered = orders.filter(order => {
        // Search by order ID
        if (order.id.toLowerCase().includes(searchQuery)) return true;
        
        // Search by item name
        return order.items.some(item => item.name.toLowerCase().includes(searchQuery));
    });
    
    renderFilteredOrders(filtered);
}

function renderFilteredOrders(orders) {
    const container = document.getElementById('orders-list');
    const emptyOrders = document.getElementById('empty-orders');
    
    if (orders.length === 0) {
        container.innerHTML = `
            <div class="no-results-message">
                <p>No orders found matching your search.</p>
                <button class="btn btn-outline" onclick="loadOrders('all')">Show All Orders</button>
            </div>
        `;
        emptyOrders.style.display = 'none';
    } else {
        loadOrders('all');
    }
}

// Show order details modal
function showOrderDetails(orderId) {
    const orders = JSON.parse(localStorage.getItem('wishlink-orders')) || sampleOrders;
    const order = orders.find(o => o.id === orderId);
    
    if (!order) return;
    
    const modal = document.getElementById('order-modal');
    const content = document.getElementById('order-detail-content');
    
    content.innerHTML = `
        <div class="order-details">
            <div class="order-details-header">
                <div>
                    <h3>Order ${order.id}</h3>
                    <p>Placed on ${formatDate(order.date)}</p>
                </div>
                <span class="order-status-badge ${order.status}">${capitalizeFirst(order.status)}</span>
            </div>
            
            <div class="order-items-list">
                <h4>Items</h4>
                ${order.items.map(item => `
                    <div class="order-item-detail">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="item-info">
                            <h5>${item.name}</h5>
                            <p>Qty: ${item.quantity}</p>
                        </div>
                        <div class="item-price">₹${item.price.toFixed(2)}</div>
                    </div>
                `).join('')}
            </div>
            
            <div class="order-shipping-info">
                <h4>Shipping Information</h4>
                <p><strong>Address:</strong> ${order.shipping.address}</p>
                <p><strong>Method:</strong> ${order.shipping.method}</p>
                ${order.shipping.tracking ? `<p><strong>Tracking:</strong> ${order.shipping.tracking}</p>` : ''}
            </div>
            
            <div class="order-summary-section">
                <div class="summary-row">
                    <span>Subtotal:</span>
                    <span>$${(order.total * 0.92).toFixed(2)}</span>
                </div>
                <div class="summary-row">
                    <span>Tax:</span>
                    <span>$${(order.total * 0.08).toFixed(2)}</span>
                </div>
                <div class="summary-row total">
                    <span>Total:</span>
                    <span>$${order.total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('show');
}

// Show tracking info modal
function showTrackingInfo(orderId) {
    const orders = JSON.parse(localStorage.getItem('wishlink-orders')) || sampleOrders;
    const order = orders.find(o => o.id === orderId);
    
    if (!order) return;
    
    const modal = document.getElementById('track-modal');
    const content = document.getElementById('track-content');
    
    content.innerHTML = `
        <div class="tracking-details">
            <h3>Tracking: ${order.shipping.tracking || 'N/A'}</h3>
            
            <div class="tracking-timeline">
                <div class="timeline-item completed">
                    <div class="timeline-icon">✓</div>
                    <div class="timeline-content">
                        <h4>Order Placed</h4>
                        <p>${formatDate(order.date)}</p>
                    </div>
                </div>
                <div class="timeline-item completed">
                    <div class="timeline-icon">✓</div>
                    <div class="timeline-content">
                        <h4>Order Processed</h4>
                        <p>Your order has been processed</p>
                    </div>
                </div>
                <div class="timeline-item ${order.status === 'shipped' || order.status === 'delivered' ? 'completed' : ''}">
                    <div class="timeline-icon">${order.status === 'shipped' || order.status === 'delivered' ? '✓' : '○'}</div>
                    <div class="timeline-content">
                        <h4>Shipped</h4>
                        <p>Your package is on the way</p>
                    </div>
                </div>
                <div class="timeline-item ${order.status === 'delivered' ? 'completed' : ''}">
                    <div class="timeline-icon">${order.status === 'delivered' ? '✓' : '○'}</div>
                    <div class="timeline-content">
                        <h4>Delivered</h4>
                        <p>Package delivered to your address</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('show');
}

// Handle reorder
function handleReorder(orderId) {
    const orders = JSON.parse(localStorage.getItem('wishlink-orders')) || sampleOrders;
    const order = orders.find(o => o.id === orderId);
    
    if (!order) return;
    
    order.items.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            cart.addItem(product, item.quantity);
        }
    });
    
    cart.showNotification('Items added to cart!');
    setTimeout(() => {
        window.location.href = 'cart.html';
    }, 1500);
}

// Setup modal close handlers
function setupModalHandlers() {
    const orderModal = document.getElementById('order-modal');
    const trackModal = document.getElementById('track-modal');
    
    document.getElementById('modal-close')?.addEventListener('click', () => {
        orderModal.classList.remove('show');
    });
    
    document.getElementById('track-modal-close')?.addEventListener('click', () => {
        trackModal.classList.remove('show');
    });
    
    // Close on backdrop click
    [orderModal, trackModal].forEach(modal => {
        modal?.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    });
}

// Helper functions
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
