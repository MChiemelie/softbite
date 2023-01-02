const previewContainer = document.querySelector('.products-preview');
const previewBox = document.querySelectorAll('.preview');


document.querySelectorAll('.product').forEach(product => {
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
});

import Typed from 'typed.js';

const hey = 'Hey 👋, '

const today= new Date(); 
const hourNow = today.getHours(); 
const greeting = hourNow > 18 ? `${hey}`+ 'Good Evening'
: hourNow > 12 ? `${hey}`+ 'Good Afternoon ' 
: hourNow > 0  ? `${hey}`+ 'Good Morning' : 'Hey 👋'; 

var typed = new Typed('.type', {
    strings: [`${greeting}`,
    'Welcome To SoftBite 🥘🍲🍳'],
    typeSpeed: 200,
    backSpeed: 60,
    loop: true
  });