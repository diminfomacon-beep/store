// checkout.js
// Checkout page logic for DIM Bright Ideas

(function () {
  "use strict";

  function formatCurrency(value) {
    return "$" + value.toFixed(2);
  }

  function getSelectedDeliveryMethod() {
    var shippingRadio = document.querySelector("#dim-delivery-shipping");
    var pickupRadio = document.querySelector("#dim-delivery-pickup");

    if (shippingRadio && shippingRadio.checked) return "shipping";
    if (pickupRadio && pickupRadio.checked) return "pickup";
    return "shipping"; // default
  }

  function toggleDeliverySections() {
    var method = getSelectedDeliveryMethod();
    var shippingSection = document.querySelector("#dim-shipping-section");
    var pickupSection = document.querySelector("#dim-pickup-section");

    if (shippingSection && pickupSection) {
      if (method === "shipping") {
        shippingSection.style.display = "block";
        pickupSection.style.display = "none";
      } else {
        shippingSection.style.display = "none";
        pickupSection.style.display = "block";
      }
    }

    updateSummaryTotals();
  }

  function updateSummaryTotals() {
    if (!window.DIM_STORE) return;

    var method = getSelectedDeliveryMethod();
    var totals = window.DIM_STORE.calculateTotals(method);

    var subtotalEl = document.querySelector("#dim-checkout-subtotal");
    var shippingEl = document.querySelector("#dim-checkout-shipping");
    var taxEl = document.querySelector("#dim-checkout-tax");
    var totalEl = document.querySelector("#dim-checkout-total");

    if (subtotalEl) subtotalEl.textContent = formatCurrency(totals.subtotal);
    if (shippingEl) shippingEl.textContent = formatCurrency(totals.shipping);
    if (taxEl) taxEl.textContent = formatCurrency(totals.tax);
    if (totalEl) totalEl.textContent = formatCurrency(totals.total);
  }

  function renderOrderSummary() {
    if (!window.DIM_STORE) return;

    var cart = window.DIM_STORE.getCart();
    var tbody = document.querySelector("#dim-checkout-items-body");
    var emptyMsg = document.querySelector("#dim-checkout-empty-message");
    var summaryContainer = document.querySelector("#dim-checkout-summary-container");

    if (!tbody) return;

    tbody.innerHTML = "";

    if (!cart || cart.length === 0) {
      if (emptyMsg) emptyMsg.style.display = "block";
      if (summaryContainer) summaryContainer.style.display = "none";
      return;
    } else {
      if (emptyMsg) emptyMsg.style.display = "none";
      if (summaryContainer) summaryContainer.style.display = "block";
    }

    cart.forEach(function (item) {
      var tr = document.createElement("tr");

      var nameTd = document.createElement("td");
      nameTd.textContent = item.name;

      var priceTd = document.createElement("td");
      priceTd.textContent = formatCurrency(item.price);

      var qtyTd = document.createElement("td");
      qtyTd.textContent = item.quantity || 1;

      var totalTd = document.createElement("td");
      var lineTotal = (item.quantity || 1) * item.price;
      totalTd.textContent = formatCurrency(lineTotal);

      tr.appendChild(nameTd);
      tr.appendChild(priceTd);
      tr.appendChild(qtyTd);
      tr.appendChild(totalTd);

      tbody.appendChild(tr);
    });

    updateSummaryTotals();
  }

  function validateForm() {
    var method = getSelectedDeliveryMethod();
    var termsCheckbox = document.querySelector("#dim-terms-checkbox");

    if (!termsCheckbox || !termsCheckbox.checked) {
      alert("Please read and agree to the Terms and Conditions before continuing.");
      return false;
    }

    if (method === "shipping") {
      var name = document.querySelector("#dim-ship-name");
      var email = document.querySelector("#dim-ship-email");
      var addr1 = document.querySelector("#dim-ship-address1");
      var city = document.querySelector("#dim-ship-city");
      var state = document.querySelector("#dim-ship-state");
      var zip = document.querySelector("#dim-ship-zip");

      if (!name.value.trim()) {
        alert("Please enter your name.");
        return false;
      }
      if (!email.value.trim()) {
        alert("Please enter your email address.");
        return false;
      }
      if (!addr1.value.trim()) {
        alert("Please enter your address (Line 1).");
        return false;
      }
      if (!city.value.trim()) {
        alert("Please enter your city.");
        return false;
      }
      if (!state.value.trim()) {
        alert("Please select your state.");
        return false;
      }
      if (!zip.value.trim()) {
        alert("Please enter your ZIP code.");
        return false;
      }

    } else {
      var pickupName = document.querySelector("#dim-pickup-name");
      var pickupEmail = document.querySelector("#dim-pickup-email");

      if (!pickupName.value.trim()) {
        alert("Please enter your name for local pickup.");
        return false;
      }
      if (!pickupEmail.value.trim()) {
        alert("Please enter your email address for local pickup.");
        return false;
      }
    }

    return true;
  }

  function setupDeliveryListeners() {
    var shippingRadio = document.querySelector("#dim-delivery-shipping");
    var pickupRadio = document.querySelector("#dim-delivery-pickup");

    if (shippingRadio) {
      shippingRadio.addEventListener("change", toggleDeliverySections);
    }
    if (pickupRadio) {
      pickupRadio.addEventListener("change", toggleDeliverySections);
    }
  }

  function setupReturnToCartButton() {
    var backBtn = document.querySelector("#dim-return-to-cart-btn");
    if (backBtn) {
      backBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.top.location.href = "https://www.dimbrightideas.com/cart";
      });
    }
  }

  function setupPayPalButtons() {
    if (typeof paypal === "undefined") {
      console.error("PayPal SDK not loaded.");
      return;
    }
    if (!window.DIM_STORE) {
      console.error("DIM_STORE not available for PayPal integration.");
      return;
    }

    var cart = window.DIM_STORE.getCart();
    if (!cart || cart.length === 0) {
      console.warn("Cart is empty; PayPal button should not allow checkout.");
    }

    paypal.Buttons({
      style: {
        layout: "vertical",
        color: "gold",
        shape: "rect",
        label: "paypal"
      },
      createOrder: function (data, actions) {
        if (!validateForm()) {
          return actions.reject(); // stop if form is invalid
        }

        var method = getSelectedDeliveryMethod();
        var totals = window.DIM_STORE.calculateTotals(method);
        var totalValue = totals.total.toFixed(2);

        return actions.order.create({
          purchase_units: [{
            amount: {
              currency_code: "USD",
              value: totalValue
            },
            description: "Order from DIM Bright Ideas"
          }]
        });
      },
      onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
          alert("Thank you, " + (details.payer.name.given_name || "customer") + "! Your payment was successful.");
          window.DIM_STORE.clearCart();
          window.top.location.href = "https://www.dimbrightideas.com/home";
        });
      },
      onError: function (err) {
        console.error("PayPal error:", err);
        alert("There was an error processing your payment. Please try again or contact us if it continues.");
      }
    }).render("#paypal-button-container");
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!window.DIM_STORE) {
      console.error("DIM_STORE not found on checkout page.");
      return;
    }

    renderOrderSummary();
    setupDeliveryListeners();
    toggleDeliverySections();
    setupReturnToCartButton();
    window.DIM_STORE.updateFloatingCartCount();

    // Initialize PayPal buttons after everything else
    setupPayPalButtons();
  });
})();
