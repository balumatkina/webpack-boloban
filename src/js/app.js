import '../styles/header.scss';
import '../styles/mobile-menu.scss';
import '../styles/main-section.scss';
import '../styles/about-us.scss';
import '../styles/safety.scss';
import '../styles/spins.scss';
import '../styles/footer.scss';
import '../styles/reset.scss';

// const sum = (a, b) => a + b;

// window.addEventListener('load', () => {
//     console.log(`Sum function 1+3 = ${sum(1,3)}`);
// })

// for mobile menu
var burgerBtn = document.getElementById('burgerBtn');
var mobile = document.getElementById('mobile');
var demo2 = document.getElementById('demo2');

burgerBtn.addEventListener('click', function() {
  mobile.classList.toggle('navigation');
}, false);

demo2.addEventListener('click', function() {
  demo2.classList.add('active');
  demo1.classList.remove('active');
  demo3.classList.remove('active');
  mobile.classList.add('demo2');
  mobile.classList.remove('demo1', 'demo3', 'navigation');
}, false);
