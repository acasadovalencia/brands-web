'use strict'

const mainLis = document.querySelectorAll('.Main-li')
const imagesLis = document.querySelectorAll('.Images-li')
console.log(imagesLis)

mainLis.forEach((each , i)=>{
    mainLis[i].addEventListener('mouseover' , ()=>{
        mainLis.forEach((each , i)=>{
            mainLis[i].classList.remove('isActive')
        })
        imagesLis.forEach((each , i)=>{
            imagesLis[i].classList.remove('isActive')
        })
        mainLis[i].classList.add('isActive')
        imagesLis[i].classList.add('isActive')
        
    })
    mainLis[i].addEventListener('mouseout' , ()=>{
        mainLis.forEach((each , i)=>{
            mainLis[i].classList.add('isActive')
        })
        imagesLis.forEach((each , i)=>{
            imagesLis[i].classList.remove('isActive')
        })
    })
})
