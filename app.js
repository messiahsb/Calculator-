const buttons = document.querySelectorAll(".calc-button");
const screen = document.querySelector(".screen-box");

for (const button of buttons) {
    button.addEventListener("click", ()=> 
    function printNumber() {
        const currentNumber = button.value;
        screen.textContent = `${currentNumber}`;
      });
  }



