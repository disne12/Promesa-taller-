// caso14-cancelarPromesa.js
export async function ejecutarCaso14(mostrar) {
  const controller = new AbortController();
  const inicio = Date.now();

  // Botón de cancelar
  const btnId = "btn-cancelar-peticion";
  if (!document.getElementById(btnId)) {
    const btn = document.createElement("button");
    btn.id = btnId;
    btn.textContent = "Cancelar petición";
    btn.className = "px-4 py-2 bg-red-500 text-white rounded mb-2";
    btn.onclick = () => controller.abort();
    document.getElementById("resultados").appendChild(btn);
  }
// al hacer click en el botón, se cancelará la petición
// y se mostrará el mensaje de cancelación
// si se quita el tiempo de espera, la petición se completará normalmente
// y se mostrará el resultado
// pero si tiene un tiempo de espera, y no se cancela la petición, mostrata ocurrido un error
  fetch("https://deelay.me/3000/https://jsonplaceholder.typicode.com/todos/1", { signal: controller.signal })
    .then(res => res.json())
    .then(data => {
      const segundos = ((Date.now() - inicio) / 1000).toFixed(2);
      mostrar('Resultado', `Respuestas recibidas en ${segundos} segundos:<br>${JSON.stringify(data)}`, true);
    })
    .catch(error => {
      if (error.name === "AbortError") {
        mostrar('Resultado', "La petición fue cancelada por el usuario.", false);
      } else {
        mostrar('Resultado', `Ocurrió un error: ${error.message}`, false);
      }
    });
}
