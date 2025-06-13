// caso07-Obtener localización del usuario.js
export async function ejecutarCaso7(mostrar) {
  function obtenerUbicacion() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject("Geolocalización no soportada por el navegador");
      } else {
        navigator.geolocation.getCurrentPosition(
          pos => resolve(pos.coords),
          err => reject("Error al obtener la ubicación: " + err.message)
        );
      }
    });
  }


  // async/await y try...catch
  try {
    const coords = await obtenerUbicacion();
    mostrar('', `Ubicación obtenida:<br>Latitud: ${coords.latitude}<br>Longitud: ${coords.longitude}`, true);
  } catch (error) {
    mostrar('', error, false);
  }
}