document.getElementById("calculate-btn").addEventListener("click", function() {
    // Get user inputs
    const entryPrice = parseFloat(document.getElementById("entry").value);
    const stopPrice = parseFloat(document.getElementById("stop").value);
    const riskAmount = parseFloat(document.getElementById("risk").value);
  
    // Calculate risk per unit
    const riskPerUnit = Math.abs(entryPrice - stopPrice);
  
    // Calculate margin needed
    const positionSize = riskAmount / riskPerUnit;
    const marginNeeded = positionSize * entryPrice;
  
    // Display the results
    document.getElementById("risk-per-unit").textContent = riskPerUnit.toFixed(2);
    document.getElementById("margin-needed").textContent = marginNeeded.toFixed(2);
  });
  