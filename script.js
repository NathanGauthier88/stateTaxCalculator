function addTax() {
    let dollarInput = parseFloat(document.getElementById("input").value);
    let stateTaxRates = parseFloat(document.getElementById("taxCalc").value)/ 100;
    let totalFinal = dollarInput * stateTaxRates; 
    document.getElementById("result").innerHTML = totalFinal + dollarInput;
    };
    
