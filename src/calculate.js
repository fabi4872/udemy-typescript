var btnAdd = document.getElementById("btn-add");
var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");
var add = function (number1, number2) {
    return number1 + number2;
};
btnAdd.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
