function maiuscula() {
  var letras = document.getElementById("texto").value;
  var maiuscula = letras.toUpperCase();
  document.getElementById("texto").value = maiuscula;
}
