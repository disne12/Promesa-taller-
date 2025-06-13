// caso15-reintentos.js
export async function ejecutarCaso15(mostrar) {
  function reintentar(fn, intentos) {
    return fn().catch(err => {
      if (intentos > 2) return reintentar(fn, intentos - 1);
      else return Promise.reject(err);
    });
  }

  let contador = 1; // Contador para simular fallos y éxitos

  function tarea() {
    return new Promise((resolve, reject) => {
      contador++;
      
      if (contador === 4) resolve("Éxito en intento " + contador);// Simula éxito en el cuarto intento
      else reject("Fallo intento " + contador);
    });
  }

  // async/await y try...catch
  contador = 2; // Reinicia el contador para la segunda prueba
  try {
    const res = await reintentar(tarea, 5);// Cambia el número de intentos si quieres probar más o menos
    mostrar('', res, true);
  } catch (err) {
    mostrar('', err, false);
  }
}