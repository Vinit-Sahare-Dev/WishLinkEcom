// Checkout Page Management
document.addEventListener('DOMContentLoaded', () => {
    initCheckoutPage();
});

let currentStep = 1;
const totalSteps = 4;

function initCheckoutPage() {
    loadCartSummary();
    setupCheckoutForm();
    setupPaymentMethods();
    setupDeliveryOptions();
    setupCouponCode();
    updateProgressSteps();
}

// Load cart summary in sidebar
function loadCartSummary() {
    const sidebarItems = document.getElementById('sidebar-items');
    const summaryItems = document.getElementById('summary-items');
    const sidebarTotal = document.getElementById('sidebar-total');
    
    if (!cart.items || cart.items.length === 0) {
        // Redirect to cart if empty
        alert('Your cart is empty. Please add items before checkout.');
        window.location.href = 'cart.html';
        return;
    }
    
    // Render sidebar items
    if (sidebarItems) {
        sidebarItems.innerHTML = cart.items.map(item => `
            <div class="sidebar-item">
                <div class="sidebar-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="sidebar-item-info">
                    <h4>${item.name}</h4>
                    <p>Qty: ${item.quantity} × $${item.price.toFixed(2)}</p>
                </div>
            </div>
        `).join('');
    }
    
    // Render summary items
    if (summaryItems) {
        summaryItems.innerHTML = cart.items.map(item => `
            <div class="summary-item-row">
                <span>${item.name} × ${item.quantity}</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `).join('');
    }
    
    updateOrderTotals();
}

// Update order totals
function updateOrderTotals() {
    const subtotal = cart.getTotal();
    const deliveryOption = document.querySelector('input[name="delivery"]:checked');
    let deliveryFee = 0;
    
    if (deliveryOption) {
        switch (deliveryOption.value) {
            case 'standard':
                deliveryFee = subtotal > 50 ? 0 : 5.99;
                break;
            case 'express':
                deliveryFee = 9.99;
                break;
            case 'same-day':
                deliveryFee = 14.99;
                break;
        }
    }
    
    const tax = subtotal * 0.08;
    const discount = getAppliedDiscount();
    const total = subtotal + deliveryFee + tax - discount;
    
    // Update main summary
    const summarySubtotal = document.getElementById('summary-subtotal');
    const summaryDelivery = document.getElementById('summary-delivery');
    const summaryTax = document.getElementById('summary-tax');
    const summaryDiscount = document.getElementById('summary-discount');
    const discountRow = document.getElementById('discount-row');
    const summaryTotal = document.getElementById('summary-total');
    
    if (summarySubtotal) summarySubtotal.textContent = `₹${subtotal.toFixed(2)}`;
    if (summaryDelivery) summaryDelivery.textContent = deliveryFee === 0 ? 'Free' : `₹${deliveryFee.toFixed(2)}`;
    if (summaryTax) summaryTax.textContent = `₹${tax.toFixed(2)}`;
    if (summaryDiscount && discountRow) {
        if (discount > 0) {
            discountRow.style.display = 'flex';
            summaryDiscount.textContent = `-₹${discount.toFixed(2)}`;
        } else {
            discountRow.style.display = 'none';
        }
    }
    if (summaryTotal) summaryTotal.textContent = `₹${total.toFixed(2)}`;
    
    // Update sidebar total
    const sidebarTotal = document.getElementById('sidebar-total');
    if (sidebarTotal) sidebarTotal.textContent = `₹${total.toFixed(2)}`;
}

// Get applied discount
let appliedCoupon = null;
function getAppliedDiscount() {
    if (!appliedCoupon) return 0;
    
    const subtotal = cart.getTotal();
    switch (appliedCoupon) {
        case 'SAVE10':
            return subtotal * 0.10;
        case 'SAVE20':
            return subtotal * 0.20;
        case 'FIRST50':
            return 50;
        default:
            return 0;
    }
}

