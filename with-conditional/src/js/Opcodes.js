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
    for(let i=0; i < labels.length; i++) {
        if(instruction.operators[0] == labels[i].name) {
            count = labels[i].adress -1
            break
        }
    }
}

function je(instruction, labels) {
    for(let i=0; i < labels.length; i++) {
        if(instruction.operators[0] == labels[i].name && flagJe == 1) {
            count = labels[i].adress
            break
        }
    }
}

function jne(instruction, labels) {
    for(let i=0; i < labels.length; i++) {
        if(instruction.operators[0] == labels[i].name && flagJne == 1) {
            count = labels[i].adress -1
            break
        }
    }
}

function jg(instruction, labels) {
    for(let i=0; i < labels.length; i++) {
        if(instruction.operators[0] == labels[i].name && flagJg == 1) {
            count = labels[i].adress
            break
        }
    }
}

function jge(instruction, labels) {
    for(let i=0; i < labels.length; i++) {
        if(instruction.operators[0] == labels[i].name && flagJge == 1) {
            count = labels[i].adress
            break
        }
    }
}

function jl(instruction, labels) {
    for(let i=0; i < labels.length; i++) {
        if(instruction.operators[0] == labels[i].name && flagJl == 1) {
            count = labels[i].adress
            break
        }
    }
}

function jle(instruction, labels) {
    for(let i=0; i < labels.length; i++) {
        if(instruction.operators[0] == labels[i].name && flagJle == 1) {
            count = labels[i].adress
            break
        }
    }
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

    if(isNaN(parseInt(instruction.operators[1]))) {
        if(Registers[adress[0]].value == Registers[adress[1]].value) {
            flagJe = 1
            return
        }
        if(Registers[adress[0]].value != Registers[adress[1]].value) {
            flagJne = 1
            return
        }
        if(Registers[adress[0]].value > Registers[adress[1]].value) {
            flagJg = 1
            return
        }
        if(Registers[adress[0]].value >= Registers[adress[1]].value) {
            flagJge = 1
            return
        }
        if(Registers[adress[0]].value < Registers[adress[1]].value) {
            flagJl = 1
            return
        }
        if(Registers[adress[0]].value <= Registers[adress[1]].value) {
            flagJle = 1
            return
        }
    }   
    else {
        if(Registers[adress[0]].value == parseInt(instruction.operators[1])) {
            flagJe = 1
            return
        }
        if(Registers[adress[0]].value != parseInt(instruction.operators[1])) {
            flagJne = 1
            return
        }
        if(Registers[adress[0]].value > parseInt(instruction.operators[1])) {
            flagJg = 1
            return
        }
        if(Registers[adress[0]].value >= parseInt(instruction.operators[1])) {
            flagJge = 1
            return
        }
        if(Registers[adress[0]].value < parseInt(instruction.operators[1])) {
            flagJl = 1
            return
        }
        if(Registers[adress[0]].value <= parseInt(instruction.operators[1])) {
            flagJle = 1
            return
        }       
    }  
}

function leave() {
    ret()
}

function ret() {

}