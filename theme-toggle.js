const toggle = document.querySelector(".theme-switch");

if (toggle) {
  const savedState = localStorage.getItem("site-toggle-state") === "on";

  function updateSwitch(isOn) {
    toggle.classList.toggle("is-on", isOn);
    toggle.setAttribute("aria-pressed", String(isOn));
    toggle.setAttribute("aria-label", isOn ? "Style switch on" : "Style switch off");
  }

  toggle.addEventListener("click", () => {
    const isOn = toggle.classList.contains("is-on");

    updateSwitch(!isOn);
    localStorage.setItem("site-toggle-state", !isOn ? "on" : "off");
  });

  updateSwitch(savedState);
}
