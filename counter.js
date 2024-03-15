let numbers = document.querySelector('#numbers')

let h3Element = document.createElement('h3')
h3Element.textContent = 5
let button1 = document.createElement('button')
button1.textContent = '+'

let button2 = document.createElement('button')
button2.textContent = '-'

numbers.append(h3Element, button1,  button2 )

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
    }
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