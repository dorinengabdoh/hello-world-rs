// Dom
/* eslint no-eval: 0 */
const touche = [...document.querySelectorAll('.boutton')]
const listekeycode = touche.map(touch => touch.dataset.key)
const ecran = document.querySelector('.area')
document.addEventListener('keydown', (e) => {
  // const valeur = e.keyCode.toString
})

document.addEventListener('click', (e) => {
  const valeur = e.target.dataset.key
  calculer(valeur)
})

const calculer = (valeur) => {
  if (listekeycode.includes(valeur)) {
    switch (valeur) {
      case '8':
        ecran.textContent = ''
        break
      case '13':
      { const calcul = eval(ecran.textContent)
        ecran.textContent = calcul
        break }
      default:
      {
        const indexkeycode = listekeycode.indexOf(valeur)
        const touches = touche[indexkeycode]
        ecran.textContent += touches.innerHTML }
    }
  }
}

window.addEventListener('error', (e) => {
  console.log('syntaxe error: ' + e.message)
})
