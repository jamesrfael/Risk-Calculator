const entryInput = document.getElementById("entry");
const stopInput = document.getElementById("stop");
const riskInput = document.getElementById("risk");
const calculateBtn = document.getElementById("calculate-btn");
const marginNeededEl = document.getElementById("margin-needed");
const setDefaultBtn = document.getElementById("set-default-btn");

// Save default risk
setDefaultBtn.addEventListener("click", () => {
  localStorage.setItem("defaultRisk", riskInput.value);
  alert("Default risk amount set to $" + riskInput.value);
});

// Load saved default risk
window.addEventListener("load", () => {
  const savedRisk = localStorage.getItem("defaultRisk");
  if (savedRisk) riskInput.value = savedRisk;
});

// Calculate Margin Needed
calculateBtn.addEventListener("click", () => {
  const entry = parseFloat(entryInput.value);
  const stop = parseFloat(stopInput.value);
  const risk = parseFloat(riskInput.value);

  if (isNaN(entry) || isNaN(stop) || isNaN(risk) || entry <= stop) {
    marginNeededEl.textContent = "Invalid Input";
    return;
  }

  const riskPerUnit = entry - stop;
  const positionSize = risk / riskPerUnit;
  const marginNeeded = positionSize * entry;

  marginNeededEl.textContent = `$${marginNeeded.toFixed(2)}`;
});
