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
		console.log("Agregando al carrito");
	}
}
