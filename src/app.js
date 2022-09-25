var input = document.getElementById('first-input');
var input2 = document.getElementById('second-input');

var select = document.getElementById('first-select');
var select2 = document.getElementById('second-select');
var select3 = document.getElementById('vegetables-select');

var finalPrice = document.querySelector('.final-price');
var inputTypeValue, resultTypeValue;

var unitChanges = []
var unitChangesDownloaded = false
var unitPrices = [
    {"item": "hagyma", "price": 700},
    {"item": "paprika", "price": 1100},
    {"item": "uborka", "price": 800},
    {"item": "paradicsom", "price": 860},
    {"item": "alma", "price": 500},
    {"item": "narancs", "price": 1300}
]
const unitPriceFormat = new Intl.NumberFormat('hu',
                        {style: 'currency', currency: 'HUF',
                         minimumFractionDigits: 0});


// read from data.json file
const getUnitChanges = () => {
    const requestURL = '/src/db/data.json'
    let request = new XMLHttpRequest()
    request.open('GET', requestURL)
    request.responseType = 'json'
    request.send()
    request.onload = () => {
        prepareUnitChanges(request)
    }
    return request.response
}

const prepareUnitChanges = (req) => {
    if (unitChangesDownloaded) {
        return
    }
    
    for (line of req.response) {
        if (line["name"].length === 0) {
            continue
        }
        if (line["abbreviation"].length === 0 || line["abbreviation"].length > 4) {
            continue
        }
        if (line["ratio"].length <= 0) {
            continue
        }

        unitChanges.push(line)
    }
    unitChangesDownloaded = true
}

getUnitChanges()

inputTypeValue = select.value;
resultTypeValue = select2.value;

const findRatio = (unitName) => {
    return unitChanges.find((unit) => unit.name === unitName || unit.abbreviation === unitName)?.ratio || -1
}

const changeUnit = (amount, fromUnit, toUnit) => {
    fromRatio = findRatio(fromUnit)
    toRatio = findRatio(toUnit)
    if (toRatio === -1 || fromRatio === -1) {
        return 0
    }

    let changedValue = amount * (fromRatio/findRatio(toUnit))
    
    return changedValue
}

const getUnitPrice = () => {
    itemName = select3.value
    item = unitPrices.find((unit) => unit.item === itemName)
    
    let unitPrice = 0;
    if (!item.price) {
        unitPrice = 1
    } else {
        unitPrice = item.price
    }

    return unitPrice
}


const updatePrice = () => {
    let unitPrice = getUnitPrice()
    if (unitPrice < 0) {
        unitPrice = 1
    }
    price = Math.round(input2.value * unitPrice)
    finalPrice.textContent = `Végösszeg: ${unitPriceFormat.format(price)}`
}

function Result() {
    inputTypeValue = select.value;
    resultTypeValue = select2.value;

    nextChange = changeUnit(Number(input.value), inputTypeValue, resultTypeValue)
    input2.value = nextChange

    updatePrice()
}


input.addEventListener("change", Result);
input.addEventListener("keyup", Result);
select.addEventListener("change", Result);
select2.addEventListener("change", Result);
select3.addEventListener("change", Result);
