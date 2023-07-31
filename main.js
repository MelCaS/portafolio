let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Melissa Caballero')
  .pauseFor(300)
  .deleteChars(17)
  .typeString('Desarrolladora web')
  .pauseFor(1000)
  .start();

  const myModal = document.getElementById('modal-contactame');
const myElement = document.getElementById('contactame');

myModal.addEventListener('shown.bs.modal', () => {
    myElement.focus();
});