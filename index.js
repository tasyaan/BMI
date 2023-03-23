// Declare form of HTML to enable element inside of it
const form = document.querySelector('.form')

let weightInput = form.querySelector('[name=weight')
let heightInput = form.querySelector('[name=height')
let ageInput = form.querySelector('[name=age')

// When button click, trigger confirmation dialog and function validateForm()
form.addEventListener("submit", function(event) {
    event.preventDefault();
    Swal.fire({
        title: 'Are you sure?',
        text: "You want to calculate BMI with the entered data?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ffd44c',
        cancelButtonColor: '#bebebe',
        confirmButtonText: 'Calculate'
      }).then((result) => {
        if (result.isConfirmed) {
            validateForm();
        }
      });
});

// Validate form input using sweet alert for styling
function validateForm() {
    let weight = parseFloat(weightInput.value)
    let height = parseFloat(heightInput.value)
    let age = parseFloat(ageInput.value)
    
    if (isNaN(weight) || weight < 0 || weight > 200) {
        Swal.fire(
            'Oops!',
            'Please enter a valid weight',
            'warning'
        );
    } else if (isNaN(height) || height < 0 || height > 300) {
        Swal.fire(
            'Oops!',
            'Please enter a valid height',
            'warning'
        );
    } else if (isNaN(age) || age < 0 || age > 150) {
        Swal.fire(
            'Oops!',
            'Please enter a valid age',
            'warning'
        );
    } else {
        calculateBMI()
    }
}

function calculateBMI() {
    // Convert string into a floating number
    let weight = parseFloat(weightInput.value)
    let height = parseFloat(heightInput.value)

    // Calculate BMI
    let bmi = weight / Math.pow(height / 100, 2);

    // BMI result selection
    if (bmi < 18.5) {
        category = "Underweight";
        explanation = "Individuals with a BMI below 18.5 are considered underweight, which may indicate malnutrition, underlying health problems, or unhealthy weight loss practices."
        tips = "Health tips:<br>-Increase your calorie intake to gain weight.<br>-Include more high-protein foods in your diet, such as lean meats, eggs, and beans.<br>-Exercise regularly to build muscle and increase your appetite.<br>-Avoid processed foods and sugary drinks."
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal (Ideal)";
        explanation = "Individuals with a BMI between 18.5 and 24.9 are considered to have a normal weight. This category has the lowest risk of developing weight-related health problems."
        tips = "Health tips:<br>-Maintain a balanced diet with a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats.<br>-Engage in regular physical activity, such as brisk walking, cycling, or swimming.<br>-Avoid smoking and excessive alcohol consumption.<br>-Get enough sleep and manage your stress levels."
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
        explanation = "Individuals with a BMI between 25 and 29.9 are considered overweight, which may indicate an increased risk of developing weight-related health problems, such as high blood pressure, type 2 diabetes, and heart disease."
        tips = "Health tips:<br>-Reduce your calorie intake and limit your portion sizes.<br>-Choose healthier food options, such as whole grains, fruits, vegetables, and lean proteins.<br>-Increase your physical activity level to burn more calories.<br>-Consult with a healthcare professional or registered dietitian for personalized advice."
    } else {
        category = "Obese"
        explanation = "Individuals with a BMI between 30 and 34.9 are considered to have obesity (Class I), which may increase the risk of developing weight-related health problems, including heart disease, stroke, and some types of cancer."
        tips = "Health tips:<br>-Follow a structured weight-loss program under the guidance of a healthcare professional or registered dietitian.<br>-Set realistic goals and track your progress.<br>-Increase your physical activity level gradually and engage in both aerobic and strength-training exercises.<br>-Seek support from family, friends, or a support group."
    }

    // Get the result element
    let bmiCategory1 = document.querySelector('#bmi-category-1')
    let bmiCategory2 = document.querySelector('#bmi-category-2')
    let bmiCategory3 = document.querySelector('#bmi-category-3')
    let bmiCategory4 = document.querySelector('#bmi-category-4')
    let bmiCategory5 = document.querySelector('#bmi-category-5')
    let bmiCategory6 = document.querySelector('#bmi-category-6')

    let bmiResult = document.querySelector('#bmi-result');

    // Round the result to two decimal places
    let roundedBmi = bmi.toFixed(2);

    // Display the result on the web page
    bmiCategory1.textContent = `${category}`
    bmiResult.textContent = `BMI = ${roundedBmi}`
    bmiCategory2.textContent = `Your category is ${category}`
    bmiCategory3.textContent = `${explanation}`
    bmiCategory4.innerHTML = `${tips}`;

    // Display or hide the results page
    document.getElementById("results").style.display = "block";
    document.getElementById("calculator").style.display = "none";
    if (bmi < 30) {
        document.getElementById("obese-only").style.display = "none";
    } else {
        document.getElementById("obese-only").style.display = "block";
    }
}

