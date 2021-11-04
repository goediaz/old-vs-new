function cambiarLaucha(onlyGato = false) {
  var element = document.getElementById('texto');
  // Cambia de laucha gato a laucha re gato y viceversa
  // onlyGato ? element.innerHTML = "Laucha gato" : element.innerHTML = "Laucha RE gato";;
  if (onlyGato) {
    element.innerHTML = "Laucha gato";
  } else {
    element.innerHTML = "Laucha RE gato";
  }
}