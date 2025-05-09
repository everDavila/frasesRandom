// Configuración
const API_URL = 'https://davila.uno/api/?endpoint=random';
const fraseContainer = document.getElementById('frase');
const btnNuevaFrase = document.getElementById('btnNuevaFrase');

// Función principal para cargar una frase
async function cargarFraseAleatoria() {
    mostrarCargando();
    deshabilitarBoton();

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        mostrarFrase(data);
    } catch (error) {
        mostrarError(error);
    } finally {
        habilitarBoton();
    }
}

// Funciones para mostrar contenido
function mostrarFrase(data) {
    let contenidoHTML = '';

    if (data.records && data.records.length > 0) {
        const frase = data.records[0];
        contenidoHTML = crearHTMLFrase(frase);
    } else if (data.frase) {
        contenidoHTML = crearHTMLFrase(data);
    } else if (data.message) {
        contenidoHTML = `<div class="error">${data.message}</div>`;
    } else {
        contenidoHTML = `<div class="error">No hay frases disponibles.</div>`;
    }

    fraseContainer.innerHTML = contenidoHTML;
    fraseContainer.classList.add('fade-in');
}

function crearHTMLFrase(frase) {
    return `
        <div class="frase">"${escaparHTML(frase.frase)}"</div>
        <div class="autor">— ${escaparHTML(frase.autor)}</div>
        <div class="metadata">
            ${escaparHTML(frase.tipo)} - ${escaparHTML(frase.titulo_obra)}
            <br>
            ${escaparHTML(frase.ubicacion)}
        </div>
    `;
}

// Funciones de utilidad
function mostrarCargando() {
    fraseContainer.innerHTML = '<div class="loading">Cargando...</div>';
}

function mostrarError(error) {
    fraseContainer.innerHTML = `
        <div class="error">
            Error al cargar la frase: ${escaparHTML(error.message)}
        </div>
    `;
}

function deshabilitarBoton() {
    btnNuevaFrase.disabled = true;
}

function habilitarBoton() {
    btnNuevaFrase.disabled = false;
}

function escaparHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// Event Listeners
btnNuevaFrase.addEventListener('click', cargarFraseAleatoria);
document.addEventListener('DOMContentLoaded', cargarFraseAleatoria);

// Manejo de errores global
window.addEventListener('unhandledrejection', (event) => {
    console.error('Error no manejado:', event.reason);
    mostrarError(new Error('Ocurrió un error inesperado'));
});