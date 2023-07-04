

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


const iframe = document.querySelector(".video-intro")
const introDesc = document.querySelector(".intro-desc")
const introHeading = introDesc.querySelector('.intro-desc-heading')
const introText = introDesc.querySelector('.intro-text')
const videoBtns = document.querySelectorAll('.video-button')
let clickedBtn
let flag = 0

// iframe.onload = () => {
//   console.log('siema')
// }


const playVideo = (e) => {
  if(flag >= 1){
    clickedBtn.classList.add('played')
  }
  videoBtns.forEach(item => {
    item.classList.remove('active')
  })
  clickedBtn = e.target.closest('.video-button')
  flag++
  clickedBtn.classList.add('active')
  introDesc.classList.add('swap')
  setTimeout(() => {
    introHeading.textContent = clickedBtn.dataset.title
    introText.textContent = clickedBtn.dataset.desc
    introDesc.classList.remove('swap') 
  }, 500);
}
videoBtns.forEach(item =>{
  item.addEventListener('click', playVideo)
})

const bluebtns = document.querySelectorAll('.blue-button')
bluebtns.forEach(item =>{
  item.addEventListener('click', (e)=>{
    e.preventDefault
  })
})

const monthBtn = document.querySelectorAll('.month-btn')

monthBtn.forEach(item =>{
  item.addEventListener('click', (e)=>{
    monthBtn.forEach(item =>{
      item.classList.remove('chosen')
      e.target.closest('.month-btn').classList.add('chosen')
    })
  })
})