// caso20-secuenciaPasos.js
export async function ejecutarCaso20(mostrar) {
  function paso1() {
    return Promise.resolve("Paso 1");
  }
  function paso2() {
    return Promise.resolve("Paso 2");
  }
  function paso3() {
    return Promise.resolve("Paso 3");
  }

  // async/await y try...catch
  try {
    const r1 = await paso1();
    mostrar('', r1, true);
    const r2 = await paso2();
    mostrar('', r2, true);
    const r3 = await paso3();
    mostrar('', r3, true);
  } catch (error) {
    mostrar('', error, false);
  }
}
