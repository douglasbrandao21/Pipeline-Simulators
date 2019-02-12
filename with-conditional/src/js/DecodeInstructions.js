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
    if (aux[1] != null)
      instructions[i] = Instruction(aux[0], aux[1].split(','))
    else
      instructions[i] = Instruction(aux[0])
  }
  console.log(instructions)
  console.log(labels)
  /*
  for (let i = 0; i < commands.length; i++) {
    executeInstruction(instructions[i])
  }*/
}