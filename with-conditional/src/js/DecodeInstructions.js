//Lista que aramazenará as instruções do programa em assembly.
let instructions = new Array()
//Variável que percorre as instruções, para que elas sejam executadas.
let count = 0
//Variável auxiliar da anterior.
let count2
//Lista de possíveis comandos de 'jump'.
let jmps = ['jmp', 'je', 'jne', 'jg', 'jge', 'jl', 'jle']
//Lista que armazenará as instruções executadas e que devem ser impressas no pipeline.
let instructionsFinal = new Array
//Lista que armazenará os rótulos dos blocos de instrução do programa em assembly.
let labels = new Array

//Função responsável por preencher as listas com as informações do programa em Assembly. 
function decodeInstructions() {
  //Chama a função para abrir o arquivo e recolher as informações do programa.
  fetchInstruction()
  let instructions = str.map(string => string.trim())
  let j = 0

  k = 0
  //Preenche a lista de rótulos ('labels').
  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i].includes(':')) {
      labels[j] = Label(instructions[i].replace(':', ''), i - k)
      j++
      k++
    }
  }

  //Preenche a lista de instruções.
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

  //Conduz toda a execução do programa, executando instrução por instrução.
  for (count = 0; count < instructions.length; count++) {
    count2 = count
    //Verifica se está trabalhando com a primeira instrução, para atribuir valor aos operandos da mesma.
    if (count == 0) {
      startOperators(Registers, instructions[count])
    }
    //Chama a função para executar a instrução em questão (atual).
    executeInstruction(instructions[count], labels, instructionsFinal)
    //Controla a variável que percorre a lista de instruções, para se adequar a ocorrência de jumps.
    if (jmps.includes(instructions[count2].opcode))
      count--
  }
  console.log(instructionsFinal)
  console.log(instructions)
  console.log(labels)
  console.log(Registers)

  //Chama a função para imprimir o comportamento do pipeline.
  $('#make-line').click(preparePipeline(instructionsFinal, instructions))
}