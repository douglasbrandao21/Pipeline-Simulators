let instructions = new Array()

function decodeInstructions() {
  fetchInstruction()

  let instructions = str.map(string => string.trim())
  let labels = new Array
  let j = 0

  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i].includes(':')) {
      labels[j] = new Label(instructions[i].replace(':', ''), i)
      j++
    }
  }

  instructions = instructions.filter(string => !string.includes(':'))
  let aux = new Array
  for (let i = 0; i < instructions.length; i++) {
    aux = instructions[i].split('\t')
    if (aux[1] != null) {
      aux[1] = aux[1].replace(/ /g,'')
      instructions[i] = Instruction(aux[0], aux[1].split(','))
    }
    else
      instructions[i] = Instruction(aux[0])
  }

  console.log(instructions)
  console.log(labels)
  console.log(Registers)
  
  
  for(let i=0; i < instructions.length; i++) {

    //Verifica se estou trabalhando com a primeira instrução, para atribuir valor a mesma.
    if(i == 0) {
      startOperators(Registers, instructions[i])
    }
    executeInstruction(instructions[i], labels)
  }
  console.log(Registers)

}