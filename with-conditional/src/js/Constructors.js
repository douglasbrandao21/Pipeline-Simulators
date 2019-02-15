function Instruction(opcode, operators, adress) {
  return {
    opcode,
    operators,
    adress
  }
}

function Label(name, adress) {
  return {
    name,
    adress
  }
}

Registers = [
  { name: 'eax', value: '' },
  { name: 'ebx', value: '' },
  { name: 'ebp', value: '' },
  { name: 'esp', value: '' },
  { name: 'temp', value: '' },
  { name: 'temp2', value: '' },
  stack = new Array
]