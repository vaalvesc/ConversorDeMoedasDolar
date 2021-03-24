// const informarEmDolar = prompt("Qual valor em dolar voce deseja converter?");
// const valorEmDolar = parseFloat(informarEmDolar);

// const valorEmReal = valorEmDolar * 5.51;
// const dadoRealDecimal = valorEmReal.toFixed(2);

// alert(dadoRealDecimal)

function converter() {
    const valorEmDolar = document.getElementById("valorDolar").value
    const valorEmReal = valorEmDolar * 5.50
       document.getElementById("valorReal").innerHTML ="R$" + valorEmReal.toFixed(2)
}




// alert(valorEmReal + " reais e igual a " +valorEmDolar + " dolares")

//_____Revisão_____
//variáveis = var (int - float - sting)
//alert = cria um pop-up com informação na tela
//prompt = cria um pop-up com campo de inserção de dados
//ParseInt = transforma string em inteiro
//parseFloat = transforma string em flutuante
//operações + somar * multiplicar
// + em alguns casos concatena dois ou mais elementos

