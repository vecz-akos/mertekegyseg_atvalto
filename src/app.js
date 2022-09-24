var input = document.getElementById('first-input');
var input2 = document.getElementById('second-input');
var select = document.getElementById('first-select');
var select2 = document.getElementById('second-select');
var inputTypeValue, resultTypeValue;

input.addEventListener("keyup", Result);
select.addEventListener("change", Result);
resultTypeValue.addEventListener("change", Result);

inputTypeValue = select.value;
resultTypeValue = select2.value;

function Result() {
    inputTypeValue = select.value;
    resultTypeValue = select2.value;

    // TONNA
    if(inputTypeValue === "tonna" && resultTypeValue === "tonna") {
        input2.value = Number(input.value) * 1;
    } else if(inputTypeValue === "tonna" && resultTypeValue === "mázsa") {
        input2.value = Number(input.value) * 10;
    } else if(inputTypeValue === "tonna" && resultTypeValue === "kg") {
        input2.value = Number(input.value) * 1000;
    } else if(inputTypeValue === "tonna" && resultTypeValue === "dkg") {
        input2.value = Number(input.value) * 100000;
    } else if(inputTypeValue === "tonna" && resultTypeValue === "g") {
        input2.value = Number(input.value) * 1000000;
    } else if(inputTypeValue === "tonna" && resultTypeValue === "mg") {
        input2.value = Number(input.value) * 1000000000;
    }

    // MAZSA
    if(inputTypeValue === "mázsa" && resultTypeValue === "tonna") {
        input2.value = Number(input.value) * 0.1;
    } else if(inputTypeValue === "mázsa" && resultTypeValue === "mázsa") {
        input2.value = Number(input.value) * 1;
    } else if(inputTypeValue === "mázsa" && resultTypeValue === "kg") {
        input2.value = Number(input.value) * 100;
    } else if(inputTypeValue === "mázsa" && resultTypeValue === "dkg") {
        input2.value = Number(input.value) * 10000;
    } else if(inputTypeValue === "mázsa" && resultTypeValue === "g") {
        input2.value = Number(input.value) * 100000;
    } else if(inputTypeValue === "mázsa" && resultTypeValue === "mg") {
        input2.value = Number(input.value) * 100000000;
    }

    // KG
    if(inputTypeValue === "kg" && resultTypeValue === "tonna") {
        input2.value = Number(input.value) * 0.001;
    } else if(inputTypeValue === "kg" && resultTypeValue === "mázsa") {
        input2.value = Number(input.value) * 0.01;
    } else if(inputTypeValue === "kg" && resultTypeValue === "kg") {
        input2.value = Number(input.value) * 1;
    } else if(inputTypeValue === "kg" && resultTypeValue === "dkg") {
        input2.value = Number(input.value) * 100;
    } else if(inputTypeValue === "kg" && resultTypeValue === "g") {
        input2.value = Number(input.value) * 1000;
    } else if(inputTypeValue === "kg" && resultTypeValue === "mg") {
        input2.value = Number(input.value) * 1000000;
    }

    // DKG
    if(inputTypeValue === "dkg" && resultTypeValue === "tonna") {
        input2.value = Number(input.value) * 0.00001;
    } else if(inputTypeValue === "dkg" && resultTypeValue === "mázsa") {
        input2.value = Number(input.value) * 0.0001;
    } else if(inputTypeValue === "dkg" && resultTypeValue === "kg") {
        input2.value = Number(input.value) * 0.01;
    } else if(inputTypeValue === "dkg" && resultTypeValue === "dkg") {
        input2.value = Number(input.value) * 1;
    } else if(inputTypeValue === "dkg" && resultTypeValue === "g") {
        input2.value = Number(input.value) * 10;
    } else if(inputTypeValue === "dkg" && resultTypeValue === "mg") {
        input2.value = Number(input.value) * 10000;
    }

    // G
    if(inputTypeValue === "g" && resultTypeValue === "tonna") {
        input2.value = Number(input.value) * 0.000001;
    } else if(inputTypeValue === "g" && resultTypeValue === "mázsa") {
        input2.value = Number(input.value) * 0.00001;
    } else if(inputTypeValue === "g" && resultTypeValue === "kg") {
        input2.value = Number(input.value) * 0.001;
    } else if(inputTypeValue === "g" && resultTypeValue === "dkg") {
        input2.value = Number(input.value) * 0.1;
    } else if(inputTypeValue === "g" && resultTypeValue === "g") {
        input2.value = Number(input.value) * 1;
    } else if(inputTypeValue === "g" && resultTypeValue === "mg") {
        input2.value = Number(input.value) * 1000;
    }

     // MG
     if(inputTypeValue === "mg" && resultTypeValue === "tonna") {
        input2.value = Number(input.value) * 0.000000001;
    } else if(inputTypeValue === "mg" && resultTypeValue === "mázsa") {
        input2.value = Number(input.value) * 0.00000001;
    } else if(inputTypeValue === "mg" && resultTypeValue === "kg") {
        input2.value = Number(input.value) * 0.000001;
    } else if(inputTypeValue === "mg" && resultTypeValue === "dkg") {
        input2.value = Number(input.value) * 0.0001;
    } else if(inputTypeValue === "mg" && resultTypeValue === "g") {
        input2.value = Number(input.value) * 0.001;
    } else if(inputTypeValue === "mg" && resultTypeValue === "mg") {
        input2.value = Number(input.value) * 1;
    }
}