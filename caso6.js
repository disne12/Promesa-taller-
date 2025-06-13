// caso06-enviarFormulario.js
export async function ejecutarCaso6(mostrar) {
  function enviarFormulario(datos) {
    return new Promise((resolve, reject) => {
      if (datos && datos.nombre) {
        resolve(`Enviado. Nombre: ${datos.nombre}`);
      } else {
        reject("Error de validación ❌. El campo 'nombre' es obligatorio.");
      }
    });
  }



  // async/await y try...catch
  // el campo nombre es obligatorio
  // si no, se ejecutará error
  try {
    const res = await enviarFormulario({nombre: "Disneidis Ramirez"});
    mostrar('', res, true);
  } catch (err) {
    mostrar('', err, false);
  }

}