
  var input = document.querySelector('input[type=file]')
  let str = ''

  $('#upload').click( () => {
    $('#getFile').click()
  })

  $('#start').click( () => {
    fetchInstruction()
  })
  
  input.addEventListener('change', decodeInstruction)

  function readFile(event) {
    str = event.target.result.split('\n')
  }
  
  function decodeInstruction() {
    let file = input.files[0]
    let reader = new FileReader()
    reader.addEventListener('load', readFile)
    reader.readAsText(file)
  }

  function fetchInstruction () {
      decodeInstruction()
      const instructions = str.map( string => string.trim()).filter( string => !string.includes(':') )
      executeInstructions(instructions)
  }

  function executeInstructions(instructions) {
    
    let haveJmp = 0
    const jmps = ['jmp','je','jne','jg','jge','jl','jle']

    for(i=0; i<instructions.length; i++) {
      haveJmp = 0
      for(j=0; j<jmps.length; j++) {
        if(instructions[i].includes(jmps[j]))
          haveJmp = 1
      }
      console.log(haveJmp)
      if(haveJmp == 1) {
        //Do stuff
      } else {
        //Do another stuff
      }

    }   
  }

  
  
  

