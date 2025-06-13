// caso11-compraOnline.js
export async function ejecutarCaso11(mostrar) {
  function validarStock(producto) {
    return producto.stock > 0 ? Promise.resolve() : Promise.reject("Sin stock");
  }
  function procesarPago(tarjeta) {
    return tarjeta.valida ? Promise.resolve() : Promise.reject("Pago rechazado");
  }

  const producto = {stock: 1};// Cambia a 1 para simular stock disponible y 0 para sin stock
  const tarjeta = {valida: true}; // Cambia a false para simular pago rechazado
  //  // async/await y try...catch
  try {
    await validarStock(producto);
    await procesarPago(tarjeta);
    mostrar('', "Compra exitosa", true); // Si todo va bien, muestra el mensaje de éxito
  } catch (error) {
    mostrar('', error, false);
  }
}