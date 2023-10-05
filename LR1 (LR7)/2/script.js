var multiplier1;
var multiplier2;
var correctTasks = 0
var taskCounter = 0

var nextTaskButton = document.getElementById("generateTask");
var checkButton = document.getElementById("checkButton");

function GenerateTask() {
    multiplier1 = Math.floor(Math.random() * (9 - 2 + 1)) + 2;
    multiplier2 = Math.floor(Math.random() * (9 - 2 + 1)) + 2;
    document.getElementById("number_input").value = "";
    document.getElementById("task").innerHTML = `${multiplier1} × ${multiplier2} = `;
    nextTaskButton.disabled = true;
    checkButton.disabled = false;
}

function ChekTask() {
    var input = document.getElementById("number_input").value;
    if (input == multiplier1 * multiplier2) {
        correctTasks += 1;
        taskCounter += 1;
    } else {
        taskCounter += 1;
        document.getElementById("answer").innerHTML = `Помилка, правильна відповідь «${multiplier1 * multiplier2}»`;
    }

    document.getElementById("corectResult").innerHTML = `Загальний рахунок ${Math.floor((correctTasks / taskCounter) * 100)}% (${correctTasks} правильних відповідей з ${taskCounter})`;
    nextTaskButton.disabled = false;
    checkButton.disabled = true;
}

GenerateTask();