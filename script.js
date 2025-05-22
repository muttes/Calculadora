function insertToDisplay(data){
   document.querySelector("#display").value += data
}

function clean(){
    document.querySelector("#display").value = " "
}

function back(){
     const display =  document.querySelector("#display")
     display.value = display.value.slice(0, -1)
}

function result(){
     const display =  document.querySelector("#display")
     try {
         display.value = eval(display.value)
         display.style.color = 'black'
     } catch {
        display.value = 'ERRO'
        display.style.color = 'red'
                setTimeout(() => {
            display.value = '';
            display.style.color = 'black';
        }, 790);
    }
}
     

      