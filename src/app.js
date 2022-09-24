var input = document.getElementById('first-input');
var input2 = document.getElementById('second-input');
var select = document.getElementById('first-select');
var select2 = document.getElementById('second-select');
var inputTypeValue, resultTypeValue;

var unitChanges = []

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

function Result() {
    inputTypeValue = select.value;
    resultTypeValue = select2.value;

    input2.value = changeUnit(Number(input.value), inputTypeValue, resultTypeValue)
}

input.addEventListener("keyup", Result);
select.addEventListener("change", Result);
select2.addEventListener("change", Result);
// resultTypeValue.addEventListener("change", Result);
