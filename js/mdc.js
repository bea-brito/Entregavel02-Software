function mdc() {
  var a = document.getElementById('a').value;
  var b = document.getElementById('b').value;

  var menorNum, maiorNum; 
  var auxiliar;

  if(a>b) {
    maiorNum = a;
    menorNum = b;
  } else {
    maiorNum = b;
    menorNum = a;
  }
  while((maiorNum%menorNum)!=0) {
    auxiliar = menorNum;
    menorNum = (maiorNum%menorNum);
    maiorNum=auxiliar;
  }
  document.getElementById('resultadoMdc').innerHTML = "MDC  ⇀ " +menorNum;
}