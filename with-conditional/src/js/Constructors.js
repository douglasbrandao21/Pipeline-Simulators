function Instruction(opcode, operators) {
  return {
    opcode,
    operators
  }
}

function Label(name, adress) {
  return {
    name,
    adress
  }
}