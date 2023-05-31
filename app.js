//recuperer mes constantes
const btns = document.querySelectorAll('.vote-btn');
const votes = document.querySelectorAll('.vote-count');
const reset = document.querySelector('.reset');

//rechercher le button qui est cliqué

btns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    let numContenu = this.nextElementSibling.children[0];
    let numero = Number(numContenu.textContent);
    numero = numero + 1;
    numContenu.textContent = numero;
  });
});

const reseting = () => {
  btns.forEach(function (btn) {
    btn.nextElementSibling.children[0].textContent = 0;
  });
};

reset.addEventListener('click', reseting);
