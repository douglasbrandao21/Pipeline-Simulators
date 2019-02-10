
  var input = document.querySelector('input[type=file]')
  let str = ''
  
  function readFile(event) {
    str = event.target.result.split('\n')
  }
  
  function changeFile() {
    let file = input.files[0]
    let reader = new FileReader()
    reader.addEventListener('load', readFile)
    reader.readAsText(file)
  }
  
  input.addEventListener('change', changeFile)
  
  function fetchInstruction () {
      changeFile()
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
  
  

