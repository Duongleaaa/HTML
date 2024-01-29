let inputFields = document.querySelectorAll(".input-weight");

inputFields.forEach(function (inputField) {
  inputField.addEventListener("input", function () {
    let value = parseFloat(inputField.value);
    let unit = inputField.previousElementSibling.innerText.toLowerCase();

    updateFields(value, unit);
  });
});

function updateFields(value, unit) {
  inputFields.forEach(function (inputField) {
    let targetUnit = inputField.previousElementSibling.innerText.toLowerCase();
    if (targetUnit !== unit) {
      let convertedValue = convert(value, unit, targetUnit);
      inputField.value = convertedValue.toFixed(2);
    }
  });
}

function convert(value, fromUnit, toUnit) {
  let conversionTable = {
    pounds: {
      kilograms: 0.45,
      ounces: 16,
      grams: 453.6,
      stones: 0.071,
    },
    kilograms: {
      pounds: 2.2,
      ounces: 35.2,
      grams: 1000,
      stones: 0.16,
    },
    ounces: {
      pounds: 0.063,
      kilograms: 0.03,
      grams: 28.35,
      stones: 0.0045,
    },
    grams: {
      pounds: 0.002,
      kilograms: 0.001,
      ounces: 0.035,
      stones: 0.00016,
    },
    stones: {
      pounds: 14,
      kilograms: 6.35,
      ounces: 224,
      grams: 6350.3,
    },
  };

  return value * conversionTable[fromUnit][toUnit];
}
