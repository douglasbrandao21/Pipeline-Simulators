//Flags responsáveis por controlar as execuções dos comandos Jumps
let flagJmp = 0
let flagJe = 0
let flagJne = 0
let flagJg = 0
let flagJge = 0
let flagJl = 0
let flagJle = 0


function getRandom() {
    return Math.floor(Math.random() * 5 + 1)
}

function getFinalAdressLabel(label) {
    for (let i = 0; i < labels.length; i++) {
        if (labels[i].name == label) {
            return labels[i].adress
        }
    }
}

//Recebe uma instrução como parametros e retorna o endereço de seus operadores (vetor Registers)
function calculateOperators(instruction) {
    let adressOperators = new Array()
    for (j = 0; j < instruction.operators.length; j++) {
        for (let i = 0; i < Registers.length; i++) {
            if (Registers[i].name == instruction.operators[j]) {
                adressOperators.push(i)
                break
            }
        }
    }
    return adressOperators
}

//Setar valores iniciais para os registradores
function startOperators(Registers, instruction) {
    if (instruction.opcode == 'movl') {
        let aux = calculateOperators(instruction)
        Registers[aux[0]].value = 0
        Registers[aux[1]].value = /*getRandom()*/1
    }
    if (instruction.opcode == 'pushl') {
        Registers[6].push(getRandom())
    }
}

//Verifica se um registrador foi inicializado
function isEnabled(Register) {
    if (Register.value == '')
        return true
    return false
}

//Apenas pula para o próximo endereço
function jmp(instruction, labels) {
    for (let i = 0; i < labels.length; i++) {
        if (instruction.operators[0] == labels[i].name) {
            console.log(labels[i].adress)
            count = labels[i].adress
            return
        }
    }
    count++

    console.log('------------------------------------')
    console.log('entrou no JMP')
    console.log('valor de count -->' + count)
    console.log('------------------------------------')

}

//Pula para a label especificada caso o resultado da comparação seja igual
function je(instruction, labels) {
    for (let i = 0; i < labels.length; i++) {
        if (instruction.operators[0] == labels[i].name && flagJe == 1) {
            count = labels[i].adress //Seta o próximo endereço para a posição da label desejada
            flagJe = 0 //Reseta a flag
            return
        }
    }
    count++//Caso a flag esteja desligada, ou seja, a comparação não retornou true, incrementa count para
    //seguir o fluxo do programa
    console.log('------------------------------------')
    console.log('entrou no JE')
    console.log('valor de count -->' + count)
    console.log('valor da flagJE-->' + flagJe)
    console.log('------------------------------------')
}

function jne(instruction, labels) {
    for (let i = 0; i < labels.length; i++) {
        if (instruction.operators[0] == labels[i].name && flagJne == 1) {
            count = labels[i].adress
            flagJne = 0
            return
        }
    }
    count++
    console.log('------------------------------------')
    console.log('entrou no JNE')
    console.log('valor de count -->' + count)
    console.log('valor da flagJNE-->' + flagJNE)
    console.log('------------------------------------')
}

function jg(instruction, labels) {
    for (let i = 0; i < labels.length; i++) {
        if (instruction.operators[0] == labels[i].name && flagJg == 1) {
            count = labels[i].adress
            flagJg = 0
            return
        }
    }
    count++

    console.log('------------------------------------')
    console.log('entrou no JG')
    console.log('valor de count -->' + count)
    console.log('valor da flagJG-->' + flagJG)
    console.log('------------------------------------')
}

function jge(instruction, labels) {
    for (let i = 0; i < labels.length; i++) {
        if (instruction.operators[0] == labels[i].name && flagJge == 1) {
            count = labels[i].adress
            flagJge = 0
            return
        }
    }
    count++

    console.log('------------------------------------')
    console.log('entrou no JGE')
    console.log('valor de count -->' + count)
    console.log('valor da flagJGE-->' + flagJGE)
    console.log('------------------------------------')
}

function jl(instruction, labels) {
    for (let i = 0; i < labels.length; i++) {
        if (instruction.operators[0] == labels[i].name && flagJl == 1) {
            count = labels[i].adress
            flagJl = 0
            return
        }
    }
    count++

    console.log('------------------------------------')
    console.log('entrou no JL')
    console.log('valor de count -->' + count)
    console.log('valor da flagJL-->' + flagJL)
    console.log('------------------------------------')
}

