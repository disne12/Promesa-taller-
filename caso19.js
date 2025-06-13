// caso19-esperarMultiples.js
export async function ejecutarCaso19(mostrar) {
  function esperar(ms, nombre) {
    return new Promise(resolve => {
      setTimeout(() => {
        mostrar('.then()', `Terminó la espera de ${nombre}`, true);
        resolve();
      }, ms);
    });
  }


  // async/await y try...catch
  try {
    await Promise.all([
      esperar(1000, "1 segundo"),
      esperar(2000, "2 segundos")
    ]);
    mostrar('', "Listo", true);
  } catch (error) {
    mostrar('', error, false);
  }
}