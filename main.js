// SLICK
$(".multiple-items").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrow: true,
})

//prev, next buttons setting
$(".courses-carousel .slick-prev").html("<i class='fas fa-chevron-left'></i>")

$(".courses-carousel .slick-next").html("<i class='fas fa-chevron-right'></i>")

// h3 length setting
const h3s = document.querySelectorAll(".courses__item-text h3")
h3s.forEach((h3) => {
  if (h3.innerText.split(" ").length > 6) {
    let text = ""
    for (let i = 0; i < 6; i++) {
      text += h3.innerText.split(" ")[i] + " "
    }
    h3.innerText = text + "..."
  }
})

// nav tabs settings

const navTabs = document.querySelectorAll(".nav-tab")
const navContents = document.querySelectorAll(".courses-carousel")
navTabs.forEach((navTab) => {
  navTab.addEventListener("click", (e) => {
    setNavTabActive(e.target)
    navigateToSelectedTab(e.target)
  })
})
// tab active when clicked
const setNavTabActive = (navTab) => {
  navTabs.forEach((navTab) => {
    if (navTab.classList.contains("active")) {
      navTab.classList.remove("active")
    }
  })
  navTab.classList.add("active")
}

// navigate to content of selected tab
const navigateToSelectedTab = (navTab) => {
  navContents.forEach((navContent) => {
    if (navContent.classList.contains("active")) {
      navContent.classList.remove("active")
    }
  })
  const tabName = navTab.dataset.tab
  navContents.forEach((navContent) => {
    if (navContent.dataset.tabTarget === tabName) {
      navContent.classList.add("active")
    }
  })
}
