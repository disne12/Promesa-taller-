// caso16-timeout.js
export async function ejecutarCaso16(mostrar) {
  function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  // async/await y try...catch
  try {
    const res = await Promise.race([
      fetch("https://jsonplaceholder.typicode.com/todos/1"),
      esperar(1000).then(() => Promise.reject("Timeout"))// Espera 1 segundo
      // si pones 100 se ejecutará error
      // si pones 2000 no se ejecutará error
    ]);
    const data = await res.json();
    mostrar('', `Respuesta: ${JSON.stringify(data)}`, true);
  } catch (error) {
    mostrar('', error, false);
  }
}