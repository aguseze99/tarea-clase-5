
  const numeros = document.querySelectorAll('li');
  const numerosArray = [];

  
  for(let i = 0; i < numeros.length; i++) {
    numerosArray.push(parseInt(numeros[i].textContent));
  }

  
  const promedio = numerosArray.reduce((a, b) => a + b) / numerosArray.length;
  document.querySelector('#promedio').textContent = 'El promedio es ' + promedio;

  
  const minimo = Math.min(...numerosArray);
  document.querySelector('#minimo').textContent = 'El número más pequeño es ' + minimo;

  
  const maximo = Math.max(...numerosArray);
  document.querySelector('#maximo').textContent = 'El número más grande es ' + maximo;

  
  const conteo = {};
  let maxFrecuencia = 0;
  let masFrecuente;
  for(let i = 0; i < numerosArray.length; i++) {
    const num = numerosArray[i];
    conteo[num] = (conteo[num] || 0) + 1;
    if(conteo[num] > maxFrecuencia) {
      maxFrecuencia = conteo[num];
      masFrecuente = num;
    }
  }
  document.querySelector('#frecuente').textContent = 'El número más frecuente es ' + masFrecuente;