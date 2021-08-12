const body = document.querySelector('.body')
const iconMenu  = document.querySelector('.icon-menu')
const menu = document.querySelector('.menu')
const sedeBtn = document.querySelector('.sedesBtn')
console.log(sedeBtn)
const listaSedes = document.querySelector('.listaSedes')


iconMenu.addEventListener('click', mostrarMenu)
sedeBtn.addEventListener('click', mostrarSedes)


function mostrarMenu(){
    if(menu.id === 'active'){
        menu.id = 'no-Active'
        iconMenu.classList.add('icon-menu')
        iconMenu.classList.remove('icon-cross')
        iconMenu.style.color = 'black'
        iconMenu.style.transition = '.5s ease-in-out '
    }else{
        menu.id = 'active'
        iconMenu.classList.remove('icon-menu')
        iconMenu.classList.add('icon-cross')
        iconMenu.style.color = 'white'
        iconMenu.style.transition = '.5s ease-in-out '
    }
    
}

function mostrarSedes(){
    if(listaSedes.id === 'active'){
        listaSedes.id = 'no-Active'
    }else{
        listaSedes.id = 'active'
    }
}
