
const hamburguer = document.querySelector('.botao_hamburguer')
const menuMobile = document.querySelector('.mobile_links')
let hamburguerAtivo = false

hamburguer.addEventListener('click', function() {
  if (hamburguerAtivo == false) {
    menuMobile.style.opacity = '1'
    menuMobile.style.right = '0px'
    hamburguerAtivo = true
    hamburguer.classList.add('ativo')

  } else if(hamburguerAtivo == true) {
    menuMobile.style.opacity = '0'
    menuMobile.style.right = '-60%'
    hamburguerAtivo = false
    hamburguer.classList.remove('ativo')
  }
})
