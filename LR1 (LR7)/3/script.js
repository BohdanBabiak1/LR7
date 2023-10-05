var multiplier1;allRadio
var multiplier2;
var correctTasks = 0;
var taskCounter = -1;
var allRadio = document.querySelectorAll('input')
var generateTask = document.getElementById("generateTask");
var answer = document.getElementById('answer');
var showResultBool = false;

function NextTask() {
    generateTask.disabled = true; 
    if (answer.innerHTML == "Правильно") {correctTasks++; taskCounter++;}
    else {taskCounter++;}
    if(showResultBool){
        document.getElementById("corectResult").innerHTML = `Загальний рахунок ${Math.floor((correctTasks / taskCounter) * 100)}% (${correctTasks} правильних відповідей з ${taskCounter})`;
    }

    allRadio.forEach(function(radio) {
        radio.removeAttribute("disabled");
        radio.checked = false;
    });
    multiplier1 = Math.floor(Math.random() * (9 - 2 + 1)) + 2;
    multiplier2 = Math.floor(Math.random() * (9 - 2 + 1)) + 2;
    document.getElementById("task").innerHTML = `${multiplier1} × ${multiplier2} = `; 
    
    showResultBool = true;
    GenerateTask()
}

function GenerateTask() {
    var correctTaskPosition = Math.floor(Math.random() * 3);

    for (var i = 0; i < 4; i++) {
        if (i == correctTaskPosition) {
            document.getElementById(`radio${i}`).innerHTML = multiplier1 * multiplier2
        } else {
            document.getElementById(`radio${i}`).innerHTML = Math.floor(Math.random() * (100 - 2 + 1)) + 2;
        }

    allRadio[i].addEventListener("click", function(event) {
        var clickedRadioButton = event.target;
        if (clickedRadioButton.checked) {
            if (clickedRadioButton.id == correctTaskPosition){
                answer.innerHTML = "Правильно"
            }
            else{
                answer.innerHTML = `Помилка, правильна відповідь «${multiplier1 * multiplier2}»`;
            }
        }
    });
    
    allRadio.forEach(function(radioButton) {
        radioButton.addEventListener("click", function(event) {
            allRadio.forEach(function(radio) {
                radio.setAttribute("disabled", true);
            });
            event.target.removeAttribute("disabled");
            generateTask.disabled = false;
        });
    });
    }
    
}
NextTask();
GenerateTask();