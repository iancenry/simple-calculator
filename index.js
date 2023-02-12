let buttons = document.querySelectorAll(".btn")
let input = document.querySelector('#screen')
let result;


buttons.forEach(btn => btn.addEventListener('click', ()=>{ 

    //append to result only if it's not a sign, clear or del 
    if(!/[÷×=]|(clear|del)/g.test(btn.textContent)){
        //if screen has zero replace with clicked key else append clicked key to result
        input.textContent === '0'? input.textContent = btn.textContent :  result = input.textContent += btn.textContent
        
    }
    //second part prevents repetition of signs
    else if(btn.textContent === "×" && input.textContent[input.textContent.length-1] !== "*"){
        result = input.textContent += "*"
    }
    else if(btn.textContent === "÷" && input.textContent[input.textContent.length-1] !== "/"){
        result = input.textContent += "/"
    }else if(btn.textContent === "del"){
        del()
    }
    else if(btn.textContent === "clear"){
        input.textContent=""
    }
    else if(btn.textContent === "="){
        input.textContent = eval(result)  
    }
}))

document.addEventListener('keydown', (e)=>{
    //add key pressed if it's a number or math signs, second part prevents repetition of signs
    if(!isNaN(e.key) || /[-/*+.]/g.test(e.key) && !/[-./*+]/g.test(input.textContent[input.textContent.length-1] )){
        input.textContent === '0'? input.textContent = e.key : result = input.textContent += e.key
    }    
    else if(e.key === "Enter"){
        //ensure that spaces are ignored before evaluation
        input.textContent = eval(result.split("").filter(n => n !== " ").join(""))  
    }else if(e.key === "Backspace"){
        del()
    }else{
        return
        
    }
})


function del(){
    //split the value into an array, remove the last element then put it together
    let value = input.textContent
    let nval = value.split("")
    nval.pop()
    input.textContent = nval.join("")
}

//TODO prevent multiple input of . , +, - when using frontend buttons   => try if current clicked key is equal to whatever is previous eg e.key !== input.textContent[input.textContent.length-1] 