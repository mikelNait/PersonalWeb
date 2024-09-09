

const cargado = () =>  {


const karroGrande = document.querySelector('.karro-grande');
const puntoKarro = document.querySelectorAll('.punto-karro');


puntoKarro.forEach((punto , i)=> {
    puntoKarro[i].addEventListener('click', ()=>{
        
        let posicionPunto = i;
        let widthImg = 100 / puntoKarro.length
        let operacionPunto = posicionPunto * -widthImg
        karroGrande.style.transform = `translateX(${operacionPunto}%)`

        puntoKarro.forEach((punto, i) => {
            puntoKarro[i].classList.remove('activo')
        })
        puntoKarro[i].classList.add('activo')
    })
})

}

