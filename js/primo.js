function testarNumPrimo() {
  var numero = parseInt(document.getElementById('num').value);
  var resposta = document.getElementById('resposta');
  var quantDivisores = 0;
  if(numero < 0) {
    document.getElementById('resposta').innerHTML = "Informe um número positivo"
  } 
  else if (numero.toString().length > 6) {
    // o toString() transforma o numero em string. 
    // depois disso é feito uma contagem das posiçoes da string, 
    // se for maior que 6 é exibido um alerta para que o usuario digite um
    // numero de 6 digitos.
    alert("Por favor, insira um número com até 6 dígitos.");
    Limpar()
    return;
  }
  for (let cont=1; cont<=numero; cont++) {
    if (numero % cont == 0) {
      quantDivisores++;
    }
    if(quantDivisores ==2) {
      resposta.innerHTML = `O número ${numero} é primo. <br> Quantidade de divisores: ${quantDivisores}`;
    } else {
      resposta.innerHTML = `O número ${numero} não é primo. <br> Quantidade de divisores: ${quantDivisores}`;
    }
  }
} 
function Limpar() {
  document.getElementById('resposta').innerHTML = "";
  document.getElementById('num').value = "";
}