function Instruction(opcode, operators) {
  return {
    opcode,
    operators
  }
}

function Label(name) {
  return {
    name,
    instruction = new Array
  }
}

Registers = [
  {name: 'eax', value:''},
  {name: 'ebx', value:''},
  {name: 'ebp', value:''},
  {name: 'esp', value:''},
  {name: 'temp', value:''},
  {name: 'temp2', value:''},
  stack = new Array
]