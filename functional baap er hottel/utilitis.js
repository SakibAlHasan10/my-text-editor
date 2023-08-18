

function inputFiledValueById(inputFiledId){
    const inputFiledElement = document.getElementById(inputFiledId);
    const inputFiledString = inputFiledElement.value;
    const inputFiled = parseFloat(inputFiledString);
    inputFiledElement.value= '';
    return inputFiled;
}

function elementValueById(elementId){
    const inputFiledElement = document.getElementById(elementId);
    const inputFiledString = inputFiledElement.innerText;
    const inputFiled = parseFloat(inputFiledString);
    return inputFiled;
}

function setElementValue(elementId, newValue){
    const newElementValue = document.getElementById(elementId);
    newElementValue.innerText = newValue;
}