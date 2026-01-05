// Authentication Management
class AuthManager {
    constructor() {
        this.currentUser = this.loadUser();
        this.init();
    }

    init() {
        this.setupFormSwitching();
        this.setupPasswordToggle();
        this.setupFormValidation();
        this.setupPasswordRequirements();
        this.setupSocialAuth();
        this.initAuthState();
    }

    // Load user from localStorage
    loadUser() {
        const userData = localStorage.getItem('wishlink-user');
        return userData ? JSON.parse(userData) : null;
    }

    // Save user to localStorage
    saveUser(userData) {
        localStorage.setItem('wishlink-user', JSON.stringify(userData));
        this.currentUser = userData;
    }

    // Initialize authentication state
    initAuthState() {
        if (this.currentUser) {
            this.updateUIForLoggedInUser();
        }
    }

    // Setup form switching between sign in, sign up, and forgot password
    setupFormSwitching() {
        const showSignup = document.getElementById('show-signup');
        const showSignin = document.getElementById('show-signin');
        const forgotPasswordLink = document.getElementById('forgot-password-link');
        const backToSignin = document.getElementById('back-to-signin');

        if (showSignup) {
            showSignup.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchForm('signup');
            });
        }

        if (showSignin) {
            showSignin.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchForm('signin');
            });
        }

        if (forgotPasswordLink) {
            forgotPasswordLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchForm('forgot-password');
            });
        }

        if (backToSignin) {
            backToSignin.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchForm('signin');
            });
        }
    }

    // Switch between authentication forms
    switchForm(formType) {
        const signinForm = document.getElementById('signin-form');
        const signupForm = document.getElementById('signup-form');
        const forgotPasswordForm = document.getElementById('forgot-password-form');

        // Hide all forms
        if (signinForm) signinForm.style.display = 'none';
        if (signupForm) signupForm.style.display = 'none';
        if (forgotPasswordForm) forgotPasswordForm.style.display = 'none';

        // Show selected form with animation
        switch (formType) {
            case 'signin':
                if (signinForm) signinForm.style.display = 'flex';
                break;
            case 'signup':
                if (signupForm) signupForm.style.display = 'flex';
                break;
            case 'forgot-password':
                if (forgotPasswordForm) forgotPasswordForm.style.display = 'flex';
                break;
        }

        // Clear any previous error messages
        this.clearAllErrors();
    }

    // Setup password visibility toggle
    setupPasswordToggle() {
        const toggleButtons = document.querySelectorAll('.toggle-password');
        
        toggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.getAttribute('data-target');
                const input = document.getElementById(targetId);
                const eyeIcon = button.querySelector('.eye-icon');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    eyeIcon.textContent = '👁️‍🗨️';
                } else {
                    input.type = 'password';
                    eyeIcon.textContent = '👁️';
                }
            });
        });
    }

    // Setup form validation and submission
    setupFormValidation() {
        // Sign In Form
        const signinForm = document.getElementById('signin-form-element');
        if (signinForm) {
            signinForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSignIn();
            });
        }

        // Sign Up Form
        const signupForm = document.getElementById('signup-form-element');
        if (signupForm) {
            signupForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSignUp();
            });
        }

        // Forgot Password Form
        const forgotPasswordForm = document.getElementById('forgot-password-form-element');
        if (forgotPasswordForm) {
            forgotPasswordForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleForgotPassword();
            });
        }
    }

    // Setup password requirements validation
    setupPasswordRequirements() {
        const passwordInput = document.getElementById('signup-password');
        if (passwordInput) {
            passwordInput.addEventListener('input', () => {
                this.validatePasswordRequirements(passwordInput.value);
            });
        }
    }

    // Validate password requirements in real-time
    validatePasswordRequirements(password) {
        const requirements = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /[0-9]/.test(password)
        };

        // Update UI for each requirement
        Object.keys(requirements).forEach(req => {
            const element = document.getElementById(`req-${req}`);
            if (element) {
                if (requirements[req]) {
                    element.style.color = '#10b981';
                    element.style.textDecoration = 'line-through';
                } else {
                    element.style.color = '#6b7280';
                    element.style.textDecoration = 'none';
                }
            }
        });

        return Object.values(requirements).every(req => req);
    }

    // Handle sign in
    handleSignIn() {
        const email = document.getElementById('signin-email').value;
        const password = document.getElementById('signin-password').value;
        const rememberMe = document.getElementById('remember-me').checked;

        // Clear previous errors
        this.clearAllErrors();

        // Validate form
        let isValid = true;
        
        if (!this.validateEmail(email)) {
            this.showError('signin-email-error', 'Please enter a valid email address');
            isValid = false;
        }

        if (password.length < 6) {
            this.showError('signin-password-error', 'Password must be at least 6 characters');
            isValid = false;
        }

        if (!isValid) return;

        // Check if user exists (demo logic)
        const users = this.getUsers();
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // Sign in successful
            const userData = {
                id: user.id,
                name: user.name,
                email: user.email,
                isLoggedIn: true,
                rememberMe: rememberMe
            };

            this.saveUser(userData);
            this.showNotification('Sign in successful! Welcome back!');
            
            // Redirect to home page or profile
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        } else {
            this.showError('signin-password-error', 'Invalid email or password');
        }
    }

    // Handle sign up
    handleSignUp() {
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;
        const agreeTerms = document.getElementById('agree-terms').checked;

        // Clear previous errors
        this.clearAllErrors();

        // Validate form
        let isValid = true;

        if (name.trim().length < 2) {
            this.showError('signup-name-error', 'Name must be at least 2 characters');
            isValid = false;
        }

        if (!this.validateEmail(email)) {
            this.showError('signup-email-error', 'Please enter a valid email address');
            isValid = false;
        }

        if (!this.validatePasswordRequirements(password)) {
            this.showError('signup-password-error', 'Please meet all password requirements');
            isValid = false;
        }

        if (password !== confirmPassword) {
            this.showError('signup-confirm-password-error', 'Passwords do not match');
            isValid = false;
        }

        if (!agreeTerms) {
            this.showNotification('Please agree to the terms and conditions');
            isValid = false;
        }

        if (!isValid) return;

        // Check if user already exists
        const users = this.getUsers();
        if (users.find(u => u.email === email)) {
            this.showError('signup-email-error', 'An account with this email already exists');
            return;
        }

        // Create new user
        const newUser = {
            id: Date.now().toString(),
            name: name,
            email: email,
            password: password, // In production, this should be hashed
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        localStorage.setItem('wishlink-users', JSON.stringify(users));

        // Sign in the new user
        const userData = {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            isLoggedIn: true
        };

        this.saveUser(userData);
        this.showNotification('Account created successfully! Welcome to WishLink!');
        
        // Redirect to home page
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }

    // Handle forgot password
    handleForgotPassword() {
        const email = document.getElementById('reset-email').value;

        // Clear previous errors
        this.clearAllErrors();

        // Validate email
        if (!this.validateEmail(email)) {
            this.showError('reset-email-error', 'Please enter a valid email address');
            return;
        }

        // Check if user exists
        const users = this.getUsers();
        const user = users.find(u => u.email === email);

        if (user) {
            // In a real application, send reset email
            // For demo, show success message
            this.showNotification(`Password reset link sent to ${email} (Demo)`);
            
            // Redirect back to sign in after 2 seconds
            setTimeout(() => {
                this.switchForm('signin');
            }, 2000);
        } else {
            this.showError('reset-email-error', 'No account found with this email address');
        }
    }

    // Setup social authentication (demo)
    setupSocialAuth() {
        const socialButtons = document.querySelectorAll('.btn-social');
        
        socialButtons.forEach(button => {
            button.addEventListener('click', () => {
                const provider = button.classList.contains('google-btn') ? 'Google' : 'Facebook';
                this.showNotification(`${provider} authentication (Demo)`);
            });
        });
    }

    // Get all users from localStorage
    getUsers() {
        const users = localStorage.getItem('wishlink-users');
        return users ? JSON.parse(users) : this.getDefaultUsers();
    }

    // Get default demo users
    getDefaultUsers() {
        return [
            {
                id: '1',
                name: 'Demo User',
                email: 'demo@wishlink.com',
                password: 'demo123',
                createdAt: new Date().toISOString()
            }
        ];
    }

    // Email validation
    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Show error message
    showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }

    // Clear all error messages
    clearAllErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.textContent = '';
            element.style.display = 'none';
        });
    }

    // Show notification
    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background-color: #10b981;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
            max-width: 300px;
        `;

        document.body.appendChild(notification);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Sign out user
    signOut() {
        localStorage.removeItem('wishlink-user');
        this.currentUser = null;
        this.updateUIForLoggedOutUser();
        this.showNotification('You have been signed out');
        
        // Redirect to auth page
        setTimeout(() => {
            window.location.href = 'auth.html';
        }, 1000);
    }

    // Update UI for logged in user
    updateUIForLoggedInUser() {
        // This would update navbar to show user info instead of sign in
        // Implementation depends on the specific UI requirements
    }

    // Update UI for logged out user
    updateUIForLoggedOutUser() {
        // This would update navbar to show sign in link
        // Implementation depends on the specific UI requirements
    }

    // Check if user is logged in
    isLoggedIn() {
        return this.currentUser && this.currentUser.isLoggedIn;
    }

    // Get current user
    getCurrentUser() {
        return this.currentUser;
    }
}

// Initialize Auth Manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.authManager = new AuthManager();
});

// Make auth manager globally available
window.AuthManager = AuthManager;
