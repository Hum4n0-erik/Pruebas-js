let numeroTotal = "";
function suma(event) {
    let digits = numeroTotal.split(',');
    let suma = 0;
    event.preventDefault();
    for (let num of digits) {
        suma += Number(num);
    }
    document.getElementById("resultado").textContent = suma;
}
function multi(event) {
    event.preventDefault();
    let multi = 0;
    let digits = numeroTotal.split(',');
    for (let num of digits) {
        if (multi == 0) {
            multi = Number(num);
        } else {
            multi = multi* Number(num);
        }
      }
    document.getElementById("resultado").textContent = multi;
}
function dividir(event) {
    event.preventDefault();
    let multi = 0;
    let digits = numeroTotal.split(',');
    for (let num of digits) {
        if (multi == 0) {
            multi = Number(num);
        } else {
            multi = multi / Number(num);
        }
      }
    document.getElementById("resultado").textContent = multi;
}

function agregarNum(num) {
    if (num > 0) {
        document.getElementById("añadidos").textContent += '+'+ num;
    } else {
        document.getElementById("añadidos").textContent += num;
    }
    numeroTotal += ',' +num;
}
function limpiar(event) {
    numeroTotal = "";
    event.preventDefault();
    document.getElementById("resultado").textContent = 0;
    document.getElementById("añadidos").textContent = 'Numeros añadidos: ';
}