function jle(instruction, labels) {
    for (let i = 0; i < labels.length; i++) {
        if (instruction.operators[0] == labels[i].name && flagJle == 1) {
            count = labels[i].adress
            flagJle = 0
            console.log('------------------------------------')
            console.log('entrou no JLE')
            console.log('valor de count -->' + count)
            console.log('valor da flagJLE-->' + flagJle)
            console.log('------------------------------------')
            return
        }
    }
    count++


}

function movl(instruction) {
    let adress = calculateOperators(instruction)

    if (isNaN(parseInt(instruction.operators[1])))
        Registers[adress[0]].value = Registers[adress[1]].value
    else {
        Registers[adress[0]].value = parseInt(instruction.operators[1])
    }
    console.log('------------------------------------')
    console.log('entrou no MOVL')
    console.log('valor de count -->' + count)
    console.log(`valor de ${Registers[adress[0]].name} --> ${Registers[adress[0]].value}`)
    console.log('------------------------------------')
}

function pushl(instruction) {

}

function addl(instruction, labels) {
    let adress = calculateOperators(instruction)

    if (isNaN(parseInt(instruction.operators[1])))
        Registers[adress[0]].value += Registers[adress[1]].value
    else
        Registers[adress[0]].value += parseInt(instruction.operators[1])

    console.log('------------------------------------')
    console.log('entrou no ADDL')
    console.log('valor de count -->' + count)
    console.log(`valor de ${Registers[adress[0]].name} --> ${Registers[adress[0]].value}`)
    console.log(`valor de ${Registers[adress[1]].name} --> ${Registers[adress[1]].value}`)
    console.log('------------------------------------')
}

function incl(instruction, labels) {
    let adress = calculateOperators(instruction)



    console.log('------------------------------------')
    console.log('entrou no INCL')
    console.log('valor de count -->' + count)
    console.log('valor do operando antes -->' + Registers[adress[0]].value)
    Registers[adress[0]].value += 1
    console.log('valor do operando depois -->' + Registers[adress[0]].value)
    console.log('------------------------------------')


}

function cmpl(instruction) {
    let adress = calculateOperators(instruction)

    if (isNaN(parseInt(instruction.operators[1]))) {
        if (Registers[adress[0]].value == Registers[adress[1]].value) {
            flagJe = 1
        }
        if (Registers[adress[0]].value != Registers[adress[1]].value) {
            flagJne = 1
        }
        if (Registers[adress[0]].value > Registers[adress[1]].value) {
            flagJg = 1
        }
        if (Registers[adress[0]].value >= Registers[adress[1]].value) {
            flagJge = 1
        }
        if (Registers[adress[0]].value < Registers[adress[1]].value) {
            flagJl = 1
        }
        if (Registers[adress[0]].value <= Registers[adress[1]].value) {
            flagJle = 1
        }
    }
    else {
        if (Registers[adress[0]].value == parseInt(instruction.operators[1])) {
            flagJe = 1
        }
        if (Registers[adress[0]].value != parseInt(instruction.operators[1])) {
            flagJne = 1
        }
        if (Registers[adress[0]].value > parseInt(instruction.operators[1])) {
            flagJg = 1
        }
        if (Registers[adress[0]].value >= parseInt(instruction.operators[1])) {
            flagJge = 1
        }
        if (Registers[adress[0]].value < parseInt(instruction.operators[1])) {
            flagJl = 1
        }
        if (Registers[adress[0]].value <= parseInt(instruction.operators[1])) {
            flagJle = 1
        }
    }

    console.log('------------------------------------')
    console.log('entrou no CMP')
    console.log('valor de count -->' + count)
    console.log('valor de ' + Registers[adress[0]].name + '-->' + Registers[adress[0]].value)
    console.log('valor de ' + Registers[adress[1]].name + '-->' + Registers[adress[1]].value)
    console.log('valor da flagJle -->' + flagJle)
    console.log('------------------------------------')
}

function leave() {
    console.log('Entrou no Leave')
}

function ret() {
    console.log('Entrou no Ret')
}
