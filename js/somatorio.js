function somatorio() {
  var input = document.getElementById('numbers').value;
  var regex = /^[0-9]+(,[0-9]+)*$/; 
  var alerta = "";
  
  if (input.trim() == "") {
    alerta = "O campo de números está vazio";
  } else if (!regex.test(input)) {
    alerta = "Digite números separados por vírgula. Exemplo: 1,2,3,4";
  } else if (input.length >= 20) {
    alerta = "Não é possível calcular mais de 20 números";
    console.log("aaaa")
  } else if (input.endsWith(",")) {
    alerta = "Não deixe uma vírgula no final da lista de números";
  } else if (input.startsWith(",")) {
    alerta = "Não comece a lista de números com uma vírgula";
  }
  
  if (alerta != "") {
    alert(alerta);
    return;
  }
  
  var numbers = input.split(",");
  var soma = 0;
  for (let cont = 0; cont < numbers.length; cont++) {
    soma = soma + parseInt(numbers[cont]); 
  }
  document.getElementById('respostaSoma').innerHTML ="Somatório ⇀ " + soma; 
}

 function Limpar() {
  document.getElementById('numbers').value = "";
  document.getElementById('respostaSoma').innerHTML = "";
 }