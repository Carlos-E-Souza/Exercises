const { stdin: input, stdout: output } = require("process")
const readline = require("readline")
const rl = readline.createInterface({
    input,
    output,
})

const inverterString = (word) => {
    let inversa = []
    for (let index = word.length; index >= 0; index--) {
        const element = word[index]
        inversa.push(element)
    }
    return inversa.join("")
}

rl.question("Palavra para inverter:", (word) => {
    console.log(inverterString(word))
    rl.close()
})
