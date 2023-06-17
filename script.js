/*bmi formula : 
bmi = weight in pounds/height*height in inches

Range criteria : 
1. Underweight: Less than 18.5.
2. Optimum range: 18.5 to 24.9.
3. Overweight: 25 to 29.9.
4. Class I obesity: 30 to 34.9.
5. Class II obesity: 35 to 39.9.
6. Class III obesity: More than 40
*/

const x = document.getElementById("weight");
const y = document.getElementById("height");
const gola = document.querySelector(".calc");
const descElem = document.querySelector(".desc");
const bmiCategoryElem = document.querySelector(".bmi-category");
const container = document.querySelector(".container");

//calculating bmi
let bmiMetric;
function BMI() {
  let weight = x.value;
  let height = y.value;
  bmiMetric = weight / (height * height);
  bmiMetric = bmiMetric.toFixed(1);
  //   console.log(bmiMetric);
}

//BMI category description
function checkCategory(value) {
  if (isFinite(value)) {
    if (value >= 30.0) {
      bmiCategoryElem.style.color = "#b00";
      gola.style.color = "#b00";
      gola.style.borderColor = "#b00";
      return `Obese`;
    } else if (value >= 25.0 && value <= 29.9) {
      bmiCategoryElem.style.color = "#8a4f02";
      gola.style.color = "#8a4f02";
      gola.style.borderColor = "#8a4f02";
      return `Overweight`;
    } else if (value >= 18.5 && value <= 24.9) {
      bmiCategoryElem.style.color = "#2ca1bc";
      gola.style.color = "#2ca1bc";
      gola.style.borderColor = "#2ca1bc";
      return `Normal`;
    } else if (value <= 18.4) {
      bmiCategoryElem.style.color = "#625301";
      gola.style.color = "#625301";
      gola.style.borderColor = "#625301";
      return `Underweight`;
    }
  } else {
    bmiCategoryElem.style.color = "black";
    return ``;
  }
}

//updating ui
function updateUI() {
  BMI();

  if (isFinite(bmiMetric)) {
    gola.innerHTML = bmiMetric;
  }

  bmiCategoryElem.innerHTML = checkCategory(bmiMetric);
}

//WHENEVER USER INPUTS SOMETHING IN THE CONTAINER, INVOKE UPDATEUI FUNCTION
container.addEventListener("input", updateUI);
