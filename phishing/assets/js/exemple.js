const contents = document.querySelectorAll('.content');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 0;

function updateContent(index) {
  contents.forEach((content, i) => {
    content.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + contents.length) % contents.length;
  updateContent(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % contents.length;
  updateContent(currentIndex);
});
