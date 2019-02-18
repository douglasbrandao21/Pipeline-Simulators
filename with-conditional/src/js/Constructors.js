/*A função 'Instruction' é responsável por montar a estrutura que armazena o comando
  a ser executado, os operandos sobre os quais ele será executado, uma 'flag' que indica 
  se o comando foi - ou não - executado, além de seu endereço na estrutura de dados que 
  armazenará todas as instruções.  
*/
function Instruction(opcode, operators, adress, flag) {
  return {
    opcode,
    operators,
    adress,
    flag
  }
}
/*A função 'Label' é responsável por montar a estrutura que armazena informações sobre os rótulos dos blocos 
  de instrução, ou seja, seus nomes e endereços no programa em Assembly.
*/
function Label(name, adress) {
  return {
    name,
    adress
  }
}

/*Estrutura que armazena todos os registradores que podem aparecer no programa em Assembly
  para armazenar todos os seus possíveis valores.
 */
Registers = [
  { name: 'eax', value: '' },
  { name: 'ebx', value: '' },
  { name: 'ebp', value: '' },
  { name: 'esp', value: '' },
  { name: 'temp', value: '' },
  { name: 'temp2', value: '' },
  { name: 'stack', value: new Array }
]