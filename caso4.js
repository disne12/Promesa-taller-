// caso04-login.js
export async function ejecutarCaso4(mostrar) {
  function login(usuario, clave) {
    return new Promise((resolve, reject) => {
      if (usuario === "admin" && clave === "123") {
        resolve("Bienvenido Administrador 👋");
      } else {
        
        reject("Error los datos son incorrectos❌");
      }
    });
  }

  // async/await y try...catch
  // tienes que poner el usuario y clave correctos para que funcione
  // si no, se ejecutará error
  // y se mostrará el mensaje de error x
  try {
    const res = await login("admin", "123");
    mostrar('', res, true);
  } catch (err) {
    mostrar('', err, false);
  }
}
 