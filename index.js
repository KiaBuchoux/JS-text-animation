const text = document.querySelector(".text")
const textChars = text.textContent.split("")

text.innerHTML = textChars.map( char => `<span>${char}</span>`).join("")

let timer = setInterval(ontick, 50)
let index = 0
const randomColor = Math.floor(Math.random()*16777215).toString(16)

function ontick(){
    //add a class to each span
    const spans = document.querySelectorAll("span")
    spans[index].classList.add("change")
    spans[index].style.color =`#${randomColor}`
    index++
    
    // stop running when it reaches to the end 
    if (index === textChars.length){
        clearInterval(timer)
        spans.forEach(span =>{
            span.classList.remove("change")
            span.classList.add("changeBack")
        })

    }
    
    
}