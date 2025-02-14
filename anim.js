// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "pero claro que me aterra sentir", time: 10 },
  { text: "mas porque en tan poco tiempo", time: 15 },
  { text: "demasiado es lo que yo siento", time: 20 },
  { text: "corrijo, poco demasiado", time: 25 },
  { text: "es lo que debo decir para que", time: 30 },
  { text: "no te asustes y no te tengas que ir", time: 35 },
  { text: "me gustas poco demasiado", time: 40 },
  { text: "te quiero poco demasiado", time: 45 },
  { text: "me duele poco demasido", time: 50 },
  { text: "me aterra poco demasido", time: 55 },
  { text: "pero que tarea tan complicada", time: 60 },
  { text: "es ocultar algo tan bello como sentir", time: 65 },
  { text: "todo porque realmente nos aterra...", time: 70 },
  { text: "lo que vayan a decir", time: 75 },
  { text: "cada ida o despedida", time: 80 },
  { text: "cada vuelta en cada esquina", time: 85 },
  { text: "lo que veo, lo que oigo,  lo que toco", time: 90 },
  { text: "quizas yo soy el loco", time: 95 },
  { text: "pero claro que me aterra sentir", time: 100 },
  { text: "mas cuando siento", time: 105 },
  { text: "que no te siento a ti", time: 110 },
  
  { text: "TE QUIERO Y FELIZ SANVALENTIN  ELIZABETH.", time: 115 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);