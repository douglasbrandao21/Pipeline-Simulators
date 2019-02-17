function Instruction(opcode, operators, adress, flag) {
  return {
    opcode,
    operators,
    adress,
    flag
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