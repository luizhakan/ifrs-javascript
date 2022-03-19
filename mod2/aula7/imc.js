function calcularIMC(event) {

  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var resultado = document.getElementById("resultado");

  if (peso.value == 0 || peso.value == "") {
    alert("Preencha seu peso");
    resultado.innerHTML += "peso";
    return false;
  }
  if (altura == 0 || altura == "") {
    alert("Preencha a sua altura");
    resultado.innerHTML += `Altura`;
    return false;
  }
  var peso = Number(document.getElementById("peso").value);
  var altura = Number(document.getElementById("altura").value);
  let imc = peso / (altura * altura);
  alert(`Seu imc é : ${imc}`);
  resultado.innerHTML += `Imc ${imc}<br>`;
  return true;
}
