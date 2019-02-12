//Atribui a input o elemento input do tipo file que recebe o arquivo
var input = document.querySelector('input[type=file]')

//String auxiliar que receberá o texto do arquivo
let str = ''

//Listener para o evento de change de input
input.addEventListener('change', fetchInstruction)

//Captura o evento de clique do botão de uplad
$('#upload').click(() => {
  $('#getFile').click()
})

//Starta o processo de fetchInstruction()
$('#start').click(() => {
  decodeInstructions()
})

//Recebe o evento de change e atribui o conteúdo (string) a str
function readFile(event) {
  str = event.target.result.split('\n')
}

//Instancia um objeto de FileReader, para que seja possível realizar a leitura do arquivo.
function fetchInstruction() {
  let file = input.files[0]
  let reader = new FileReader()
  reader.addEventListener('load', readFile)//Chama readFile() no evento de load do arquivo
  reader.readAsText(file)
}




