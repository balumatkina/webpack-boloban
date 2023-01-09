import '../styles/header.scss';
import '../styles/main-section.scss';
import '../styles/about-us.scss';
import '../styles/safety.scss';
import '../styles/spins.scss';
import '../styles/footer.scss';
import '../styles/reset.scss';


// mobile menu
let link = document.getElementById('hamburger-link')
let burger = document.getElementById('burger')
let ul = document.getElementById('burger-list')

link.addEventListener('click', function(e) {
  e.preventDefault()
  burger.classList.toggle('open')
  ul.classList.toggle('open')
})