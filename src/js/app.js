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



// carousel aircraft

let aircraftWrap = document.getElementById("aircraft-flickity-wrap");
// console.log('aircraftWrap: ' + typeof aircraftWrap);

const pilotsWrap = document.getElementById("pilots-flickity-wrap");
// console.log('pilotsWrap: ' + typeof pilotsWrap);

const elAmount = 6;
// console.log(typeof elAmount);

const elTypeOneAircraft = '<div class="spin-wrap phone-reverse">\
      <article class="spin-annotation aircraft-annotation">\
        <a href="#" class="spin-name" aria-label="Aircraft Name"><h3>Aircraft Name</h3></a>\
        <p class="spin-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed ac porttitor sapien. Nunc lorem tellus, interdum adui quis, vestibulum lobortis felis. <span class="hide-phone">Nullam porta pellentesque fermentum. Duis vehicula eros dolor, velaliquet tortor maximus eget. Praesent tempus diam ligula, ut varius nibh rhoncus non.</span></p>\
        <button class="spin-button">SEE MORE</button>\
      </article>\
      <img class="spin-image" src="./images/webp/aircraft-1.webp" alt="Aircraft image" width="556" height="583" loading="lazy">\
    </div>\
    ';

const elTypeTwoAircraft = '<div class="spin-wrap phone-reverse">\
<article class="spin-annotation aircraft-annotation">\
  <a href="#" class="spin-name" aria-label="Aircraft Name"><h3>Aircraft Name</h3></a>\
  <p class="spin-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac porttitor sapien. Nunc lorem tellus, interdum a dui quis, vestibulum lobortis felis. <span class="hide-phone">Nullam porta p ellentesque fermentum. Duis vehicula eros dolor, vel aliquet tortor maximus eget. Praesent tempus diam ligula, ut varius nibh rhoncus non.</span></p>\
  <button class="spin-button">SEE MORE</button>\
</article>\
<img class="spin-image" src="./images/webp/aircraft-2.webp" alt="Aircraft image" width="556" height="583" loading="lazy">\
</div>\
';

const elTypeOnePilot = '<div class="spin-wrap">\
<img class="spin-image" src="./images/webp/pilot-1.webp" alt="Pilot image" width="556" height="583" loading="lazy">\
<article class="spin-annotation pilot-annotation">\
  <a href="#" class="spin-name" aria-label="Pilot Name"><h3>First Second</h3></a>\
  <p class="spin-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed ac porttitor sapien. Nunc lorem tellus, interdum adui quis, vestibulum lobortis felis. <span class="hide-phone">Nullam porta pellentesque fermentum. Duis vehicula eros dolor, velaliquet tortor maximus eget. Praesent tempus diam ligula,ut varius nibh rhoncus non.</span></p>\
  <button class="spin-button">BOOK TIME</button>\
</article>\
</div>\
';

const elTypeTwoPilot = '<div class="spin-wrap">\
<img class="spin-image" src="./images/webp/pilot-2.webp" alt="Pilot image" width="556" height="583" loading="lazy">\
<article class="spin-annotation pilot-annotation">\
  <a href="#" class="spin-name" aria-label="Pilot Name"><h3>First Second</h3></a>\
  <p class="spin-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed ac porttitor sapien. Nunc lorem tellus, interdum adui quis, vestibulum lobortis felis. <span\ class="hide-phone">Nullam porta pellentesque fermentum. Duis vehicula eros dolor, velaliquet tortor maximus eget. Praesent tempus diam ligula,ut varius nibh rhoncus non.</span></p>\
  <button class="spin-button">BOOK TIME</button>\
</article>\
</div>\
';

for (let i = 0; i < elAmount; i++){
  if (i % 2 == 0) {
    aircraftWrap.innerHTML += elTypeOneAircraft;
    pilotsWrap.innerHTML += elTypeOnePilot;
  } else {
    aircraftWrap.innerHTML += elTypeTwoAircraft;
    pilotsWrap.innerHTML += elTypeTwoPilot;
  }
}

console.log("MOURICE I CAN'T");
console.log("I CAN'T MOVE IT MOVE IT ANYMORE");