//Seleciona os elementos inputs type="file"
var input = document.querySelector('input[type=file]')

//String que receberá o conteúdo do arquivo
let str = ''

//Listener do evento de Change(), que chamará a função FetchInstruction
input.addEventListener('change', fetchInstruction)

//Captura o evento de Click() do botão #upload
$('#upload').click(() => {
  $('#getFile').click()
})

//Starta o processo de fetchInstruction()
$('#start').click(() => {
  fetchInstruction()
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
