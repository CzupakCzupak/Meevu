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

// iframe.addEventListener('click', ()=>{
//   introDesc.classList.add('swap')
//   setTimeout(() => {
//     if(introDesc.classList.contains('swap')){
//       introHeading.textContent = 'gabs'
//     }else{
//       introHeading.textContent = 'inne'
//     }
//     introDesc.classList.remove('swap') 
//   }, 1000);
// })

// iframe.addEventListener("load", function() {
//   iframe.play();console.log(iframe);
// });\
iframe.onload = () => {
  console.log('siema')
}