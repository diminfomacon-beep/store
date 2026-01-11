// store.js
// Shared cart logic for DIM Bright Ideas

(function () {
  "use strict";

  var CART_KEY = "dimbright_cart";
  var TAX_RATE = 0.07; // 7%
  var SHIPPING_FLAT = 6.99;

  // ------- Storage helpers -------

  function getCart() {
    try {
      var raw = window.localStorage.getItem(CART_KEY);
      if (!raw) return [];
      var parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed;
    } catch (e) {
      console.error("Error reading cart:", e);
      return [];
    }
  }

  function saveCart(cart) {
    try {
      window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error("Error saving cart:", e);
    }
  }

  function clearCart() {
    try {
      window.localStorage.removeItem(CART_KEY);
    } catch (e) {
      console.error("Error clearing cart:", e);
    }
  }

  // ------- Cart operations -------

  function addToCart(name, price) {
    var cart = getCart();

    // Try to merge same-name items into quantity
    var found = cart.find(function (item) {
      return item.name === name && item.price === price;
    });

    if (found) {
      found.quantity += 1;
    } else {
      cart.push({
        name: name,
        price: price,
        quantity: 1
      });
    }

    saveCart(cart);
    updateFloatingCartCount();
  }

  function getCartCount() {
    var cart = getCart();
    return cart.reduce(function (sum, item) {
      return sum + (item.quantity || 1);
    }, 0);
  }

  function calculateSubtotal() {
    var cart = getCart();
    var subtotal = cart.reduce(function (sum, item) {
      var q = item.quantity || 1;
      return sum + item.price * q;
    }, 0);
    return roundCurrency(subtotal);
  }

  function calculateTotals(deliveryMethod) {
    var subtotal = calculateSubtotal();
    var shipping = 0;

    if (deliveryMethod === "shipping") {
      shipping = SHIPPING_FLAT;
    } else {
      shipping = 0;
    }

    var tax = roundCurrency(subtotal * TAX_RATE);
    var total = roundCurrency(subtotal + shipping + tax);

    return {
      subtotal: subtotal,
      shipping: shipping,
      tax: tax,
      total: total
    };
  }

  function roundCurrency(value) {
    return Math.round((value + Number.EPSILON) * 100) / 100;
  }

  // ------- Floating cart -------

  function updateFloatingCartCount() {
    try {
      var count = getCartCount();
      var badge = document.querySelector(".dim-floating-cart-count");
      if (badge) {
        badge.textContent = count.toString();
      }
    } catch (e) {
      console.error("Error updating floating cart count:", e);
    }
  }

  function setupFloatingCart() {
    var icon = document.querySelector(".dim-floating-cart-icon");
    if (icon) {
      icon.addEventListener("click", function (e) {
        e.preventDefault();
        // Navigate whole site, not just iframe
        window.top.location.href = "https://www.dimbrightideas.com/cart";
      });
    }
    updateFloatingCartCount();
  }

  // ------- Product buttons auto-setup -------

  function setupAddToCartButtons() {
    var buttons = document.querySelectorAll(".dim-add-to-cart-btn");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();

        var name = btn.getAttribute("data-name") || "Unnamed Product";
        var priceStr = btn.getAttribute("data-price") || "0";
        var price = parseFloat(priceStr);

        if (isNaN(price) || price < 0) {
          alert("Invalid product price. Please check the button configuration.");
          return;
        }

        addToCart(name, price);

        // Click effect is mostly CSS, but we add a brief class toggle
        btn.classList.add("dim-btn-clicked");
        setTimeout(function () {
          btn.classList.remove("dim-btn-clicked");
        }, 150);
      });
    });
  }

  // ------- Expose public API -------

  window.DIM_STORE = {
    getCart: getCart,
    saveCart: saveCart,
    clearCart: clearCart,
    addToCart: addToCart,
    getCartCount: getCartCount,
    calculateSubtotal: calculateSubtotal,
    calculateTotals: calculateTotals,
    setupFloatingCart: setupFloatingCart,
    updateFloatingCartCount: updateFloatingCartCount,
    setupAddToCartButtons: setupAddToCartButtons
  };

  // ------- Init when loaded inside Google Sites embed -------

  document.addEventListener("DOMContentLoaded", function () {
    // Set up floating cart and add-to-cart buttons on any page where they exist
    setupFloatingCart();
    setupAddToCartButtons();
  });
})();
