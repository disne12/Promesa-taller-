// caso08-cadenaLoginPerfil.js
export async function ejecutarCaso8(mostrar) {
  function login(usuario, clave) {
    return new Promise((resolve, reject) => {
      if (usuario === "Disne" && clave === "678") resolve(usuario);
      else reject("Error");
    });
  }
  function obtenerPerfil(usuario) {
    return Promise.resolve({usuario, rol: "Ramirez"});
  }
// los datos de usuario y clave deben ser correctos
  // si no, se ejecutará error
  // async/await y try...catch
  try {
    const usuario = await login("Disne", "678");
    const perfil = await obtenerPerfil(usuario);
    mostrar('', `Perfil obtenido:<br>Usuario: ${perfil.usuario}<br>Rol: ${perfil.rol}`, true);
  } catch (error) {
    mostrar('', `Error: ${error}`, false);
  }
}