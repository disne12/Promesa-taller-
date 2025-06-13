// caso25-catch.js
export async function ejecutarCaso25(mostrar) {
  function leerArchivo(path) {
    return new Promise((resolve, reject) => {
      if (path === "inexistente.txt") reject("No existe");
      else resolve("Contenido");
    });
  }
{


  // async/await y try...catch


  try {
    const res = await leerArchivo("archivo.txt");// Cambia "archivo.txt" por "inexistente.txt" para probar el error
    // Si el archivo existe, muestra el contenido
    mostrar('', res, true);
  } catch (err) {
    mostrar('', `Error: ${err}`, false);
  }
}}