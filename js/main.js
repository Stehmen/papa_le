/* Papa Le — interactions */

(function () {
  "use strict";

  // ---- Sticky nav shadow ----
  var nav = document.getElementById("nav");
  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- Mobile menu ----
  var burger = document.getElementById("burger");
  var navLinks = document.getElementById("navLinks");
  burger.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });
  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") navLinks.classList.remove("open");
  });

  // ---- Scroll reveal ----
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  // ---- Menu tabs ----
  var tabs = document.querySelectorAll(".tab");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) { t.classList.remove("active"); });
      tab.classList.add("active");
      document.querySelectorAll(".tab-panel").forEach(function (p) {
        p.classList.remove("active");
      });
      var panel = document.getElementById("tab-" + tab.dataset.tab);
      if (panel) panel.classList.add("active");
    });
  });

  // ---- Cake order form ----
  var form = document.getElementById("orderForm");
  var errBox = document.getElementById("formError");
  var okBox = document.getElementById("formSuccess");

  // Date minimum = today
  var dateInput = document.getElementById("oDate");
  dateInput.min = new Date().toISOString().split("T")[0];

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    errBox.textContent = "";
    okBox.hidden = true;

    var name = document.getElementById("oName").value.trim();
    var date = dateInput.value;
    var phone = document.getElementById("oPhone").value.trim();
    var servings = document.getElementById("oServings").value;

    if (name.length < 2) {
      errBox.textContent = "Please enter your name.";
      return;
    }
    if (!date) {
      errBox.textContent = "Please choose the date you need the cake.";
      return;
    }
    var digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
      errBox.textContent = "Please enter a valid phone number.";
      return;
    }

    // Demo: no backend — show confirmation state
    okBox.hidden = false;
    okBox.querySelector("p").innerHTML =
      "<strong>Thank you, " + escapeHtml(name) + "!</strong> " +
      "Cake for " + escapeHtml(servings) + " servings on " + escapeHtml(date) + " — request received. " +
      "We will call you back shortly to confirm.";
    form.querySelectorAll("input, select, textarea, button[type=submit]").forEach(function (el) {
      el.disabled = true;
    });
  });

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
})();
