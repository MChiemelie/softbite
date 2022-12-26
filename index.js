let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');


document.querySelectorAll(' .product').forEach(product => {
product.addEventListener('click', () => {
        previewContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        })
    });
})

previewBox.forEach(close => {
    close.querySelector('.fa-times').addEventListener('click', () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    })
})

// const { reset } = require("colorette");

document.addEventListener("click", (e) => {
    let handle;
    if (e.target.matches(".handle")) {
        handle = e.target;
    } else {
        handle = e.target.closest(".handle");
    }
    if (handle != null) { 
        onHandleClick(handle);
    }
});

const throttleProgressBar = throttle(() => {
    document.querySelectorAll('.progress-bar').forEach(calculateProgressBar)
}, 250)

document.querySelectorAll('.progress-bar').forEach(calculateProgressBar)

window.addEventListener('resize', throttleProgressBar)

function onHandleClick(handle) {
    const progressBar = handle.closest(".row").querySelector(".progress-bar");
    const slider = handle.closest(".slide-container").querySelector(".slider");
    // const totalItems = slider.childElementCount;
    // const itemPerScreen = parseInt(
    //     getComputedStyle(slider).getPropertyValue('--items-per-screen')
    // );
    //const maxsliderIndex = ((totalItems + itemPerScreen) / itemPerScreen) - 2;

    const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue('--slider-index')
    );
    const progressBarItemCount = progressBar.children.length
    if ((handle.classList.contains("left-handle")) /*&& (sliderIndex >= 1)*/) {
        if (sliderIndex - 1 < 0)  {
            slider.style.setProperty("--slider-index", progressBarItemCount - 1);
            progressBar.children[sliderIndex].classList.remove("active")
            progressBar.children[progressBarItemCount - 1].classList.add("active")
        }  else {
        slider.style.setProperty("--slider-index", sliderIndex - 1);
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[sliderIndex - 1].classList.add("active")
    } }  
    if ((handle.classList.contains("right-handle")) /*&& (sliderIndex < maxsliderIndex)*/) {
        if (sliderIndex + 1 >= progressBarItemCount)  {
            slider.style.setProperty("--slider-index", 0);
            progressBar.children[sliderIndex].classList.remove("active")
            progressBar.children[0].classList.add("active")
        }  else {
        slider.style.setProperty("--slider-index", sliderIndex + 1);
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[sliderIndex + 1].classList.add("active")
    }   
}}



function calculateProgressBar(progressBar){
    progressBar.innerHTML = "";
    const slider = progressBar.closest(".row").querySelector(".slider");
    const itemsCount = slider.children.length;
    const itemPerScreen = parseInt(
        getComputedStyle(slider).getPropertyValue('--items-per-screen')
    );
    const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue('--slider-index')
    );
    const progressBarItemCount = Math.ceil(itemsCount / itemPerScreen)
    for(let i = 0; i < progressBarItemCount; i++){
        const barItem = document.createElement("div")
        barItem.classList.add('progress-item')
        if (i === sliderIndex) {
            barItem.classList.add('active')
        }
        progressBar.append(barItem)
    }
}

function throttle(cb, delay = 1000) {
    let shouldWait = false
    let waitingArgs
    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false
      } else {
        cb(...waitingArgs)
        waitingArgs = null
        setTimeout(timeoutFunc, delay)
      }
    }
  
    return (...args) => {
      if (shouldWait) {
        waitingArgs = args
        return
      }
  
      cb(...args)
      shouldWait = true
      setTimeout(timeoutFunc, delay)
    }
}

// import Typed from 'typed.js';

// var options = {
//   strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
//   typeSpeed: 40
// };

// var typed = new Typed('.element', options);

// window.onscroll = (e) => {
//     document.querySelector('nav').classList.add('newnav');
// }

// var options = {
//   strings: ['Good Morning', 'Welcome To SoftBite, ... your oasis of deliciuosness'],
//   typeSpeed: 40
// };

// var typed = new Typed('.element', options);