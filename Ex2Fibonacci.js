const { stdin, stdout } = require("process")
const readline = require("readline")
const rl = readline.createInterface({
    input: stdin,
    output: stdout,
})

const fibonacci = (n) => {
    var result = "Não pertence a sequência"

    if (n < 0) return result

    let anterior = 0,
        atual = 1,
        proximo = 0

    for (anterior; anterior <= n; anterior) {
        if (n === anterior) {
            result = "Pertence a sequência"
        }
        proximo = anterior + atual
        anterior = atual
        atual = proximo
    }

    return result
}

rl.question("Digite um número:", (n) => {
    console.log(fibonacci(Number(n)))
    rl.close()
})
