// variables
const carrito = document.querySelector("#carrito"),
	listaCursos = document.querySelector("#lista-cursos"),
	contenedorCarrito = document.querySelector("#lista-carrito tbody"),
	vaciarCarrito = document.querySelector("#vaciar-carrito");

cargarEventListeners();
function cargarEventListeners() {
	// cuando agregas un curso presionando "Agregar al Carrito"
	listaCursos.addEventListener("click", agregarCurso);
}

function agregarCurso(e) {
	e.preventDefault();
	if (e.target.classList.contains("agregar-carrito")) {
		const cursoSeleccionado = e.target.parentElement.parentElement;
		leerDatosCurso(cursoSeleccionado);
	}
}

// lee el contenido del HTMl al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso) {
	console.log(curso);
	// Crear un objeto con el contenido del curso actual
	const infoCurso = {
		imagen: curso.querySelector("img").src,
		titulo: curso.querySelector("h4").textContent,
		precio: curso.querySelector(".precio span").textContent,
		id: curso.querySelector("a").getAttribute("data-id"),
		cantidad: 1,
	};

	console.log(infoCurso);
}
