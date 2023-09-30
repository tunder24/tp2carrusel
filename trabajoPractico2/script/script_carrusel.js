const contenedorNoticias = document.querySelector(".contenedorNoticias");
let indiceActual = 0;

function mostrarNoticia(indice) {
  const totalNoticias = contenedorNoticias.children.length;
  if (indice >= totalNoticias) {
    indice = 0;
  } else if (indice < 0) {
    indice = totalNoticias - 1;
  }
  contenedorNoticias.style.transform = `translateX(${-indice * 100}%)`;
  indiceActual = indice;
}

function siguiente() {
  mostrarNoticia(indiceActual + 1);
}

function anterior() {
  mostrarNoticia(indiceActual - 1);
}

const contenedorImagenes = document.querySelector(".contenedorImagenes");
let indiceActuall = 0;

function mostrarImagen(indicee) {
  const totalImagenes = contenedorImagenes.children.length;
  if (indicee >= totalImagenes) {
    indicee = 0;
  } else if (indicee < 0) {
    indicee = totalImagenes - 1;
  }
  contenedorImagenes.style.transform = `translateX(${-indicee * 100}%)`;
  indiceActuall = indicee;
}

function siguientee() {
  mostrarImagen(indiceActuall + 1);
}

function anteriorr() {
  mostrarImagen(indiceActuall - 1);
}
