
const specialties = document.querySelectorAll(".specialty");
specialties.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active from all
    specialties.forEach(btn => btn.classList.remove("active"));
    // Add active to clicked
    button.classList.add("active");

    const specialty = button.innerText.trim();
    let recommendation = "";

    switch (specialty) {
      case "Orthopedists":
        recommendation = "Best for bone & joint issues. Nearby: Apollo Hospitals, Fortis Healthcare.";
        break;
      case "Obesity":
        recommendation = "Specialists in weight management. Nearby: Max Healthcare, AIIMS Obesity Clinic.";
        break;
      case "Neck pain":
        recommendation = "Consult a spine/orthopedic doctor. Nearby: Medanta Hospital, Safdarjung.";
        break;
      case "Neurology":
        recommendation = "Top neurologists for brain-related conditions. Nearby: NIMHANS, AIIMS Neurology.";
        break;
      case "Headache":
        recommendation = "General physician or neurologist consultation recommended. Nearby: Max Healthcare.";
        break;
      case "Shoulder":
        recommendation = "Shoulder & joint specialists available. Nearby: Apollo Hospitals.";
        break;
      case "Eye care":
        recommendation = "Ophthalmologists for complete eye checkup. Nearby: Centre for Sight, Dr. Shroff’s Eye Centre.";
        break;
      default:
        recommendation = "Select a specialty to see recommendations.";
    }

    alert(`${specialty} → ${recommendation}`);
  });
});


// -------- Health Meter (BP & Sugar Analyzer) --------
document.getElementById("healthForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const bp = parseInt(document.getElementById("bp").value);
  const sugar = parseInt(document.getElementById("sugar").value);
  const resultBox = document.getElementById("result");

  let bpStatus = "";
  let sugarStatus = "";

  // BP analysis
  if (bp < 90) {
    bpStatus = "Low BP – You should rest and consult a doctor if it persists.";
  } else if (bp >= 90 && bp <= 120) {
    bpStatus = "Normal BP – Keep maintaining a healthy lifestyle.";
  } else if (bp > 120 && bp <= 140) {
    bpStatus = "Slightly High BP – Reduce salt intake and monitor daily.";
  } else {
    bpStatus = "High BP – Consult a doctor immediately.";
  }

  // Sugar analysis
  if (sugar < 70) {
    sugarStatus = "Low Sugar – Eat something sweet immediately.";
  } else if (sugar >= 70 && sugar <= 140) {
    sugarStatus = "Normal Sugar – Keep following your diet.";
  } else if (sugar > 140 && sugar <= 200) {
    sugarStatus = "Pre-Diabetic range – Regular exercise is recommended.";
  } else {
    sugarStatus = "High Sugar – Consult a doctor immediately.";
  }

  resultBox.innerHTML = `
    <h3>Results:</h3>
    <p><strong>BP:</strong> ${bpStatus}</p>
    <p><strong>Sugar:</strong> ${sugarStatus}</p>
  `;
  resultBox.style.display = "block";
});
