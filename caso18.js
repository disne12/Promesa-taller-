// caso18-cargarJSON.js
export async function ejecutarCaso18(mostrar) {
  function cargarJSON() {
    return new Promise(resolve => {
      setTimeout(() => resolve({nombre: "Test"}), 500);
    });
  }

  // async/await y try...catch
  try {
    const data = await cargarJSON();
    mostrar('', `JSON cargado: ${JSON.stringify(data)}`, true);
  } catch (error) {
    mostrar('', error, false);
  }
}