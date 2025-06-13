// caso23-encadenada.js
export async function ejecutarCaso23(mostrar) {
  // async/await
  try {
    let v = 2;
    v = v * 2;
    v = v + 1;
    mostrar('', `Resultado: ${v}`, true);
  } catch (err) {
    mostrar('', err, false);
  }
}