// caso13-cargarMultiplesImagenes.js
export async function ejecutarCaso13(mostrar) {
  function cargarImagen(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject("Error");
      img.src = url;
    });
  }

  const urls = [
    "descarga.jpg",
    "factos.jpg"
  ];

  // la url de las imágenes debe ser correcta
  // si no, se ejecutará error
  // async/await y try...catch
  try {
    const imgs = await Promise.all(urls.map(cargarImagen));
    const html = imgs.map(img => `<img src="${img.src}" alt="Imagen" style="max-width:120px;display:inline-block;margin:5px;">`).join('');
    mostrar('', `Imágenes cargadas:<br>${html}`, true);
  } catch (error) {
    mostrar('', error, false);
  }
}