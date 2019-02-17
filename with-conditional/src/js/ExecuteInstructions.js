function executeInstruction(instruction, labels, instructionsFinal) {
  switch (instruction.opcode) {
    case 'jmp':
      instruction.flag = 0
      jmp(instruction, labels)
      console.log("Valor da flag -->"+instruction.flag)
      instructionsFinal.push(instruction)
      break
    case 'je':
      instruction.flag = 0
      je(instruction, labels)
      console.log("Valor da flag -->"+instruction.flag)
      instructionsFinal.push(instruction)
      break
    case 'jne':
      instruction.flag = 0
      jne(instruction, labels)
      console.log("Valor da flag -->"+instruction.flag)
      instructionsFinal.push(instruction)
      break
    case 'jg':
      instruction.flag = 0
      jg(instruction, labels)
      console.log("Valor da flag -->"+instruction.flag)
      instructionsFinal.push(instruction)
      break
    case 'jge':
      instruction.flag = 0
      jge(instruction, labels)
      console.log("Valor da flag -->"+instruction.flag)
      instructionsFinal.push(instruction)
      break
    case 'jl':
      instruction.flag = 0
      jl(instruction, labels)
      console.log("Valor da flag -->"+instruction.flag)
      instructionsFinal.push(instruction)
      break
    case 'jle':
      instruction.flag = 0
      jle(instruction, labels)
      console.log("Valor da flag -->"+instruction.flag)
      if(instruction.flag != 0)
        instructionsFinal.push(instruction)
      break
    case 'movl':
      instruction.flag = 0
      movl(instruction)
      console.log("Valor da flag -->"+instruction.flag)
      instructionsFinal.push(instruction)
      break
    case 'addl':
      instruction.flag = 0
      addl(instruction)
      console.log("Valor da flag -->"+instruction.flag)
      instructionsFinal.push(instruction)
      break
    case 'incl':
      instruction.flag = 0
      incl(instruction)
      console.log("Valor da flag -->"+instruction.flag)
      instructionsFinal.push(instruction)
      break
    case 'cmpl':
      instruction.flag = 0
      cmpl(instruction)
      console.log("Valor da flag -->"+instruction.flag)
      instructionsFinal.push(instruction)
      break
    case 'leave':
      instruction.flag = 0
      leave()
      instruction.flag = 1
      console.log("Valor da flag -->"+instruction.flag)
      instructionsFinal.push(instruction)
      break
    case 'ret':
      instruction.flag = 0
      ret()
      instruction.flag = 1
      console.log("Valor da flag -->"+instruction.flag)
      instructionsFinal.push(instruction)
      break
  }
}
