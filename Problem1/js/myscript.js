function percentage(){
    //INPUT - number of classes held; number of classess attended
    let classHeld = parseFloat(document.getElementById('classHeld').value);
    let classAttended = parseFloat(document.getElementById('classAttended').value);
    //PROCESS - divide number of classes attended by the number of classes held
    let percentageOfClassesAttended = classAttended / classHeld * 100;
    //OUTPUT - weight converted in kg
    document.getElementById('output').innerHTML = percentageOfClassesAttended.toFixed(1) + "%";
}