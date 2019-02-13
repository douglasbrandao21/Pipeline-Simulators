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
        console.log(aux)
        Registers[aux[0]].value = 0
        Registers[aux[1]].value = getRandom()
    }
}

function isEnabled(Register) {
    if(Register.value == '')
        return true
    return false
}

function jmp(instruction, labels) {
    console.log('jmp')
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
    
}

function addl(instruction, labels) {
    console.log('addl')
}

function incl(instruction, labels) {
    console.log('incl')
}

function cmpl(instruction, labels) {
    console.log('cmpl')
}

function leave() {
    console.log('leave')
}

function ret() {
    console.log('ret')
}