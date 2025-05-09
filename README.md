# Frases Aleatorias

Este proyecto es una aplicación web simple que muestra frases aleatorias obtenidas desde una API externa. La interfaz está diseñada para ser minimalista y fácil de usar.

## Características

- Obtiene frases aleatorias desde una API.
- Muestra la frase, el autor, el tipo, el título de la obra y la ubicación.
- Incluye manejo de errores y animaciones de carga.
- Diseño responsivo y moderno.

## Estructura del Proyecto

## Cómo Usar

1. Abre el archivo `index.html` en tu navegador.
2. La aplicación cargará automáticamente una frase aleatoria al iniciar.
3. Haz clic en el botón "Obtener nueva frase" para cargar otra frase.

## Dependencias

Este proyecto no utiliza dependencias externas. Todo el código está contenido en el archivo `index.html`.

## API Utilizada

La aplicación utiliza la siguiente API para obtener frases aleatorias:

- **URL**: `https://davila.uno/api/?endpoint=random`

## Funcionalidades Técnicas

- **Carga de Frases**: Se utiliza `fetch` para realizar solicitudes HTTP a la API.
- **Manejo de Errores**: Se manejan errores de red y de respuesta de la API.
- **Escapado de HTML**: Se utiliza una función para evitar inyecciones de código malicioso.
- **Animaciones**: Se incluye una animación de desvanecimiento al mostrar nuevas frases.

## Personalización

Puedes modificar el estilo o el comportamiento de la aplicación editando el archivo `index.html`. Por ejemplo:

- Cambia los estilos en la sección `<style>` para personalizar el diseño.
- Modifica la constante `API_URL` para usar una API diferente.

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras un problema o tienes una idea para mejorar el proyecto, no dudes en abrir un issue o enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

