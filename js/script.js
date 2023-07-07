const detectElem = (element) => {
  const rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 && rect.bottom <= document.documentElement.clientHeight + 300
  );
};

const detectAnim = (el) => {
  const rect = el.getBoundingClientRect();

  return rect.top >= 200;
};

document.addEventListener("scroll", () => {
  rollAnim();
});

const rollAnim = () => {
  if (window.innerWidth >= 992) {
    let roll = document.querySelectorAll(".roll-anim");

    let winPos = window.scrollY;

    roll.forEach((e) => {
      var elDistanceToTop =
        window.pageYOffset + e.getBoundingClientRect().top / 2;

      if (detectElem(e)) {
        if (e.classList.contains("roll-right")) {
          e.style.transform = `translateX(${winPos - elDistanceToTop + 340}px)`;
        }

        if (e.classList.contains("roll-left")) {
          e.style.transform = `translateX(${
            -winPos + elDistanceToTop - 380
          }px)`;
        }
      }

      if (detectAnim(e)) {
        if (e.classList.contains("anim-right")) {
          e.style.transform = `translateX(${winPos - elDistanceToTop + 100}px)`;
        }

        if (e.classList.contains("anim-left")) {
          e.style.transform = `translateX(${
            -winPos + elDistanceToTop - 100
          }px)`;
        }
      }
    });
  }
};

const iframe = document.querySelector(".video-intro");
const introDesc = document.querySelector(".intro-desc");
const introHeading = introDesc.querySelector(".intro-desc-heading");
const introText = introDesc.querySelector(".intro-text");
const videoBtns = document.querySelectorAll(".video-button");
let clickedBtn;
let flag = 0;

const playVideo = (e) => {
  if (flag >= 1) {
    clickedBtn.classList.add("played");
  }
  videoBtns.forEach((item) => {
    item.classList.remove("active");
  });
  clickedBtn = e.target.closest(".video-button");
  flag++;
  clickedBtn.classList.add("active");
  introDesc.classList.add("swap");
  setTimeout(() => {
    introHeading.textContent = clickedBtn.dataset.title;
    introText.textContent = clickedBtn.dataset.desc;
    introDesc.classList.remove("swap");
  }, 500);
};
videoBtns.forEach((item) => {
  item.addEventListener("click", playVideo);
});

const bluebtns = document.querySelectorAll(".blue-button");
bluebtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault;
  });
});

const monthBtn = document.querySelectorAll(".month-btn");

monthBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    monthBtn.forEach((item) => {
      item.classList.remove("chosen");
      e.target.closest(".month-btn").classList.add("chosen");
    });
  });
});

const offerBtns = document.querySelectorAll(".blue-btn-js");

let finalPrice;
let bundlesPrice = 0;
const bundleName = document.querySelector(".bundle-name");
const canalsNumber = document.querySelector(".canals-number-js");
const summPrice = document.querySelector(".final-price");
const addBundlesPrice = document.querySelector(".additional-bundles");
const bundleList = document.querySelector(".bundle-list");
const blueBtnsText = document.querySelectorAll(".blue-btn-text");
let hiddenOfferPrice = parseFloat(
  document.querySelector(".hidden-offer-price").value
).toFixed(2);

~









const offers = document.querySelectorAll('.offer-item')
console.log(offers);

offerBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    offers.forEach(item =>{
      item.classList.remove('active')
    })
    const currentBtn = e.target.closest(".blue-btn-js");
    const chosenOffer = e.target.closest(".offer-item")
    const currBtnText = currentBtn.querySelector(".blue-btn-text");
    chosenOffer.classList.add('active')
    const offerPrice = parseFloat(currentBtn.dataset.price);
    hiddenOfferPrice = offerPrice;
    bundlesPrice = parseFloat(addBundlesPrice.textContent);
    finalPrice = offerPrice + bundlesPrice;
    summPrice.textContent = finalPrice.toFixed(2);
    blueBtnsText.forEach((item) => {
      item.textContent = "Wybieram";
    });
    currBtnText.textContent = "Wybrano";

    bundleName.textContent = currentBtn.dataset.name;
    canalsNumber.textContent = `${currentBtn.dataset.canals} kanałów`;
  });
});

const bundleBtns = document.querySelectorAll(".bundle-btn-js");

bundleBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    const currBundleBtn = e.target.closest(".bundle-btn-js");
    const bundleName = currBundleBtn.dataset.name;

    if (currBundleBtn.dataset.status == "off") {
      currBundleBtn.dataset.status = "on";
      currBundleBtn.querySelector("p").textContent = "Dodano";
      bundlesPrice += parseFloat(currBundleBtn.dataset.price);
      addBundlesPrice.textContent = bundlesPrice.toFixed(2);
      finalPrice = Number(hiddenOfferPrice) + Number(bundlesPrice);
      summPrice.textContent = finalPrice.toFixed(2);
      const listItem = document.createElement("li");
      listItem.textContent = bundleName;
      listItem.dataset.name = bundleName;
      bundleList.appendChild(listItem);
    } else {
      currBundleBtn.dataset.status = "off";
      currBundleBtn.querySelector("p").textContent = "Dodaj";
      bundlesPrice -= parseFloat(currBundleBtn.dataset.price);
      addBundlesPrice.textContent = bundlesPrice.toFixed(2);
      finalPrice = Number(hiddenOfferPrice) + Number(bundlesPrice);
      summPrice.textContent = finalPrice.toFixed(2);
      const removedItem = bundleList.querySelector(
        `[data-name="${bundleName}"]`
      );
      bundleList.removeChild(removedItem);
    }
  });
});

const accordionList = document.querySelectorAll(".accordion-box");
const accordionContainer = document.querySelector(".accordion-container");
let accordionFlag = 0;
let lastAccordion = document.body;

accordionList.forEach((item) => {
  item.addEventListener("click", (e) => {

    const clickedAccordion = e.target.closest(".accordion-box");
    const panel = clickedAccordion.querySelector('.panel')
    if(clickedAccordion.classList.contains('active')){
      clickedAccordion.classList.remove('active')
      panel.style.maxHeight = '0px'
    }else{
      accordionList.forEach((item) => {
        item.classList.remove("active");
        item.querySelector('.panel').style.maxHeight = '0px'
      });
      clickedAccordion.classList.add('active')
      panel.style.maxHeight = panel.scrollHeight + 'px'
    }

});
})

