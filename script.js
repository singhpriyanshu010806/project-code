let cart = [];
let cartCount = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    cartCount++;
    document.getElementById('cart-count').textContent = `Cart (${cartCount})`;
    alert(`${productName} has been added to your cart!`);
    updateCartModal();
}

function updateCartModal() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}`;
        cartItems.appendChild(li);
    });
}

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'flex' ? 'none' : 'flex';
}

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.product button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productName = product.querySelector('h3').textContent;
            const price = product.querySelector('p').textContent;
            addToCart(productName, price);
        });
    });

    const closeCartButton = document.querySelector('.cart-content button');
    closeCartButton.addEventListener('click', toggleCart);

    const cartLink = document.querySelector('nav ul li:last-child a');
    cartLink.addEventListener('click', (e) => {
        e.preventDefault();
        toggleCart();
    });
});