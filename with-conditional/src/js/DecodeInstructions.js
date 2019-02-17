let instructions = new Array()
let count = 0
let count2
let jmps = ['jmp', 'je', 'jne', 'jg', 'jge', 'jl', 'jle']
let instructionsFinal = new Array
let labels = new Array

function decodeInstructions() {
  fetchInstruction()
  let instructions = str.map(string => string.trim())
  let j = 0

  k = 0
  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i].includes(':')) {
      labels[j] = Label(instructions[i].replace(':', ''), i - k)
      j++
      k++
    }
  }

  instructions = instructions.filter(string => !string.includes(':'))
  let aux = new Array
  for (let i = 0; i < instructions.length; i++) {
    aux = instructions[i].split('\t')
    if (aux[1] != null) {
      aux[1] = aux[1].replace(/ /g, '')
      instructions[i] = Instruction(aux[0], aux[1].split(','), i)
    }
    else
      instructions[i] = Instruction(aux[0])
  }

  console.log(instructions)
  console.log(labels)
  console.log(Registers)

  for (count = 0; count < instructions.length; count++) {
    count2 = count
    //Verifica se estou trabalhando com a primeira instrução, para atribuir valor a mesma.
    if (count == 0) {
      startOperators(Registers, instructions[count])
    }
    executeInstruction(instructions[count], labels, instructionsFinal)
    if (jmps.includes(instructions[count2].opcode))
      count--
  }
  console.log(instructionsFinal)

  $('#make-line').click(preparePipeline(instructionsFinal, instructions))



}