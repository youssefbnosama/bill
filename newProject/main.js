//get elements
let bill = document.getElementById(`bill`)
let b5 = document.getElementById(`b5`)
let b10 = document.getElementById(`b10`)
let b15 = document.getElementById(`b15`)
let b25 = document.getElementById(`b25`)
let b50 = document.getElementById(`b50`)
let custom = document.getElementById(`custom`)
let people = document.getElementById(`people`)
let tipAmount = document.getElementById(`tipAmount`)
let total = document.getElementById(`total`)
let reset = document.getElementById(`reset`)
let err1 = document.getElementById(`err1`)
let err2 = document.getElementById(`err2`)
// functions
b5.onclick = function(){
    if(isNaN(+bill.value)){
        bill.style.border = `1px solid red`
        err1.innerHTML = `Enter a valid bill`
        bill.oninput = function(){
            bill.style.border = `1px solid hsl(184, 14%, 56%)`
            err1.innerHTML = ``
        }
    } else if(isNaN(+people.value)){
        people.style.border = `1px solid red`
        err2.innerHTML = `Enter a valid number`
        people.oninput = function(){
            people.style.border = `1px solid hsl(184, 14%, 56%)`
            err2.innerHTML = ``
        }
    } else{
                let res1 = (+bill.value * 0.05)/people.value
        let text = `$${res1.toFixed(2)}`
        tipAmount.innerHTML =  text
        let res2 = (+bill.value * 0.95)/people.value
        total.innerHTML = `$${res2.toFixed(2)}`
    }

}
b10.onclick = function(){
    if(isNaN(+bill.value)){
        bill.style.border = `1px solid red`
        err1.innerHTML = `Enter a valid bill`
        bill.oninput = function(){
            bill.style.border = `1px solid hsl(184, 14%, 56%)`
            err1.innerHTML = ``
        }
    } else if(isNaN(+people.value)){
        people.style.border = `1px solid red`
        err2.innerHTML = `Enter a valid number`
        people.oninput = function(){
            people.style.border = `1px solid hsl(184, 14%, 56%)`
            err2.innerHTML = ``
        }}
        else{
                    let res1 = (+bill.value * 0.1)/people.value
        let text = `$${res1.toFixed(2)}`
        tipAmount.innerHTML =  text
        let res2 = (+bill.value * 0.9)/people.value
        total.innerHTML = `$${res2.toFixed(2)}`
        }
}
b15.onclick = function(){
    if(isNaN(+bill.value)){
        bill.style.border = `1px solid red`
        err1.innerHTML = `Enter a valid bill`
        bill.oninput = function(){
            bill.style.border = `1px solid hsl(184, 14%, 56%)`
            err1.innerHTML = ``
        }
    } else if(isNaN(+people.value)){
        people.style.border = `1px solid red`
        err2.innerHTML = `Enter a valid number`
        people.oninput = function(){
            people.style.border = `1px solid hsl(184, 14%, 56%)`
            err2.innerHTML = ``
        }}else{
                    let res1 = (+bill.value * 0.15)/people.value
        let text = `$${res1.toFixed(2)}`
        tipAmount.innerHTML =  text
        let res2 = (+bill.value * 0.85)/people.value
        total.innerHTML = `$${res2.toFixed(2)}`
        }
}
b25.onclick = function(){
    if(isNaN(+bill.value)){
        bill.style.border = `1px solid red`
        err1.innerHTML = `Enter a valid number`
        bill.oninput = function(){
            bill.style.border = `1px solid hsl(184, 14%, 56%)`
            err1.innerHTML = ``
        }
    } else if(isNaN(+people.value)){
        people.style.border = `1px solid red`
        err2.innerHTML = `Enter a valid number`
        people.oninput = function(){
            people.style.border = `1px solid hsl(184, 14%, 56%)`
            err2.innerHTML = ``
        }}else{        let res1 = (+bill.value * 0.25)/people.value
        let text = `$${res1.toFixed(2)}`
        tipAmount.innerHTML =  text
        let res2 = (+bill.value * 0.75)/people.value
        total.innerHTML = `$${res2.toFixed(2)}`}
}
b50.onclick = function(){
    if(isNaN(+bill.value)){
        bill.style.border = `1px solid red`
        err1.innerHTML = `Enter a valid number`
        bill.oninput = function(){
            bill.style.border = `1px solid hsl(184, 14%, 56%)`
            err1.innerHTML = ``
        }
    } else if(isNaN(+people.value)){
        people.style.border = `1px solid red`
        err2.innerHTML = `Enter a valid number`
        people.oninput = function(){
            people.style.border = `1px solid hsl(184, 14%, 56%)`
            err2.innerHTML = ``
        }}else{        let res1 = (+bill.value * 0.5)/people.value
        let text = `$${res1.toFixed(2)}`
        tipAmount.innerHTML =  text
        let res2 = (+bill.value * 0.5)/people.value
        total.innerHTML = `$${res2.toFixed(2)}`}
}
custom.oninput= function(){
    if(isNaN(+bill.value)){
        bill.style.border = `1px solid red`
        err1.innerHTML = `Enter a valid bill`
        bill.oninput = function(){
            bill.style.border = `1px solid hsl(184, 14%, 56%)`
            err1.innerHTML = ``
        }
    } else if(isNaN(+people.value)){
        people.style.border = `1px solid red`
        err2.innerHTML = `Enter a valid number`
        people.oninput = function(){
            people.style.border = `1px solid hsl(184, 14%, 56%)`
            err2.innerHTML = ``
        }}else{
                   let res1 = (+bill.value * (+custom.value)/100)/people.value
        let text = `$${res1.toFixed(2)}`
        tipAmount.innerHTML =  text
        let res2 = (+bill.value * (100 - +custom.value)/100)/people.value
        total.innerHTML = `$${res2.toFixed(2)}` 
        }
}
reset.onclick = function(){
    bill.value = ``
    people.value = `1`
    tipAmount.innerHTML = `$0.00`
    total.innerHTML = `$0.00`
    custom.value = ``
    bill.style.border = `1px solid hsl(184, 14%, 56%)`
    err1.innerHTML = ``
    people.style.border = `1px solid hsl(184, 14%, 56%)`
            err2.innerHTML = ``
}
