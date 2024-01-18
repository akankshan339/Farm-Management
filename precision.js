function calculateYield() {
    var fieldArea = parseFloat(document.getElementById('fieldArea').value);
    var seedDensity = parseFloat(document.getElementById('seedDensity').value);
    var growthRate = parseFloat(document.getElementById('growthRate').value);

    if (isNaN(fieldArea) || isNaN(seedDensity) || isNaN(growthRate)) {
        alert('Please enter valid numeric values .');
        return;
    }

    var yieldEstimation = (fieldArea * seedDensity * (1 + growthRate / 100)).toFixed(2);

    document.getElementById('result').innerHTML = 'Estimated Yield: ' + yieldEstimation + ' units';
}
