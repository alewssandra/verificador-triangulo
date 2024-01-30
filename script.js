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

function verificarTrianguloTipo(lado1, lado2, lado3) {
	if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
		if (lado1 === lado2 && lado2 === lado3) {
			return "Triângulo equilátero"
		} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
			return "Triângulo isósceles"
		} else {
			return "Triângulo escaleno"
		}
	} else {
		return "Triângulo Inválido"
	}
}
