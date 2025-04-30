const filpBtn = document.querySelector('.flip-button');
const card = document.querySelector('.card');

filpBtn.addEventListener('click', () => {
  card.classList.toggle('is-flipped');
});
