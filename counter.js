let numbers = document.querySelector('#numbers')

let h3Element = document.createElement('h3')
h3Element.textContent = 5
let button1 = document.createElement('button')
button1.textContent = '+'

let button2 = document.createElement('button')
button2.textContent = '-'

let button3 = document.createElement('button')
button3.textContent = 'reset'

let button4 = document.createElement('button')
button4.textContent = '++'

let button5 = document.createElement('button')
button5.textContent = '--'

numbers.append(h3Element, button1,  button2, button3, button4, button5 )

let count = 5

button1.addEventListener('click', skaiciusPlius)
    
    function skaiciusPlius(){
        count++
        h3Element.textContent = count

        if (count >= 5){
            h3Element.style.color = 'green'
        }
        if(count > 9){
            button1.setAttribute('disabled', true)
        } else {
            button2.disabled = false
        }
    }
button2.addEventListener('click', skaiciusMinus)

function skaiciusMinus(){
    count--
    h3Element.textContent = count

    if (count < 5){
        h3Element.style.color = 'red'
    } 
    if(count <2){
        button2.setAttribute('disabled', true)
    } else {
        button1.disabled = false
    }
}
 button3.addEventListener('click', () => {
    h3Element.textContent = '5'
    h3Element.style.color = 'black'

  })
button4.addEventListener('click', plius2 )
 function plius2 (){
    count+=2
    h3Element.textContent = count
 }

 button5.addEventListener('click', minus2 )
 function minus2 (){
    count-=2
    h3Element.textContent = count
 }
 
 
    
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