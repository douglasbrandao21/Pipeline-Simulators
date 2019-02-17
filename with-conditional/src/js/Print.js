let Stages = Array('FI', 'DI', 'CO', 'FO', 'EI', 'WO')
let line = 0
let whiteSpace = 0
let currentInstruction = 0
let limitPrint = 6
let haveJmp = 0
let num_jumps = 0
let controlCol = 0

function createTable() {
  for (let i = 0; i <= 50; i++)
    $('#table-row-head').append(`<th scope="col"><span class="centralizar">${i}</span></th>`)
}

function createLines(instructionsFinal) {
  for (let i = 0; i < instructionsFinal.length; i++) {
    $('tbody').append(`<tr id="line${i}></tr>`)
  }
}

function preparePipeline(instructionsFinal, instructions) {
  for (let i = 0; i < instructionsFinal.length; i++) {
    formatTables(instructionsFinal[currentInstruction], instructions)
    currentInstruction++
  }
}

function formatTables(instruction, instructions) {
  if (haveJmp == 0) {
    if (!jmps.includes(instruction.opcode)) {
      printTable(limitPrint)
    }
    else {
      printTable(limitPrint)
      firstAdress = instruction.adress
      finalAdress = getFinalAdressLabel(instruction.operators[0])

      if (finalAdress > firstAdress) {
        num_jumps = (finalAdress - firstAdress) - 1
        limitPrint = 4
        for (let i = 0; i < num_jumps; i++) {
          printTable(limitPrint)
          limitPrint--
        }
      }
      else {
        num_jumps = (instructions.length - firstAdress) - 1
        limitPrint = 4
        for (let i = 0; i < num_jumps; i++) {
          printTable(limitPrint)
          limitPrint--
        }
      }
      limitPrint = 6
      haveJmp = 0
    }
  }

}

function printTable(limitPrint) {
  let colClass = 0
  $('tbody').append(`<tr id="line${line}">`)
  for (let i = 0; i < whiteSpace; i++) {
    $(`#line${line}`).append(`<td class="empty-cell col${colClass} hidden"><span class=""></span></td>`)
    colClass++
  }
  for (let i = 0; i < limitPrint; i++) {
    $(`#line${line}`).append(`<td class="table-cell col${colClass} hidden"><span class="table-data centralizar">${Stages[i]}</span></td>`)
    colClass++
  }
  $('tbody').append('</tr>')
  line++
  whiteSpace++
}

$('#make-line').click(() => {
  $(`.col${controlCol}`).removeClass('hidden')
  $(`.col${controlCol}`).addClass('animated')
  $(`.col${controlCol}`).addClass('zoomIn faster')
  controlCol++
})

createTable(instructionsFinal)
createLines(instructionsFinal)





