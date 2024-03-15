let numbers = document.querySelector('#numbers')

let h3Element = creatElemt('number', 'h3', '5')
numbers.append(h3Element)

let buttonPlus = creatElemt('button-plus', 'button', '+')
numbers.append(buttonPlus)

let buttonPlus2 = creatElemt('button-plus2', 'button', '++')
numbers.append(buttonPlus2)

let buttonPlus5 = creatElemt('button-plus5', 'button', '+5')
numbers.append(buttonPlus5)

let buttonMinus = creatElemt('button-minus', 'button', '-')
numbers.append(buttonMinus)

let buttonMinus2 = creatElemt('button-minus2', 'button', '--')
numbers.append(buttonMinus2)

let buttonMinus5 = creatElemt('button-minus5', 'button', '-5')
numbers.append(buttonMinus5)

let buttonReset = creatElemt('button-reset', 'button', 'reset')
numbers.append(buttonReset)

function creatElemt(className, type='button', content = '', id ='') {
    let element = document.createElement(type)
    element.classList.add(className)
    element.textContent = content
    element.id = id
    return element

}

let count = 5

buttonPlus.addEventListener('click', skaiciusPlius)
    
    function skaiciusPlius(){
        count++
        h3Element.textContent = count
        disable()
    }
buttonMinus.addEventListener('click', skaiciusMinus)

function skaiciusMinus(){
    count--
    h3Element.textContent = count
    disable()
}

buttonPlus2.addEventListener('click', plius2 )
 function plius2 (){
    count+=2
    h3Element.textContent = count
   disable()
 }
buttonMinus2.addEventListener('click', minus2)
 function minus2(){
    count-=2
    h3Element.textContent = count
   disable()
}

buttonPlus5.addEventListener('click', plius5 )
 function plius5 (){
    count+=5
    h3Element.textContent = count
   disable()
 }
buttonMinus5.addEventListener('click', minus5)
 function minus5(){
    count-=5
    h3Element.textContent = count
    disable()
}
function disable(){

    if (count >= 5){
        h3Element.style.color = 'green'
    }
    if (count < 5){
        h3Element.style.color = 'red'
    } 
    if(count >= 9){
        buttonPlus.setAttribute('disabled', true)
        buttonPlus2.setAttribute('disabled', true)
        buttonPlus5.setAttribute('disabled', true)    
    } else { if(count <2){
        buttonMinus.setAttribute('disabled', true)
        buttonMinus2.setAttribute('disabled', true)
        buttonMinus5.setAttribute('disabled', true)
    } else {
        buttonPlus.disabled = false
        buttonPlus2.disabled = false
        buttonPlus5.disabled = false
        buttonMinus.disabled = false
        buttonMinus2.disabled = false
        buttonMinus5.disabled = false
       
    }
}
    
}
buttonReset.addEventListener('click', () => {
    h3Element.textContent = '5'
    h3Element.style.color = 'black'
    count = 5
    disable()
 }

)


// Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers"
// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
// 3. h3 elemento tekstas turėtų būti „5"
// 4. Mygtukų tekstas turėtų būti „+" ir „-"
// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti

// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus 
// (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled')
// 8. Jeigu skaitmuo h3 komponente yra didesnis už 9, tai „+" mygtukas turėtų patapti neveiksnus (disabled)

// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.

// 10. Sukurti naują mygtuką „Reset". Jį paspaudus viskas atstatoma į pradinę padėtį.
 
// 11. Sukurti du naujus mygtukus, kurie:
// 11.1. Prideda dvejetą prie esamos h3 elemento reikšmės.
// 11.2. Atima dvejetą iš esamos h3 elemento reikšmės

// 12. Sukurti du naujus mygtukus, kurie:
// 12.1. Prideda 5 prie esamos h3 elemento reikšmės.
// 12.2. Atima 5 iš esamos h3 elemento reikšmės.