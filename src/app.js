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