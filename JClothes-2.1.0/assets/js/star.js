let stars = document.querySelectorAll('.star');
// console.log(stars);
stars.forEach((item, index) => {
    item.addEventListener('click', () => {
        stars.forEach((star, index2) => {
            index >= index2 ? star.classList.add('active') : star.classList.remove('active') 
        })
    })
})