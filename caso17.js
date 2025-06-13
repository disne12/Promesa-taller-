// caso17-baseDatos.js
export async function ejecutarCaso17(mostrar) {
  const db = {1: {nombre: "Paola disne"}, 2: {nombre: "Disneidis "}};
  function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
      if (db[id]) resolve(db[id]);
      else reject("No se encontró el usuario con ID: " + id);
    });
  }

  // async/await y try...catch
  try {
    const usuario = await buscarUsuario(1);
    mostrar('', `Usuario encontrado: <b>${usuario.nombre}</b>`, true);
  } catch (error) {
    mostrar('', error, false);
  }

  try {
    const usuario = await buscarUsuario(2);// Aquí se busca el usuario con los id resgistrados
// si no, se ejecutará error
    mostrar('', `Usuario encontrado: <b>${usuario.nombre}</b>`, true);
  } catch (error) {
    mostrar('', error, false);
  }
}