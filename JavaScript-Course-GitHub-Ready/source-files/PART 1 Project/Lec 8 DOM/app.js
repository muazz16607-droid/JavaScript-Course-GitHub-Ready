let buttonElement=document.querySelector("button")
let headingElement=document.querySelector("h1")
let paraElement=document.querySelector("p")
buttonElement.addEventListener("click",()=>{
    headingElementData=headingElement.innerHTML
    paraElementData=paraElement.innerHTML

    headingElement.innerHTML=paraElementData
    paraElement.innerHTML=headingElementData

    
    // headingElement.innerHTML=headingElementData
    // paraElement.innerHTML=paraElementData
})