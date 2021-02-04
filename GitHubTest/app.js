//const calculateBtn = document.querySelector('calculateButton'); // perche ho un solo bottone
const resetBtn = document.getElementById('resetButton');
const calculateBtn = document.getElementById('calculateButton');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');
const results = document.getElementById('result');

const calculateBmi = () => {
    const enteredHeight = +heightInput.value; // Conver to a number with +
    const enteredWeight = +weightInput.value;

    const bmi = (enteredWeight / (enteredHeight + enteredHeight)).toFixed(2);

    if (isNaN(bmi)){
        alert('Not a number, check it!');
        heightInput.value = "";
        weightInput.value = "";
        return;
    }

    const resultElement = document.createElement('ion-card');
    resultElement.innerHTML = `
        <ion-card-content>
            <h2>${bmi}</h2>
        </ion-card-content>
    `;
    results.innerHTML = '';
    results.appendChild(resultElement);
};

const resetTextInputs = () => {
    heightInput.value = "";
    weightInput.value = "";
};

calculateBtn.addEventListener('click', calculateBmi);
resetBtn.addEventListener('click', resetTextInputs);