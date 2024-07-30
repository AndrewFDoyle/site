const btn = document.getElementsByClassName('toggle-button')[0]
const menu = document.getElementsByClassName('navbar-links')[0]

btn.addEventListener('click', () => {
  menu.classList.toggle('hide')
})

document.addEventListener('click', e =>{
  if(!menu.contains(e.target) && e.target !== btn) {
    menu.classList.add('hide')
  }
})
