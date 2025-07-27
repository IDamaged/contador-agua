let contador = 0;
let meta = 0;

function guardarMeta() {
  const nuevaMeta = parseInt(document.getElementById('metaAgua').value);
  if (nuevaMeta > 0) {
    meta = nuevaMeta;
    localStorage.setItem('meta', meta);
    document.getElementById('metaActual').innerText = meta + ' ml';
    actualizarProgreso();
  }
}

function agregarAgua(cantidad) {
  contador += cantidad;
  localStorage.setItem('contador', contador);
  document.getElementById('contador').innerText = contador;
  actualizarProgreso();
}

function resetear() {
  contador = 0;
  localStorage.setItem('contador', contador);
  document.getElementById('contador').innerText = 0;
  actualizarProgreso();
}

function actualizarProgreso() {
  const progreso = meta > 0 ? Math.min(100, (contador / meta) * 100) : 0;
  document.getElementById('barraProgreso').style.width = progreso + '%';
}

// Cargar valores guardados
window.onload = () => {
  meta = parseInt(localStorage.getItem('meta')) || 0;
  contador = parseInt(localStorage.getItem('contador')) || 0;
  document.getElementById('metaActual').innerText = meta ? meta + ' ml' : 'No definida';
  document.getElementById('contador').innerText = contador;
  actualizarProgreso();
}
