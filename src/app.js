var input = document.getElementById('first-input');
var input2 = document.getElementById('second-input');
var select = document.getElementById('first-select');
var select2 = document.getElementById('second-select');
var select3 = document.getElementById('vegetables-select');
var finalPrice = document.querySelector('.final-price');
var inputTypeValue, resultTypeValue;

var unitChanges = []
var unitPrices = [
    {"item": "hagyma", "price": 700},
    {"item": "paprika", "price": 1100}
]

const getUnitChanges = () => {
    const requestURL = '/src/db/data.json'
    let request = new XMLHttpRequest()
    request.open('GET', requestURL)
    request.responseType = 'json'
    request.send()
    request.onload = () => {
        unitChanges = request.response
    }
    return request.response
}

getUnitChanges()

inputTypeValue = select.value;
resultTypeValue = select2.value;

const findRatio = (unitName) => {
    return unitChanges.find((unit) => unit.name === unitName || unit.abbreviation === unitName)?.ratio || -1
}

const changeUnit = (amount, fromUnit, toUnit) => {
    return amount * (findRatio(fromUnit)/findRatio(toUnit))
}

const getUnitPrice = () => {
    itemName = select3.value
    return unitPrices.find((unit) => unit.item === itemName)?.price || -1
}

const updatePrice = () => {
    let unitPrice = getUnitPrice()
    if (unitPrice < 0) {
        unitPrice = 1
    }
    price = input2.value * unitPrice
    finalPrice.textContent = `Végösszeg: ${price} Ft`
}

function Result() {
    inputTypeValue = select.value;
    resultTypeValue = select2.value;

    nextChange = changeUnit(Number(input.value), inputTypeValue, resultTypeValue)
    input2.value = nextChange

    updatePrice()
}

input.addEventListener("keyup", Result);
select.addEventListener("change", Result);
select2.addEventListener("change", Result);
select3.addEventListener("change", Result);
