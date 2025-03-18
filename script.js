// Age Calculator
function calculateAge() {
    let dob = document.getElementById("dob").value;
    if (!dob) {
        document.getElementById("ageResult").innerText = "⚠️ Please enter your Date of Birth!";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    if (today.getMonth() < birthDate.getMonth() || 
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById("ageResult").innerText = "🎉 Your Age: " + age + " years";
}

// BMI Calculator
function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value) / 100; // cm to meters

    if (!weight || !height) {
        document.getElementById("bmiResult").innerText = "⚠️ Please enter valid weight and height!";
        return;
    }

    let bmi = weight / (height * height);
    let bmiStatus = "";

    if (bmi < 18.5) {
        bmiStatus = "Underweight 😕";
    } else if (bmi < 24.9) {
        bmiStatus = "Normal ✅";
    } else if (bmi < 29.9) {
        bmiStatus = "Overweight ⚠️";
    } else {
        bmiStatus = "Obese ❌";
    }

    document.getElementById("bmiResult").innerText = `📊 BMI: ${bmi.toFixed(2)} (${bmiStatus})`;
}

// AI Medical Advisor (Uses OpenAI API or Your Own Backend)
async function getMedicalAdvice() {
    let query = document.getElementById("userQuery").value;
    if (!query) {
        document.getElementById("aiResponse").innerText = "⚠️ Please enter a question!";
        return;
    }

    document.getElementById("aiResponse").innerText = "⏳ Fetching advice...";

    try {
        let response = await fetch("http://YOUR_SERVER_IP:5000/medical_advice", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ query: query })
        });

        let data = await response.json();
        document.getElementById("aiResponse").innerText = "🧠 AI Response: " + data.response;
    } catch (error) {
        document.getElementById("aiResponse").innerText = "❌ Error getting response!";
    }
          }
