function fibonacci() {
  var limite = 20; //escolhi ate onde a sequencia deve ir.
  var fibonacci = [0,1]; //armazena num array que começa
  //com os dois primeiros numeros da sequencia 0 e 1. Esses dois
  //numeros são usados como base para que haja a soma da sequencia
  //A soma é feita de forma que, para alem dos numeros 0 e 1,
  //ocorra a soma dos dois numeros anteriores dá o sucessor e assim
  //sucessivamente. até que chegue no que foi definido como limite.
  for (var i = 2; i < limite; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
  }
  document.getElementById("fibonacci").innerHTML = "Sequência de Fibonacci ⇀ " + fibonacci.join(", ") +"...";

}