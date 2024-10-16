
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bmi-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const weight = parseFloat(document.getElementById('weight').value);
        const heightCm = parseFloat(document.getElementById('height').value);
        const heightM = heightCm / 100; // Convert height to meters

        if (weight > 0 && heightM > 0) {
            const bmi = (weight / (heightM * heightM)).toFixed(2);
            let category;

            if (bmi < 18.5) {
                category = 'Underweight';
            } else if (bmi >= 18.5 && bmi < 24.9) {
                category = 'Normal weight';
            } else if (bmi >= 25 && bmi < 29.9) {
                category = 'Overweight';
            } else {
                category = 'Obesity';
            }

            resultDiv.textContent = `Your BMI is ${bmi}. Category: ${category}`;
        } else {
            resultDiv.textContent = 'Please enter valid values.';
        }
    });
});
