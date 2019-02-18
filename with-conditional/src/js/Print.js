// Vetor responsável por armazenar os possíveis estágios de uma instrução.
let Stages = Array('FI', 'DI', 'CO', 'FO', 'EI', 'WO')
//Controla o id das 'rows' da tabela.
let line = 0
//Controla quantos espaços em branco terão de ser impressos antes(tabulação).
let whiteSpace = 0
//Variável responsável por armazenar qual a intrução está sendo processada.
let currentInstruction = 0
//Indica quantos estágios a instrução terá impressos no pipeline.
let limitPrint = 6
//Flag que indica se a instrução atual é - ou não - um 'jump'.
let haveJmp = 0
//Variável que armazena a quantidade de instruções devem ser puladas após um 'jump'.
let num_jumps = 0
let controlCol = 0

/*Função responsável por estruturar a tabela que será preenchida com o comportamento
  do pipeline.
 */
function createTable() {
  for (let i = 0; i <= 80; i++)
    $('#table-row-head').append(`<th scope="col"><span class="centralizar">${i}</span></th>`)
}

/*Função que cria as linhas da tabela, de acordo com a quantidade de instruções presentes
  no pipeline.
 */
function createLines(instructionsFinal) {
  for (let i = 0; i < instructionsFinal.length; i++) {
    $('tbody').append(`<tr id="line${i}></tr>`)
  }
}

//Função reponsável por estruturar o pipeline em si.
function preparePipeline(instructionsFinal, instructions) {
  for (let i = 0; i < instructionsFinal.length; i++) {
    formatTables(instructionsFinal[currentInstruction], instructions)
    currentInstruction++
  }
}

//Função que imprime os estágios pertinentes a cada instrução.
function formatTables(instruction, instructions) {
  if (haveJmp == 0) {
    //Se não há nenhum 'jump':
    if (!jmps.includes(instruction.opcode)) {
      //Os seis estágios serão impressos para a instrução.
      printTable(limitPrint)
    }
    else {//Se há algum 'jump':
      //Os seis estágios são impressos para indicar a sua execução.
      printTable(limitPrint)
      /*Os endereços inicial(posição do jump) e final(endereço do label para
        o qual deve-se pular) são armazenados em variáveis.
       */
      firstAdress = instruction.adress
      finalAdress = getFinalAdressLabel(instruction.operators[0])

      //Caso o endereço final seja maior que o inicial:
      if (finalAdress > firstAdress) {
        //A quantidade de instruções puladas será a diferença entre os dois, menos uma unidade.
        num_jumps = (finalAdress - firstAdress) - 1
        limitPrint = 4
        /*Às instruções puladas são atribuídos menos estágios, começando por 4 estágios,
          quantidade decrementada conforme as instruções são postas no pipeline.
         */
        for (let i = 0; i < num_jumps; i++) {
          printTable(limitPrint)
          limitPrint--
        }
      }
      else {//Caso o endereço final seja menor que o inicial:
        /*A quantidade de instruções puladas será a diferença entre o número total 
          de instruções no programa em Assembly e o endereço inicial, menos uma unidade.
         */
        num_jumps = (instructions.length - firstAdress) - 1
        /* Assim, como na condição anterior, às instruções puladas são atribuídos menos estágios,
           começando por 4 estágios, quantidade decrementada conforme as instruções são postas no pipeline.
         */
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

//Função que insere as instruções na tabela. As instruções são inseridas com a classe hidden, portanto, não podem ser
//vistas, ao menos que o evento de click no botão #make-line ocorra.
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
  $(`.col${controlCol}`).css('animation-duration', '200ms')
  controlCol++
})

createTable(instructionsFinal)
createLines(instructionsFinal)





