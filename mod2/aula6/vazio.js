function verificaForm(){
  if(document.getElementById("nome").value == ""){
  var nome = document.getElementById("nome");
	document.getElementById("nome").style.borderColor = "red";
	document.getElementById("nome").style.backgroundColor = "#ffe5e5";
	document.getElementById("nome").focus();
    return false;
  } else if(document.getElementById("nome").value != ""){
    var nome = document.getElementById("nome").value;
    alert(`Usuário : ${nome}`)
  }
  return true;
}