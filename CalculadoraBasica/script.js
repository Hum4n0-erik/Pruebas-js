function calcul(num1, num2) {
    const n1 = document.getElementById("num1").value;
    const n2 = document.getElementById("num2").value;

    const suma = Number(n1) + Number(n2);
    document.getElementById("resultado").textContent = suma;
}