// cart.js
// Cart page rendering for DIM Bright Ideas

(function () {
  "use strict";

  function formatCurrency(value) {
    return "$" + value.toFixed(2);
  }

  function renderCart() {
    if (!window.DIM_STORE) {
      console.error("DIM_STORE is not loaded.");
      return;
    }

    var cart = window.DIM_STORE.getCart();

    var tbody = document.querySelector("#dim-cart-table-body");
    var emptyMsg = document.querySelector("#dim-cart-empty-message");
    var summary = document.querySelector("#dim-cart-summary");

    if (!tbody) return;

    tbody.innerHTML = "";

    if (!cart || cart.length === 0) {
      if (emptyMsg) emptyMsg.style.display = "block";
      if (summary) summary.style.display = "none";
      return;
    } else {
      if (emptyMsg) emptyMsg.style.display = "none";
      if (summary) summary.style.display = "block";
    }

    cart.forEach(function (item, index) {
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

    var subtotal = window.DIM_STORE.calculateSubtotal();
    var subtotalEl = document.querySelector("#dim-cart-subtotal");
    if (subtotalEl) {
      subtotalEl.textContent = formatCurrency(subtotal);
    }
  }

  function setupButtons() {
    var proceedBtn = document.querySelector("#dim-proceed-to-checkout-btn");
    if (proceedBtn) {
      proceedBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.top.location.href = "https://www.dimbrightideas.com/checkout";
      });
    }

    var homeBtn = document.querySelector("#dim-cart-back-home-btn");
    if (homeBtn) {
      homeBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.top.location.href = "https://www.dimbrightideas.com/home";
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!window.DIM_STORE) {
      console.error("DIM_STORE not found on cart page.");
      return;
    }
    renderCart();
    setupButtons();
    window.DIM_STORE.updateFloatingCartCount();
  });
})();