// Setup coupon code
function setupCouponCode() {
    const applyBtn = document.getElementById('apply-coupon-btn');
    const couponInput = document.getElementById('coupon-code');
    
    if (applyBtn && couponInput) {
        applyBtn.addEventListener('click', () => {
            const code = couponInput.value.trim().toUpperCase();
            
            const validCoupons = ['SAVE10', 'SAVE20', 'FIRST50'];
            
            if (validCoupons.includes(code)) {
                appliedCoupon = code;
                updateOrderTotals();
                showNotification('Coupon applied successfully!', 'success');
                applyBtn.textContent = 'Applied';
                applyBtn.disabled = true;
                couponInput.disabled = true;
            } else {
                showNotification('Invalid coupon code', 'error');
            }
        });
    }
}

// Setup checkout form
function setupCheckoutForm() {
    const form = document.getElementById('checkout-form');
    const guestOption = document.getElementById('guest-checkout');
    const loginOption = document.getElementById('login-checkout');
    
    // Handle auth option selection
    document.querySelectorAll('input[name="checkout-type"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            guestOption.classList.toggle('active', e.target.value === 'guest');
            loginOption.classList.toggle('active', e.target.value === 'login');
            
            const loginForm = loginOption.querySelector('.login-form');
            if (loginForm) {
                loginForm.style.display = e.target.value === 'login' ? 'block' : 'none';
            }
        });
    });
    
    // Handle form submission
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            handlePlaceOrder();
        });
    }
}

// Setup payment methods
function setupPaymentMethods() {
    const paymentOptions = document.querySelectorAll('input[name="payment"]');
    
    paymentOptions.forEach(option => {
        option.addEventListener('change', (e) => {
            // Hide all payment details
            document.querySelectorAll('.payment-details').forEach(details => {
                details.style.display = 'none';
            });
            
            // Show selected payment details
            const detailsId = `${e.target.value}-details`;
            const details = document.getElementById(detailsId);
            if (details) {
                details.style.display = 'block';
            }
        });
    });
}

// Setup delivery options
function setupDeliveryOptions() {
    const deliveryOptions = document.querySelectorAll('input[name="delivery"]');
    
    deliveryOptions.forEach(option => {
        option.addEventListener('change', () => {
            updateOrderTotals();
            updateEstimatedDelivery(option.value);
        });
    });
}

// Update estimated delivery date
function updateEstimatedDelivery(method) {
    const deliveryDate = document.getElementById('delivery-date');
    if (!deliveryDate) return;
    
    const today = new Date();
    let startDays, endDays;
    
    switch (method) {
        case 'standard':
            startDays = 5;
            endDays = 7;
            break;
        case 'express':
            startDays = 2;
            endDays = 3;
            break;
        case 'same-day':
            startDays = 0;
            endDays = 0;
            break;
        default:
            startDays = 5;
            endDays = 7;
    }
    
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + startDays);
    
    const endDate = new Date(today);
    endDate.setDate(today.getDate() + endDays);
    
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    
    if (startDays === endDays) {
        deliveryDate.textContent = startDate.toLocaleDateString('en-US', options);
    } else {
        deliveryDate.textContent = `${startDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}-${endDate.getDate()}, ${endDate.getFullYear()}`;
    }
}

// Handle place order
function handlePlaceOrder() {
    // Validate form
    if (!validateCheckoutForm()) {
        return;
    }
    
    // Create order
    const order = createOrder();
    
    // Save order
    saveOrder(order);
    
    // Clear cart
    cart.clearCart();
    
    // Show success message
    showOrderSuccess(order);
}

// Validate checkout form
function validateCheckoutForm() {
    const requiredFields = [
        'first-name', 'last-name', 'address-line1', 
        'city', 'state', 'zip-code', 'phone'
    ];
    
    let isValid = true;
    
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field && !field.value.trim()) {
            field.style.borderColor = '#ef4444';
            isValid = false;
        } else if (field) {
            field.style.borderColor = '#e5e7eb';
        }
    });
    
    if (!isValid) {
        showNotification('Please fill in all required fields', 'error');
    }
    
    return isValid;
}

