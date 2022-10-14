function changesCarousel (number) {

  turnOffRadios()
  turnOffCarousel()
  turnToBlackAllLbl()

  switch (number) {
    case 1:
      changeColorLbl('#first-lbl');
      moveCorousel(0)
      break;
    case 2:
      changeColorLbl('#second-lbl');
      moveCorousel(100)
      break;
    case 3:
      changeColorLbl('#third-lbl');
      moveCorousel(200)
      break;
    case 4:
      changeColorLbl('#fourth-lbl');
      moveCorousel(300)
      break;
    case 5:
      changeColorLbl('#fifth-lbl');
      moveCorousel(400)
      break;
  }
}

function changeColorLbl (lbl) {
  const carousel = document.querySelector('.input-carousel');
  const label = carousel.querySelector(lbl);
  label.style.backgroundColor = '#FFBE1A';
}

function moveCorousel(percent) {
  const carousel = document.querySelector('.carousel-inner');
  carousel.style.transition = 'all 1s ease-in-out';
  carousel.style.transform = `translate(-${percent}%)`;
}

function turnOffRadios () {
  const carousel = document.querySelector('.input-carousel');
  let radio = carousel.querySelectorAll('input[type="radio"]:checked');
  radio.values = false;
}

function turnOffCarousel () {
  const carousel = document.querySelector('.carousel-inner');
  carousel.style.animation = 'paused';
}

function turnToBlackAllLbl() {
  const carousel = document.querySelector('.input-carousel');
  let lbls = carousel.querySelectorAll('label');
  lbls.forEach(function (lbl) {
    lbl.style.backgroundColor = '';
  })
}

