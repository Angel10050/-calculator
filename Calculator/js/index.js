let myInput2 = document.querySelector('.input2');
let myInput1 = document.querySelector('.input1');
const buttons = document.querySelectorAll('button.calc-button , button.is-zero')

let endOfOperation = false

let finishSimbol = () => myInput1.value.substring(myInput1.value.length - 1)

writeOperation = text => {
    if (myInput1.value == 0) myInput1.value = '';

    if (endOfOperation && isNaN(text)) {
        myInput1.value = myInput2.value
        endOfOperation = false
    }
    if (endOfOperation && isNaN(text)) {
        myInput1.value = ''
        myInput2.value = '0'
        endOfOperation = false
    }

    if (isNaN(finishSimbol()) && isNaN(text)) {
        myInput1.value = myInput2.value.substring(0, myInput1.value.length - 1)
    }
    else {
        myInput1.value += text
    }

}
const writeResult = () => {
    myInput2.value = eval(myInput1.value)
    endOfOperation = true
}

const emptyResult = () => {
    myInput1.value = '0';
    myInput2.value = '0'
}
const emptyOneBo = () => {
    let lastNumber = ''
    let position = '0'

    if (finishSimbol()) {
        for (let i = myInput1.value.length - 1; i > 0; i--) {
            if (myInput1.value) {
                position = i--;
                break
            }
        }
    }
    lastNumber = myInput1.value.substring(position)
    myInput1.value = myInput1.value.replace(lastNumber, '')
}


buttons.forEach(x => x.addEventListener('click', e => {
    if (e.target.textContent !== '') {
        switch (e.target.textContent) {
            case '=': writeResult(); break;
            case 'AC': emptyResult(); break;
            case ',': writeOperation('.'); break;
            case '#': emptyOneBo(); break;
            default: writeOperation(e.target.textContent); break;
        }
    }
})
)





































// let buttons = document.querySelectorAll('.calc-button , .calc-buttons')
// 

// buttons.forEach(x => x.addEventListener('click', putNumbers))

// function putNumbers(numeros) {
//     myInput.value = numeros.target.value



// }
