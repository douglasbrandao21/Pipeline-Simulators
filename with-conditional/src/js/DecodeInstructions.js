let instructions = new Array()
let count

function decodeInstructions() {
  fetchInstruction()

  let instructions = str.map(string => string.trim())
  let labels = new Array 
  let j = 0
  
  k = 0
  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i].includes(':')) {
      labels[j] = Label(instructions[i].replace(':', ''), i-k)
      j++
      k++
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

  for(count=0; count < instructions.length; count++) {

    //Verifica se estou trabalhando com a primeira instrução, para atribuir valor a mesma.
    if(count == 0) {
      startOperators(Registers, instructions[count])
    }
    console.log('I antes -->'+count)    
    executeInstruction(instructions[count], labels)
    console.log('I -->'+count)
  }

}