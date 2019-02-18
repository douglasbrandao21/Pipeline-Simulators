//Função responsável por determinar qual instrução será executada e chamar a função correspondente.
//A flag de cada instrução é inicializada como 0, para indicar que ainda não foi - e pode não ser - executada.
function executeInstruction(instruction, labels, instructionsFinal) {
  switch (instruction.opcode) {
    case 'jmp':
      instruction.flag = 0
      jmp(instruction, labels)
      instructionsFinal.push(instruction)
      break
    case 'je':
      instruction.flag = 0
      je(instruction, labels)
      //Como o este jump depende do resultado da instrução anterior, pode ser que ele seja chamado, mas não executado.
      //Ele só incluído na lista de instruções, caso seja executado, ou seja, sua flag seja igual a 1.
      if (instruction.flag != 0)
        instructionsFinal.push(instruction)
      break
    case 'jne':
      instruction.flag = 0
      jne(instruction, labels)
      //Como o este jump depende do resultado da instrução anterior, pode ser que ele seja chamado, mas não executado.
      //Ele só incluído na lista de instruções, caso seja executado, ou seja, sua flag seja igual a 1.
      if (instruction.flag != 0)
        instructionsFinal.push(instruction)
      break
    case 'jg':
      instruction.flag = 0
      jg(instruction, labels)
      //Como o este jump depende do resultado da instrução anterior, pode ser que ele seja chamado, mas não executado.
      //Ele só incluído na lista de instruções, caso seja executado, ou seja, sua flag seja igual a 1.
      if (instruction.flag != 0)
        instructionsFinal.push(instruction)
      break
    case 'jge':
      instruction.flag = 0
      jge(instruction, labels)
      //Como o este jump depende do resultado da instrução anterior, pode ser que ele seja chamado, mas não executado.
      //Ele só incluído na lista de instruções, caso seja executado, ou seja, sua flag seja igual a 1.
      if (instruction.flag != 0)
        instructionsFinal.push(instruction)
      break
    case 'jl':
      instruction.flag = 0
      jl(instruction, labels)
      //Como o este jump depende do resultado da instrução anterior, pode ser que ele seja chamado, mas não executado.
      //Ele só incluído na lista de instruções, caso seja executado, ou seja, sua flag seja igual a 1.
      if (instruction.flag != 0)
        instructionsFinal.push(instruction)
      break
    case 'jle':
      instruction.flag = 0
      jle(instruction, labels)
      //Como o este jump depende do resultado da instrução anterior, pode ser que ele seja chamado, mas não executado.
      //Ele só incluído na lista de instruções, caso seja executado, ou seja, sua flag seja igual a 1.
      if (instruction.flag != 0)
        instructionsFinal.push(instruction)
      break
    case 'movl':
      instruction.flag = 0
      movl(instruction)
      instructionsFinal.push(instruction)
      break
    case 'addl':
      instruction.flag = 0
      addl(instruction)
      instructionsFinal.push(instruction)
      break
    case 'incl':
      instruction.flag = 0
      incl(instruction)
      instructionsFinal.push(instruction)
      break
    case 'cmpl':
      instruction.flag = 0
      cmpl(instruction)
      instructionsFinal.push(instruction)
      break
    case 'leave':
      instruction.flag = 0
      leave()
      instruction.flag = 1
      console.log("Valor da flag -->" + instruction.flag)
      instructionsFinal.push(instruction)
      break
    case 'ret':
      instruction.flag = 0
      ret()
      instruction.flag = 1
      instructionsFinal.push(instruction)
      break
  }
}
