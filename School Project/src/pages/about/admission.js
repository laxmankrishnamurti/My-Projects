const guardInput = document.querySelector('#guard-addr')
const currentCheck = document.querySelector('#current-check')
const parmanentCheck = document.querySelector('#permanent-check')
const currentBox = document.querySelector('#current-addr-box')
const permanentBox = document.querySelector('#permanent-addr-box')

currentCheck.addEventListener('change', () => {
    let guardInputValue = guardInput.value;

    if (currentCheck.checked) {
        currentBox.textContent = guardInputValue
    } else {
        currentBox.textContent = ""
    }
})

parmanentCheck.addEventListener('change', () => {
    let guardInputValue = guardInput.value;

    if (parmanentCheck.checked) {
        permanentBox.textContent = guardInputValue
    } else {
        permanentBox.textContent = ""
    }
})