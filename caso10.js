// caso10-secuenciaArchivos.js
export async function ejecutarCaso10(mostrar) {
  function leerArchivo(path) {
    return new Promise((resolve, reject) => {
      if (path) resolve("Leído " + path);
      else reject("Error");
    });
  }

  // async/await y try...catch
  try {
    await leerArchivo("a.txt");
    await leerArchivo("b.txt");
    await leerArchivo("c.txt");
    mostrar('', "Todos los archivos leídos en secuencia", true);
  } catch (error) {
    mostrar('', error, false);
  }
}