// highlight inputs based on whether or not they're selected
document.addEventListener("DOMContentLoaded", function () { //page load
    let inputs = document.querySelectorAll('input'); //select all inputs

    inputs.forEach(function (input) {
        input.addEventListener("click", function () { //on click of any input
            inputs.forEach(function (otherInput) {// ensure that none are styled w/ "clicked"
                otherInput.classList.remove("clicked");
            });

            this.classList.add("clicked"); //except for input that was just selected
        })
    })
})

//tip calculator
document.addEventListener('DOMContentLoaded', function () { //page load

    // Initial selected elements
    const billTotalInput = document.getElementById('totalbill');
    const billSplitInput = document.getElementById('peoplecount');
    const customTipInput = document.getElementById('customtip');
    const tenButton = document.getElementById('tenperctip');
    const fifteenButton = document.getElementById('fifteenperctip');
    const twentyButton = document.getElementById('twentyperctip');
    const calculatorButton = document.getElementById('calculator');
    const totalPerPersonInput = document.getElementById('totalperperson');

    // Clear the total input initially
    totalPerPersonInput.value = '';

    // Set variables to store tip percentage and custom tip amounts
    let tipPercentage = 0;
    let customTip = 0;

    // Add click listeners to all percentage buttons
    tenButton.addEventListener('click', function () {
        tipPercentage = 0.1; // Set tip percentage
        customTip = 0; // Reset custom tip
        customTipInput.value = ''; // Clear custom tip input
        customTipInput.disabled = true; // Disable custom tip input
    });

    fifteenButton.addEventListener('click', function () { //duplicates above code for 15%
        tipPercentage = 0.15;
        customTip = 0;
        customTipInput.value = '';
        customTipInput.disabled = true;
    });

    twentyButton.addEventListener('click', function () { //duplicates above code for 20%
        tipPercentage = 0.2;
        customTip = 0;
        customTipInput.value = '';
        customTipInput.disabled = true;
    });

    // Add click listener to calculator button
    calculatorButton.addEventListener('click', function () {
        // set variables for bill total & # of splits
        let billTotal = parseFloat(billTotalInput.value);
        let billSplit = parseInt(billSplitInput.value);
        // if prior entries are invalid
        if (isNaN(billTotal) || isNaN(billSplit) || billSplit <= 0) {
            alert('Please enter valid numbers.');
            return;
        }
        // if custom tip is enabled, but is NaN or 0, throw alert
        if (!customTipInput.disabled) {
            customTip = parseFloat(customTipInput.value);
            if (isNaN(customTip) || customTip < 0) {
                alert('Please enter a valid custom tip amount.');
                return;
            }
        }
        //create totalWithTip
        let totalWithTip;

        if (customTipInput.disabled) {
            // If customTipInput is disabled, use the predefined tip percentage
            totalWithTip = billTotal * (1 + tipPercentage);
        } else {
            // Otherwise, use the custom tip amount
            totalWithTip = billTotal + customTip;
        }
        //create variable for totalperperson
        let totalPerPerson = totalWithTip / billSplit;

        totalPerPersonInput.value = totalPerPerson.toFixed(2);
    });

});

//active button code
document.addEventListener('DOMContentLoaded', function () {
    const tipButtons = document.querySelectorAll('#tenperctip, #fifteenperctip, #twentyperctip');
    const calculatorButton = document.getElementById('calculator');
    let activeButton = null;

    tipButtons.forEach(button => {
        button.addEventListener('click', function () { //if buttons are active, disable.
            if (activeButton) {
                activeButton.classList.remove('active');
            }
            this.classList.add('active'); // enable the button that was clicked
            activeButton = this;
        });
    });

    calculatorButton.addEventListener('click', function () { //once calculator button is enabled, disable 'active' for all buttons.
        if (activeButton) {
            activeButton.classList.remove('active');
            activeButton = null;
        }
    });
});

