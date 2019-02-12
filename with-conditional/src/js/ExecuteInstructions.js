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
