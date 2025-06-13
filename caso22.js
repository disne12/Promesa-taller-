// caso22-condicion.js
export async function ejecutarCaso22(mostrar) {
  function mayorADiez(valor) {
    return new Promise((resolve, reject) => {
      if (valor > 10) resolve("Mayor a 10");
      else reject("No cumple");
    });
  }



  // async/await y try...catch
  try {
    const res = await mayorADiez(19);
    mostrar('', `19: ${res}`, true);
  } catch (err) {
    mostrar('', `19: ${err}`, false);
  }

  try {
    const res = await mayorADiez(5);
    mostrar('', `5: ${res}`, true);
  } catch (err) {
    mostrar('', `5: ${err}`, false);
  }
}