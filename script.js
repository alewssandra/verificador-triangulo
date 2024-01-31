function verificarTriangulo() {
	const lado1 = parseFloat(document.getElementById("lado1").value)
	const lado2 = parseFloat(document.getElementById("lado2").value)
	const lado3 = parseFloat(document.getElementById("lado3").value)

	console.log("Lados do Triângulo:", lado1, lado2, lado3)

	const resultadoElement = document.getElementById("resultado")
	const resultado = verificarTrianguloTipo(lado1, lado2, lado3)

	console.log("Resultado:", resultado)
	resultadoElement.textContent = resultado
}

// Função para verificar e classificar o tipo de triângulo com base nos comprimentos dos lados.
function verificarTrianguloTipo(lado1, lado2, lado3) {
	// Verifica se os comprimentos fornecidos podem formar um triângulo.
	if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
		// Verifica o tipo de triângulo com base nos comprimentos dos lados.
		if (lado1 === lado2 && lado2 === lado3) {
			// Todos os lados iguais: Triângulo equilátero.
			return "Triângulo equilátero";
		} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
			// Pelo menos dois lados iguais: Triângulo isósceles.
			return "Triângulo isósceles";
		} else {
			// Todos os lados diferentes: Triângulo escaleno.
			return "Triângulo escaleno";
		}
	} else {
		// Caso os comprimentos dos lados não formem um triângulo válido.
		return "Triângulo Inválido";
	}
}

