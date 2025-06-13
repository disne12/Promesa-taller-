// caso05-cargarImagen.js
export async function ejecutarCaso5(mostrar) {
  function cargarImagen(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject("Error al cargar la imagen");
      img.src = url;
    });
  }
// la url de la imagen debe ser correcta
  // si no, se ejecutará error  
  try {
    const img = await cargarImagen("mjpg.jpg");
    mostrar('Imagen', `Imagen cargada exitosamente ✅<br><img src="${img.src}" alt="Imagen" style="max-width:200px;display:block;margin-top:10px;">`, true);
  } catch (error) {
    mostrar('Error', error, false);
  }
}