const switchBtn = document.querySelector('.switch')
const lightsItems = document.querySelectorAll('.lights__item');

let counter = 0;
switchBtn.addEventListener('click', function() {
    ++counter;
    lightsItems.forEach(function(lightsItem, index) {
        lightsItem.classList.remove('active');
        const indexCount = index + 1;
        if (indexCount === counter) {
            lightsItem.classList.add('active');
        }
    })
    if (counter >= lightsItems.length) {
        counter = 0;
    }
})