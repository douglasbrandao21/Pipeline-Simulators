let Stages = Array('FI', 'DI', 'CO', 'FO', 'EI', 'WO')
let line = 0
let whiteSpace = 0
let currentInstruction = 0
let limitPrint = 6
let haveJmp = 0
let num_jumps = 0

function createTable() {
  for (let i = 0; i <= 50; i++)
    $('#table-row-head').append(`<th scope="col"><span class="centralizar">${i}</span></th>`)
}
createTable()

function preparePipeline(instructionsFinal, instructions) {
  $('#make-line').click(() => {
    formatTables(instructionsFinal[currentInstruction], instructions)
    currentInstruction++
  })
}

function formatTables(instruction, instructions) {
  if (haveJmp == 0) {
    if (!jmps.includes(instruction.opcode)) {
      console.log('-------------- NÃO TEM JUMP -------------------')
      console.log('Endereço de instrução --->' + currentInstruction)
      console.log('Nome da instrução --->' + instruction.opcode)
      console.log('--------------------------------------------')
      printTable(limitPrint)
    }
    else {
      console.log('--------- ACHOU JUMP ---------------')
      console.log('Endereço da instrução --->' + currentInstruction)
      console.log('Nome da instrução -->' + instruction.opcode)

      printTable(limitPrint)
      firstAdress = instruction.adress
      finalAdress = getFinalAdressLabel(instruction.operators[0])
      console.log('First Adress --->' + firstAdress)
      console.log('Final Adress --->' + finalAdress)

      if (finalAdress > firstAdress) {
        num_jumps = (finalAdress - firstAdress) - 1
        limitPrint = 4
        console.log('Número de Jumps -->' + num_jumps)

        for (let i = 0; i < num_jumps; i++) {
          printTable(limitPrint)
          limitPrint--
        }
      }
      else {
        console.log('Tamanho do vetor Instructions -->' + instructions.length)
        num_jumps = (instructions.length - firstAdress) - 1
        console.log('Número de Jumps -->' + num_jumps)
        limitPrint = 4
        for (let i = 0; i < num_jumps; i++) {
          printTable(limitPrint)
          limitPrint--
        }
      }
      console.log('--------------------------------------')
      limitPrint = 6
      haveJmp = 0
    }
  }

}

function printTable(limitPrint) {
  $('tbody').append(`<tr id="line${line}">`)
  for (let i = 0; i < whiteSpace; i++) {
    $(`#line${line}`).append(`<td class="empty-cell"><span class=""></span></td>`)
  }
  for (let i = 0; i < limitPrint; i++)
    $(`#line${line}`).append(`<td class="table-cell"><span class="table-data centralizar">${Stages[i]}</span></td>`)
  $('tbody').append('</tr>')
  line++
  whiteSpace++
}








