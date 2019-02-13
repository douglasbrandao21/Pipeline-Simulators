let cmpResult = 0

function getRandom() {
    return Math.floor(Math.random() * 5 + 1)
}

function calculateOperators(instruction) {
    let adressOperators = new Array()
    for(j = 0; j < instruction.operators.length; j++) {
        for(let i=0; i < Registers.length; i++) {
            if(Registers[i].name == instruction.operators[j]) {
                adressOperators.push(i)
                break
            }
        }
    }
    return adressOperators
}

function startOperators(Registers, instruction) {
    if(instruction.opcode == 'movl') {
        let aux = calculateOperators(instruction)
        Registers[aux[0]].value = 0
        Registers[aux[1]].value = getRandom()
    }
    if(instruction.opcode == 'pushl') {
        Registers[6].push(getRandom())
    }
}

function isEnabled(Register) {
    if(Register.value == '')
        return true
    return false
}

function jmp(instruction, labels) {
    
    

}

function je(instruction, labels) {
    console.log('je')
}

function jne(instruction, labels) {
    console.log('jne')
}

function jg(instruction, labels) {
    console.log('jg')
}

function jge(instruction, labels) {
    console.log('jge')
}

function jl(instruction, labels) {
    console.log('jl')
}

function jle(instruction, labels) {
    console.log('jle')
}

function movl(instruction) {
    let adress = calculateOperators(instruction)

    if(isNaN(parseInt(instruction.operators[1])))
        Registers[adress[0]].value = Registers[adress[1]].value
    else
        Registers[adress[0]].value = parseInt(instruction.operators[1])
}

function pushl(instruction) {

}

function addl(instruction, labels) {
    let adress = calculateOperators(instruction)

    if(isNaN(parseInt(instruction.operators[1])))
        Registers[adress[0]].value += Registers[adress[1]].value
    else
        Registers[adress[0]].value += parseInt(instruction.operators[1])
}

function incl(instruction, labels) {
    let adress = calculateOperators(instruction)

    Registers[adress[0]].value += 1
    
}

function cmpl(instruction, labels) {
    let adress = calculateOperators(instruction)

    if(isNaN(parseInt(instruction.operators[1])))
        if(Registers[adress[0]].value == Registers[adress[1]].value)
            cmpResult = 1
        else
            cmpResult = 0
    else
        if(Registers[adress[0]].value == parseInt(instruction.operators[1]))
            cmpResult = 1
        else
            cmpResult = 0
}

function leave() {
    ret()
}

function ret() {

}