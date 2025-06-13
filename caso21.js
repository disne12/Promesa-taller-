// caso21-validarFormulario.js
export async function ejecutarCaso21(mostrar) {
  function validarNombre(nombre) {
    return nombre
      ? Promise.resolve("Nombre válido")
      : Promise.reject("Nombre vacío");
  }
  function validarCorreo(correo) {
    return correo.includes("@")//el correo debe contener '@' para ser válido
      && correo.includes(".")//y también un punto
      ? Promise.resolve("Correo válido") 
      : Promise.reject("Correo inválido");
  }

 

  // async/await y try...catch
  try {
    const resultados = await Promise.all([
      validarNombre("Disneidis Paola"),
      validarCorreo("Dispao@mail.com")
    ]);
    resultados.forEach(msg => mostrar('', msg, true));
    mostrar('', "Formulario válido", true);
  } catch (error) {
    mostrar('', `Error en el formulario: ${error}`, false);
  }
}