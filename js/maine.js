const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  speed: 1500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
const tabs = document.querySelector(".tabs");
const tabsButtons = tabs.querySelectorAll('[role = "tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleClick(e) {
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  tabsButtons.forEach((tab) => {
    tab.ariaSelected = false;
  });
  e.currentTarget.setAttribute("aria-selected", true);

  const { id } = e.currentTarget;
  const tabPanel = tabPanels.find((panel) => {
    if (panel.getAttribute("aria-labelledby") === id) {
      return true;
    }
  });
  tabPanel.hidden = false;
}

tabsButtons.forEach((button) => button.addEventListener("click", handleClick));
