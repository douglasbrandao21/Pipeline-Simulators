//Construtora de objetos do tipo Instruction
function Instruction(command, operators) {
  return {
    command,
    operators
  }
}

//Construtora dos objetos Label
function Label(name, adress) {
  return {
    name,
    adress
  }
}

//Transforma a string bruta obtida a partir do arquivo em um Array de instruções
function decodeInstruction() {
  fetchInstruction()
  let instructions = str.map(string => string.trim())
  let labels = new Array
  let j = 0

  //Constrói o Array de Labels, com seus endereços.
  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i].includes(':')) {
      labels[j] = new Label(instructions[i].replace(':', ''), i)
      j++
    }
  }

  //Remove as linhas de Label
  instructions = instructions.filter(string => !string.includes(':'))

  let aux = new Array

  //Faz o split das linhas em opcode e operandos e os insere no Array de instruções
  for (let i = 0; i < instructions.length; i++) {
    aux = instructions[i].split('\t')
    if (aux[1] != null)
      instructions[i] = new Instruction(aux[0], aux[1].split(','))
    else
      instructions[i] = new Instruction(aux[0])
  }

  console.log(instructions)
  console.log(labels)

  for (let i = 0; i < instructions.length; i++) {
    executeInstruction(instructions[i], labels)
  }
}