let numeroTotal = 0;
function calcul(event) {
    event.preventDefault();
    document.getElementById("resultado").textContent = numeroTotal;
}
function agregarNum(num) {
    if (num > 0) {
        document.getElementById("añadidos").textContent += '+'+ num;
    } else {
        document.getElementById("añadidos").textContent += num;
    }
        numeroTotal += Number(num);
}
function limpiar(event) {
    numeroTotal = 0;
    event.preventDefault();
    document.getElementById("resultado").textContent = numeroTotal;
    document.getElementById("añadidos").textContent = 'Numeros añadidos: ';
}