// Create order object
function createOrder() {
    const deliveryOption = document.querySelector('input[name="delivery"]:checked');
    const paymentOption = document.querySelector('input[name="payment"]:checked');
    
    return {
        id: `ORD-2026-${Date.now().toString().slice(-6)}`,
        date: new Date().toISOString().split('T')[0],
        status: 'processing',
        total: parseFloat(document.getElementById('summary-total')?.textContent.replace('₹', '') || '0'),
        items: cart.items.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image
        })),
        shipping: {
            address: `${document.getElementById('address-line1')?.value || ''}, ${document.getElementById('city')?.value || ''}, ${document.getElementById('state')?.value || ''} ${document.getElementById('zip-code')?.value || ''}`,
            method: deliveryOption?.nextElementSibling?.querySelector('h4')?.textContent || 'Standard Delivery',
            tracking: null
        },
        payment: paymentOption?.value || 'card'
    };
}

// Save order to localStorage
function saveOrder(order) {
    const orders = JSON.parse(localStorage.getItem('wishlink-orders')) || [];
    orders.unshift(order);
    localStorage.setItem('wishlink-orders', JSON.stringify(orders));
}

// Show order success with celebration
function showOrderSuccess(order) {
    // Create celebration overlay
    const overlay = document.createElement('div');
    overlay.className = 'order-success-overlay';
    
    // Add confetti
    for (let i = 0; i < 10; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        overlay.appendChild(confetti);
    }
    
    // Create success modal
    const modal = document.createElement('div');
    modal.className = 'order-success-modal';
    modal.innerHTML = `
        <div class="success-icon"></div>
        <h2 class="success-title">Order Placed Successfully!</h2>
        <p class="success-message">Thank you for your purchase! Your order has been confirmed and will be delivered soon.</p>
        
        <div class="order-details">
            <h4>Order Details</h4>
            <p><strong>Order ID:</strong> ${order.id}</p>
            <p><strong>Total Amount:</strong> ₹${order.total.toFixed(2)}</p>
            <p><strong>Payment Method:</strong> ${order.payment === 'card' ? 'Credit/Debit Card' : 'Cash on Delivery'}</p>
            <p><strong>Delivery Method:</strong> ${order.shipping.method}</p>
            <p><strong>Delivery Address:</strong> ${order.shipping.address}</p>
        </div>
        
        <div class="success-actions">
            <a href="orders.html" class="success-btn success-btn-primary">View My Orders</a>
            <a href="categories.html" class="success-btn success-btn-secondary">Continue Shopping</a>
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Play success sound (optional - you can add audio if needed)
    playSuccessSound();
    
    // Auto-remove after 10 seconds or allow manual close
    const autoRemove = setTimeout(() => {
        removeOrderSuccess(overlay);
    }, 10000);
    
    // Manual close on overlay click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            clearTimeout(autoRemove);
            removeOrderSuccess(overlay);
        }
    });
}

// Remove order success overlay
function removeOrderSuccess(overlay) {
    overlay.style.animation = 'fadeOut 0.3s ease-out';
    setTimeout(() => {
        if (document.body.contains(overlay)) {
            document.body.removeChild(overlay);
        }
    }, 300);
}

// Play success sound (optional)
function playSuccessSound() {
    // You can add audio feedback here if needed
    // For now, we'll use a visual feedback
    console.log('🎉 Order placed successfully!');
}

// Update progress steps
function updateProgressSteps() {
    const steps = document.querySelectorAll('.step');
    
    steps.forEach((step, index) => {
        if (index < currentStep) {
            step.classList.add('completed');
            step.classList.remove('active');
        } else if (index === currentStep - 1) {
            step.classList.add('active');
            step.classList.remove('completed');
        } else {
            step.classList.remove('active', 'completed');
        }
    });
}

// Show notification
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
