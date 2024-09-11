let horaInicio = parseInt(prompt("Ingrese la hora actual"));
let minutosInicio = parseInt(prompt("Ingrese los minutos de la hora actual"));
let numeroCiclos = parseInt(prompt("Ingrese la cantidad de ciclos de sueño"));

for (let i = 0; i < numeroCiclos; i++){
    horaInicio += 1;
    if (horaInicio >= 13){
        horaInicio = 1;
    }
    minutosInicio += 30;
    if (minutosInicio >= 60){
        horaInicio += 1;
        minutosInicio -= 60;
    }
}

let cantHorasDormir = (parseFloat(1.5 * numeroCiclos));
document.write("La alarma debe sonar a las "+horaInicio+":"+minutosInicio+" horas. <br/>");
document.write("Usted va a dormir "+cantHorasDormir+" horas.");