// caso09-leerMultiplesArchivos.js
export async function ejecutarCaso9(mostrar) {
  function leerArchivo(path) {
    return new Promise((resolve, reject) => {
      if (path) resolve("Archivo leído: " + path);
      else reject("Error");
    });
  }


  // async/await y try...catch

// Debes leer los archivos "a.txt" y "b.txt"
  // si no, se ejecutará error
  // y se mostrará el mensaje de error
  try {
    const resultados = await Promise.all([leerArchivo("a.txt"), leerArchivo("b.txt")]);
    mostrar('', resultados.join('<br>'), true);
  } catch (error) {
    mostrar('', error, false);
  }
}