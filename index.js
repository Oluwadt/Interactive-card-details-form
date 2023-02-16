const holderNameCard = document.getElementById('holder-name-card')
const cardNumberCard = document.getElementById('card-number-card')
const expDateCard = document.getElementById('exp-date')
const cvcCard = document.getElementById('cvc-card')

const holderName = document.forms['form']['holder-name']
const cardNumber = document.forms['form']['card-number']
const expMonth = document.forms['form']['month']
const expYear = document.forms['form']['year']
const cvc = document.forms['form']['cvc']

const completedBtn = document.getElementById('completed-btn')

const form = document.forms['form']
let formElements = form.elements
formElements = Array.from(formElements)
formElements = formElements.filter(field => field.className === 'field')

const completed = () => {
    form.submit()
}

const nameChange = () => {
    holderNameCard.innerText = holderName.value.toUpperCase()
    holderName.style = ''
    holderName.nextElementSibling.remove()
}

const numberChange = (e) => {
    if (cardNumber.value.length > 0) {
        cardNumber.value = cardNumber.value.replace(/[^\dA-Z]/gi, "").replace(/(.{4})/g, "$1 ").trim();
    }
    const charCode = (e.which) ? e.which : e.keyCode
    if ((charCode < 48) || (charCode > 57)) {
        if (charCode != 8) {
            e.preventDefault();
        }
    }
    cardNumberCard.innerText = cardNumber.value
    cardNumber.style = ''
    cardNumber.nextElementSibling.remove()
}

const dateChange = (e) => {
    const charCode = (e.which) ? e.which : e.keyCode
    if ((charCode < 48) || (charCode > 57)) {
        if (charCode != 8) {
            e.preventDefault();
        }
    }
    expDateCard.innerText = `${expMonth.value}/${expYear.value}`
    expMonth.style = ''
    expYear.style = ''
    expYear.nextElementSibling.remove()
}

const cvcChange = (e) => {
    const charCode = (e.which) ? e.which : e.keyCode
    if ((charCode < 48) || (charCode > 57)) {
        if (charCode != 8) {
            e.preventDefault();
        }
    }
    cvcCard.innerText = cvc.value
    cvc.style = ''
    cvc.nextElementSibling.remove()
}

completedBtn.onclick = completed

formElements.forEach(element => {
    switch (element.id) {
        case 'holder-name':
            element.onkeydown = nameChange
            element.onchange = nameChange
            break;
        case 'card-number':
            element.onkeydown = (e) => numberChange(e)
            element.onchange = numberChange
            break;
        case 'month':
            element.onkeydown = (e) => dateChange(e)
            element.onchange = dateChange
            break;
        case 'year':
            element.onkeydown = (e) => dateChange(e)
            element.onchange = dateChange
            break;
        case 'cvc':
            element.onkeydown = (e) => cvcChange(e)
            element.onchange = cvcChange
            break;
        default:
            break;
    }
});

form.addEventListener("submit", (e) =>  {
    e.preventDefault();

    let hasErrors = false;
    const error = '<p class="error">Can\'t be blank</p>'
    const monthError = '<p class="error">This isn\'nt a month</p>'
    formElements.forEach(element => {
        let adjacentContent = element.nextSibling
        if ((element.id === 'month') && (Number(element.value)  > 12)) {
            element.style.borderColor = 'hsl(0, 100%, 66%)'
            adjacentContent = expYear.nextSibling
            adjacentContent.remove()
            expYear.insertAdjacentHTML("afterend", monthError)
        }
        if (!element.value) {
            if (element.id === 'month') {
                element.style.borderColor = 'hsl(0, 100%, 66%)'
                adjacentContent = expYear.nextSibling
                adjacentContent.remove()
                expYear.insertAdjacentHTML("afterend", error)
            }
            else {
                element.style.borderColor = 'hsl(0, 100%, 66%)'
                adjacentContent.remove()
                element.insertAdjacentHTML("afterend", error)
            }
            hasErrors = true
        }
    });
    
    if (!hasErrors) {
        const formDiv = document.getElementsByClassName('form-div')[0]
        const completedDiv = document.getElementsByClassName('completed-div')[0]
        formDiv.style.display = 'none'
        completedDiv.style.display = 'block'
    }
})
