// caso2.js
export async function ejecutarCaso2(mostrar) {
  // Tu código del caso 2 aquí
  // Ejemplo:
  function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  try {
    await esperar(1000);
    mostrar('', 'Listo después de 1 segundo', true);
  } catch (e) {
    mostrar('', 'Error', false);
  }
}