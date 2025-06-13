// caso03-obtenerDatos.js

export async function ejecutarCaso3(mostrar) {
  function obtenerDatos(url) {
    return fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Error en la respuesta: " + res.status);
        return res.json();
      });
  }

  // async/await y try...catch
  try {
    mostrar('', 'Iniciando petición...', true);
    const data = await obtenerDatos("https://jsonplaceholder.typicode.com/todos/1");
    // Título personalizado
    mostrar('', `Título: Disneidis Ramirez<br>ID: ${data.id}<br>Completado: ${data.completed ? "No" : "Si"}`, true);
  } catch (error) {
    mostrar('', `Ocurrió un error al obtener los datos: ${error.message}`, false);
  }
}