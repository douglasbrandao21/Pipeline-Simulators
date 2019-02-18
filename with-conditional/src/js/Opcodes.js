//Flags responsáveis por controlar as execuções dos comandos Jumps (uma para cada um deles).
let flagJmp = 0
let flagJe = 0
let flagJne = 0
let flagJg = 0
let flagJge = 0
let flagJl = 0
let flagJle = 0

//Função para gerar um número aleatório entre 1 e 5.
function getRandom() {
    return Math.floor(Math.random() * 5 + 1)
}

//Função para determinar os endereços em que os blocos de instruções de cada label começa.
function getFinalAdressLabel(label) {
    for (let i = 0; i < labels.length; i++) {
        if (labels[i].name == label) {
            return labels[i].adress
        }
    }
}

/*Função que recebe uma instrução como parametro e retorna o endereço de seus operadores 
  (vetor Registers).
 */
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

//Função responsável por atribuir os valores iniciais de cada operador.
function startOperators(Registers, instruction) {
    /*Caso a instrução seja um 'movl', a função 'calculateOperators' é chamada
      para determinar quais são seus operandos, e, assim, atribuir os valores.
     */
    if (instruction.opcode == 'movl') {
        let aux = calculateOperators(instruction)
        Registers[aux[0]].value = 0
        //O registrador recebe um valor aleatório.
        Registers[aux[1]].value = /*getRandom()*/1
    }
    if (instruction.opcode == 'pushl') {
        Registers[6].push(getRandom())
    }
}

//Função que verifica se um registrador foi inicializado.
function isEnabled(Register) {
    if (Register.value == '')
        return true
    return false
}

//Apenas pula para o endereço do label em questão.
function jmp(instruction, labels) {
    for (let i = 0; i < labels.length; i++) {
        //Verifica para qual label deve-se pular.
        if (instruction.operators[0] == labels[i].name) {
            console.log(labels[i].adress)
            //Indica qual o endereço da próxima instrução.
            count = labels[i].adress
            //A flag da instrução recebe 1, para indicar a sua execução.
            instruction.flag = 1
            return
        }
    }
    count++
}

/*Pula para a label especificada caso o resultado da comparação indique que 
  o valor do primeiro registrador é igual ao do segundo.
 */
function je(instruction, labels) {
    for (let i = 0; i < labels.length; i++) {
        if (instruction.operators[0] == labels[i].name && flagJe == 1) {
            //Indica qual o endereço da próxima instrução.
            count = labels[i].adress
            //Reseta a flag do comando 'jump' em questão.
            flagJe = 0
            //A flag da instrução recebe 1, para indicar a sua execução.
            instruction.flag = 1
            return
        }
    }
    /*Caso a flag esteja desligada, ou seja, a comparação não retornou true, incrementa count para
      seguir o fluxo do programa.
     */
    count++
}

/*Pula para a label especificada caso o resultado da comparação indique que 
  o valor do primeiro registrador não é igual ao do segundo.
 */
function jne(instruction, labels) {
    for (let i = 0; i < labels.length; i++) {
        if (instruction.operators[0] == labels[i].name && flagJne == 1) {
            //Indica qual o endereço da próxima instrução.
            count = labels[i].adress
            //Reseta a flag do jump em questão.
            flagJne = 0
            //A flag da instrução recebe 1, para indicar a sua execução.
            instruction.flag = 1
            return
        }
    }
    count++
}

/*Pula para a label especificada caso o resultado da comparação indique que 
  o valor do primeiro registrador é maior que o do segundo.
 */
function jg(instruction, labels) {
    for (let i = 0; i < labels.length; i++) {
        if (instruction.operators[0] == labels[i].name && flagJg == 1) {
            //Indica qual o endereço da próxima instrução.
            count = labels[i].adress
            //Reseta a flag do jump em questão.
            flagJg = 0
            //A flag da instrução recebe 1, para indicar a sua execução.
            instruction.flag = 1
            return
        }
    }
    count++
}

/*Pula para a label especificada caso o resultado da comparação indique que 
  o valor do primeiro registrador é maior ou igual ao do segundo.
 */
function jge(instruction, labels) {
    for (let i = 0; i < labels.length; i++) {
        if (instruction.operators[0] == labels[i].name && flagJge == 1) {
            //Indica qual o endereço da próxima instrução.
            count = labels[i].adress
            //Reseta a flag do jump em questão.
            flagJge = 0
            //A flag da instrução recebe 1, para indicar a sua execução.
            instruction.flag = 1
            return
        }
    }
    count++
}

/*Pula para a label especificada caso o resultado da comparação indique que 
  o valor do primeiro registrador é menor que o do segundo.
 */
function jl(instruction, labels) {
    for (let i = 0; i < labels.length; i++) {
        if (instruction.operators[0] == labels[i].name && flagJl == 1) {
            //Indica qual o endereço da próxima instrução.
            count = labels[i].adress
            //Reseta a flag do jump em questão.
            flagJl = 0
            //A flag da instrução recebe 1, para indicar a sua execução.
            instruction.flag = 1
            return
        }
    }
    count++
}

/*Pula para a label especificada caso o resultado da comparação indique que 
  o valor do primeiro registrador é menor ou igual ao do segundo.
 */
function jle(instruction, labels) {
    for (let i = 0; i < labels.length; i++) {
        if (instruction.operators[0] == labels[i].name && flagJle == 1) {
            //Indica qual o endereço da próxima instrução.
            count = labels[i].adress
            //Reseta a flag do jump em questão.
            flagJle = 0
            //A flag da instrução recebe 1, para indicar a sua execução.
            instruction.flag = 1
            return
        }
    }
    count++
}

//Instrução que atribui ao primeiro operando ao segundo.
function movl(instruction) {
    let adress = calculateOperators(instruction)

    //Verifica se algum dos operandos é, na verdade, um número inteiro.
    if (isNaN(parseInt(instruction.operators[1])))
        Registers[adress[0]].value = Registers[adress[1]].value
    else {
        Registers[adress[0]].value = parseInt(instruction.operators[1])
    }
    //A flag da instrução recebe 1, para indicar a sua execução.
    instruction.flag = 1
}

function pushl(instruction) {
    Registers[6].value.push(instruction.operators)
}

//Adiciona o valor do segundo operando ao primeiro.
function addl(instruction, labels) {
    let adress = calculateOperators(instruction)

    //Verifica se algum dos operandos é, na verdade, um número inteiro.
    if (isNaN(parseInt(instruction.operators[1])))
        Registers[adress[0]].value += Registers[adress[1]].value
    else
        Registers[adress[0]].value += parseInt(instruction.operators[1])

    //A flag da instrução recebe 1, para indicar a sua execução.
    instruction.flag = 1
}

//Incrementa o valor do operando.
function incl(instruction, labels) {
    let adress = calculateOperators(instruction)
    Registers[adress[0]].value += 1
    //A flag da instrução recebe 1, para indicar a sua execução.
    instruction.flag = 1
}

//Compara os valores dos operandos, atribuindo 1 a uma determinada flag, dependendo do resultado da comparação.
function cmpl(instruction) {
    let adress = calculateOperators(instruction)

    //A flag da instrução recebe 1, para indicar a sua execução.
    instruction.flag = 1

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
}

function leave() {
    //Função que verifica se o programa está se preparando para ser finalizado. Penúltima instrução do programa.
    console.log('Entrou no Leave')
}

function ret() {
    //Função que verifica se o programa será finalizado. Última instrução do programa.
    console.log('Entrou no Ret')
}
