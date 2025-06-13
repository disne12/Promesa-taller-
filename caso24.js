// caso24-leerSensor.js
export async function ejecutarCaso24(mostrar) {
  function leerSensor() {
    return new Promise(resolve => {
      setTimeout(() => resolve("35°C"), 1000);
    });
  }


  // async/await
  try {
    const res = await leerSensor();
    mostrar('', `Lectura del sensor: ${res}`, true);
  } catch (err) {
    mostrar('', err, false);
  }
}