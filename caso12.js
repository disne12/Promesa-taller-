// caso12-verificarSesion.js
export async function ejecutarCaso12(mostrar) {
  function verificarSesion(token) {
    return new Promise((resolve, reject) => {
      if (token === "valido") resolve("Sesión activa");
      else reject("Caducado");
    });
  }
  // async/await y try...catch
  try {
    const res = await verificarSesion("valido");// Cambia "valido" por "caducado" para probar el error
    // Si el token es "valido", muestra el mensaje de sesión activa
    mostrar('', res, true);
  } catch (err) {
    mostrar('', err, false);
  }
}
 