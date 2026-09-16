const toggle = document.querySelector(".theme-switch");

if (toggle) {
  const savedOriginalStyle = localStorage.getItem("site-style-state") === "original";

  function updateSwitch(isOriginalStyle) {
    document.body.dataset.style = isOriginalStyle ? "original" : "new";
    toggle.classList.toggle("is-on", isOriginalStyle);
    toggle.setAttribute("aria-pressed", String(isOriginalStyle));
    toggle.setAttribute(
      "aria-label",
      isOriginalStyle ? "Original style selected" : "New style selected"
    );
  }

  toggle.addEventListener("click", () => {
    const isOriginalStyle = toggle.classList.contains("is-on");

    updateSwitch(!isOriginalStyle);
    localStorage.setItem("site-style-state", !isOriginalStyle ? "original" : "new");
  });

  updateSwitch(savedOriginalStyle);
}

const revealTarget = document.querySelector(".home-page .content-card");

if (revealTarget) {
  revealTarget.classList.add("reveal-on-scroll");

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealTarget.classList.add("is-visible");
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    revealObserver.observe(revealTarget);
  }
}

function createSignalField() {
  if (document.body.classList.contains("ai-body")) return null;

  const existingField = document.querySelector(".signal-field");
  if (existingField) return existingField;

  document.body.insertAdjacentHTML(
    "afterbegin",
    `<div class="signal-field" aria-hidden="true">
      <div class="pixel-grid"></div>
      <span class="pixel-cluster pixel-cluster-one"></span>
      <span class="pixel-cluster pixel-cluster-two"></span>
      <span class="pixel-cluster pixel-cluster-three"></span>
      <span class="pixel-cluster pixel-cluster-four"></span>
      <span class="pixel-cluster pixel-cluster-five"></span>
    </div>`
  );

  return document.querySelector(".signal-field");
}

createSignalField();
