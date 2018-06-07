function getInput() {
    var result = [];
    var length = input.value.length;
    var lastSymbol = input.value[length - 1];
    if (!Number.isInteger(+lastSymbol) || lastSymbol == " ")
        input.value = input.value.substring(0, length - 1);
    for (var i = 0; i < input.value.length; i++)
        result.push(input.value[i]);
    return result;
}

module.exports = getInput;