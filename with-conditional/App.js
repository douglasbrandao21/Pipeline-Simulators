
  var input = document.querySelector('input[type=file]')
  let str = ''
  

  $('#upload').click( () => {
    $('#getFile').click()
  })

  $('#start').click( () => {
    fetchInstruction()
  })
  
  input.addEventListener('change', decodeInstruction)

  function readFile(event) {
    str = event.target.result.split('\n')
  }
  
  function decodeInstruction() {
    let file = input.files[0]
    let reader = new FileReader()
    reader.addEventListener('load', readFile)
    reader.readAsText(file)
  }
  
  function Instruction(command, operators) {
    this.command = command,
    this.operators = operators
  }

  function Label(name, adress) {
    this.name = name
    this.adress = adress
  }

  function fetchInstruction () {
      decodeInstruction()
      let instructions = str.map( string => string.trim())
      let labels = new Array
      let j = 0

      for (let i=0; i < instructions.length; i++) {
        if(instructions[i].includes(':')) {
          labels[j] = new Label(instructions[i].replace(':', ''), i)
          j++
        }   
      }

      instructions = instructions.filter( string => !string.includes(':') )

      let commands = new Array
      let aux = new Array

      for (let i=0; i < instructions.length; i++) {
        aux = instructions[i].split('\t')
        if(aux[1] != null)
          commands[i] = new Instruction(aux[0], aux[1].split(','))
        else
        commands[i] = new Instruction(aux[0])
      }

      console.log(commands)
      console.log(labels)
      for(let i = 0; i < commands.length; i++) {
        executeInstruction(instructions[i])
      }
  }

  function executeInstruction(instruction) {
    switch(instruction.command) {
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
        breal 
    }
    
    

  }

  
  
  

