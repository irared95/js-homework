const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.modal');

openBtn.addEventListener('click', function() {
    toggleModal();
})
closeBtn.addEventListener('click', function() {
    toggleModal();
})

function toggleModal() {
    modal.classList.toggle('show')
}