// caso01-leerArchivo.js
export async function ejecutarCaso1(mostrar) {
  function leerArchivo(path) {
    return new Promise((resolve, reject) => {
      if (path && path.length > 0) {
        resolve("Contenido leído de " + path);
      } else {
        reject("Error al leer");
      }
    });
  }

  // async/await
  try {
    const res = await leerArchivo("archivo.txt");
    mostrar('', res, true);
  } catch (err) {
    mostrar('', err, false);
  }
}
