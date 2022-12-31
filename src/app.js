const previewContainer = document.querySelector('.products-preview');
const previewBox = document.querySelectorAll('.preview');
const signup =  document.getElementById('signupicon');
const signin = document.getElementById('signinicon');
const signingForm = document.querySelector('.signIn-form');


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

signup,addEventListener('click', (e)=> {
    console.log('You are great!');
    signingForm.style.visibilty = 'visible';
});