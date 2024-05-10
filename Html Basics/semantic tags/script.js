const toggleButton = document.getElementById('toggleButton');
const aside = document.getElementById('aside');

toggleButton.addEventListener('click', () => {
  aside.classList.toggle('hidden');
});