// Variables
const formularioNota = document.getElementById('formulario-nota');
const listaNotas = document.getElementById('lista-notas');

// Función para crear una nota
function crearNota(titulo, contenido) {
    const nota = {
        titulo,
        contenido
    };
    // Almacenamiento local
    const notas = JSON.parse(localStorage.getItem('notas')) || [];
    notas.push(nota);
    localStorage.setItem('notas', JSON.stringify(notas));
    // Agregar nota a la lista
    const li = document.createElement('li');
    li.textContent = `${titulo}: ${contenido}`;
    listaNotas.appendChild(li);
}

// Función para cargar las notas desde el almacenamiento local
function cargarNotas() {
    const notas = JSON.parse(localStorage.getItem('notas')) || [];
    notas.forEach(nota => {
        const li = document.createElement('li');
        li.textContent = `${nota.titulo}: ${nota.contenido}`;
        listaNotas.appendChild(li);
    });
}

// Eventos
formularioNota.addEventListener('submit', (e) => {
    e.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const contenido = document.getElementById('contenido').value;
    crearNota(titulo, contenido);
    formularioNota.reset();
});

// Cargar notas al inicio
cargarNotas();