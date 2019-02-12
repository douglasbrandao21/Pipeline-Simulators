//Atribui a input o elemento input do tipo file que recebe o arquivo
var input = document.querySelector('input[type=file]')

let str = '' //String auxiliar que receberá o texto do arquivo

const stackOperators = new Array//Estrutura de dados que receberá os operadores (nome)
const valuesOperators = new Array//Estrutura de dados que receberá os valores dos operadores

//Captura o evento de clique do botão de uplad
$('#upload').click(() => {
  $('#getFile').click()
})

//Starta o processo de fetchInstruction()
$('#start').click(() => {
  fetchInstruction()
})

input.addEventListener('change', decodeInstruction)//Listener para o evento de change de input

//Recebe o evento de change e atribui o conteúdo (string) a str
function readFile(event) {
  str = event.target.result.split('\n')
}

//Instancia um objeto de FileReader, para que seja possível realizar a leitura do arquivo.
function decodeInstruction() {
  let file = input.files[0]
  let reader = new FileReader()
  reader.addEventListener('load', readFile)//Chama readFile() no evento de load do arquivo
  reader.readAsText(file)
}

function Instruction(command, operators) {
  return {
    command: command,
    operators: operators
  }
}

function Label(name, adress) {
  return {
    name: name,
    adress: adress
  }
}

function fetchInstruction() {
  decodeInstruction()
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

  let commands = new Array
  let aux = new Array

  for (let i = 0; i < instructions.length; i++) {
    aux = instructions[i].split('\t')
    if (aux[1] != null)
      commands[i] = new Instruction(aux[0], aux[1].split(','))
    else
      commands[i] = new Instruction(aux[0])
  }

  console.log(commands)
  console.log(labels)
  for (let i = 0; i < commands.length; i++) {
    executeInstruction(instructions[i])
  }
}

function executeInstruction(instruction) {
  switch (instruction.command) {
    case 'jmp':
      jmp(instruction, labels)
      break
    case 'je':
      je(instruction, labels)
      break
    case 'jne':
      jne(instruction, labels)
      break
    case 'jg':
      jg(instruction, labels)
      break
    case 'jge':
      jge(instruction, labels)
      break
    case 'jl':
      jl(instruction, labels)
      break
    case 'jle':
      jle(instruction, labels)
      break
    case 'movl':
      movl(instruction)
      break
    case 'addl':
      addl(instruction)
      break
    case 'incl':
      incl(instruction)
      break
    case 'cmpl':
      cmpl(instruction)
      break
    case 'leave':
      leave()
      break
    case 'ret':
      ret()
      break
  }



}





