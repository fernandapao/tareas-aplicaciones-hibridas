//TAREA 1
//Parte 1: Callbacks


function task1(callback) {
    setTimeout(() => {
      console.log('Task 1 completed');
      callback();
    }, 1000); // La tarea tarda 1 segundo
  }
  
  function task2(callback) {
    setTimeout(() => {
      console.log('Task 2 completed');
      callback();
    }, 2000); // La tarea tarda 2 segundos
  }
  
  function task3(callback) {
    setTimeout(() => {
      console.log('Task 3 completed');
      callback();
    }, 3000); // La tarea tarda 3 segundos
  }
  
  // Llamo a todas con el mainCallback
  function mainCallback() {
    task1(() => {
      task2(() => {
        task3(() => {
          console.log('Llamamos a todas las task');
        });
      });
    });
  }
  
  
  mainCallback();
  