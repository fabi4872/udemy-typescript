const btnAdd = document.getElementById("btn-add")!;
const input1 = document.getElementById("number1")! as HTMLInputElement;
const input2 = document.getElementById("number2")! as HTMLInputElement;

const add = (number1: number, number2: number) => {
  return number1 + number2;
};

btnAdd.addEventListener("click", () => {
  console.log(add(+input1.value, +input2.value));
});
