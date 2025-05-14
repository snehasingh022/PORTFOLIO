// Select elements
const sidebar = document.querySelector('.sidebar');
const ham = document.querySelector('.ham');
const cross = document.querySelector('.cross');

// Initially, hide the cross icon
cross.style.display = 'none';

ham.addEventListener('click', () => {
  sidebar.classList.remove('sidebargo'); // Show sidebar
  ham.style.display = 'none';            // Hide hamburger

  // Show cross after 400ms
  setTimeout(() => {
    cross.style.display = 'inline';
  }, 800);
});

cross.addEventListener('click', () => {
  sidebar.classList.add('sidebargo');    // Hide sidebar
  cross.style.display = 'none';          // Hide cross immediately
  ham.style.display = 'inline';          // Show hamburger
});
