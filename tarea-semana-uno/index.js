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



  //PARTE 2: PROMESAS

function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Task 1 completa');
      resolve('Task 1 resultado');
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Task 2 completa');
      resolve('Task 2 resultado');
    }, 2000);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Task 3 completa');
      resolve('Task 3 resultado');
    }, 3000);
  });
}


Promise.all([task1(), task2(), task3()])
  .then((resultados) => {
    console.log('Todas las task han sido completadas:', resultados);
  })
  .catch((error) => {
    console.error('Error al completar las task:', error);
  });



  //PARTE 3: Async/Await

async function mainAsync() {
  try {
    const result1 = await task1();
    console.log(resultado1);
    
    const result2 = await task2();
    console.log(resultado2);
    
    const result3 = await task3();
    console.log(resultado3);
    
    console.log('Todas las task han sido completadas');
  } catch (error) {
    console.error('Error al ejecutar las task', error);
  }
}


mainAsync();


  