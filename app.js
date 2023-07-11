// VARIABLES
// Ranges
const Engineer = document.querySelector('#engineer');
const Non_Engineer = document.querySelector('#non-engineer');
const Average = document.querySelector('#average');
// Output
const EngineerOutput = document.querySelector('.engineer');
const Non_EngineerOutput = document.querySelector('.non-engineer');
const AverageOutput = document.querySelector('.average');
// Maturity
const MaturityLevel1 = document.querySelector('#level1');
const MaturityLevel2 = document.querySelector('#level2');
const MaturityLevel3 = document.querySelector('#level3');

// Calculated Outputs
const Total_team = document.querySelector('#total_team');
const Approx_cost = document.querySelector('#approx_cost');
const Expected_improvement = document.querySelector('#expected_improvement');
const Eliminated_year = document.querySelector('#eliminated_year');

// Setting default range values
EngineerOutput.innerHTML = Engineer.value;
Non_EngineerOutput.innerHTML = Non_Engineer.value;
AverageOutput.innerHTML = Average.value

function SetDefault() {
    let total_team = +Engineer.value + +Non_Engineer.value;
    Total_team.innerHTML = total_team;
    Approx_cost.innerHTML = total_team * +Average.value;
}

// Handle range changes
function HandleRangeChange(rangeEL) {
    rangeEL.addEventListener("change", () => {
        SetDefault()
        EngineerOutput.innerHTML = Engineer.value;
        Non_EngineerOutput.innerHTML = Non_Engineer.value;
        AverageOutput.innerHTML = Average.value;
    })
}
HandleRangeChange(Engineer);
HandleRangeChange(Non_Engineer);
HandleRangeChange(Average);

// Maturity

function checkStatus() {
    if (MaturityLevel1.checked) {
        MaturityLevel2.checked = false;
        MaturityLevel3.checked = false
    } else if (MaturityLevel2.checked) {
        MaturityLevel1.checked = false;
        MaturityLevel3.checked = false
    }
    else if (MaturityLevel3.checked) {
        MaturityLevel2.checked = false;
        MaturityLevel1.checked = false
    }
    else {
        MaturityLevel2.checked = false;
        MaturityLevel3.checked = false
        MaturityLevel1.checked = false
    }
}
function HandleChecked(radioEl) {
    let previousValue;
    radioEl.addEventListener('click', () => {
        console.log("called")
        checkStatus();
        if (previousValue) {
            radioEl.checked = true;
            previousValue = false
        } else {
            radioEl.checked = false;
            previousValue = true;
        }
    })
}
HandleChecked(MaturityLevel1);
HandleChecked(MaturityLevel2);
HandleChecked(MaturityLevel3);
