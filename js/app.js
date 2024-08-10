// variables
const carrito = document.querySelector("#carrito"),
	listaCursos = document.querySelector("#lista-cursos"),
	contenedorCarrito = document.querySelector("#lista-carrito tbody"),
	vaciarCarrito = document.querySelector("#vaciar-carrito");

let articulosCarrito = [];

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
	// Crear un objeto con el contenido del curso actual
	const infoCurso = {
		imagen: curso.querySelector("img").src,
		titulo: curso.querySelector("h4").textContent,
		precio: curso.querySelector(".precio span").textContent,
		id: curso.querySelector("a").getAttribute("data-id"),
		cantidad: 1,
	};

	// revisa si un elemento ya existe en el carrito
	const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);

	if (existe) {
		// Actualizamos la cantidad
		const cursos = articulosCarrito.map((curso) => {
			if (curso.id === infoCurso.id) {
				curso.cantidad++;
				return curso; // Retorna el objeto actual
			} else {
				return curso; // Retorna los objetos que no son los duplicados
			}
		});
		articulosCarrito = [...cursos];
	} else {
		// Agrega elementos al arreglo de carrito
		articulosCarrito = [...articulosCarrito, infoCurso];
	}

	carritoHTML();
}

// Muetsra el carrito de compras en el HTML
function carritoHTML() {
	// Limpiar el HTML
	limpiarHTML();

	articulosCarrito.forEach((curso) => {
		const { imagen, titulo, precio, cantidad, id } = curso;
		const row = document.createElement("tr");

		// Crear y agregar la celda de la imagen
		const imgCell = document.createElement("td");
		const img = document.createElement("img");
		img.src = imagen;
		img.width = 100;
		imgCell.appendChild(img);
		row.appendChild(imgCell);

		// Crear y agregar la celda del título
		const titleCell = document.createElement("td");
		titleCell.textContent = titulo;
		row.appendChild(titleCell);

		// Crear y agregar la celda del precio
		const priceCell = document.createElement("td");
		priceCell.textContent = precio;
		row.appendChild(priceCell);

		// Crear y agregar la celda de la cantidad
		const quantityCell = document.createElement("td");
		quantityCell.textContent = cantidad;
		row.appendChild(quantityCell);

		// Crear y agregar la celda del enlace de borrar
		const deleteCell = document.createElement("td");
		const deleteLink = document.createElement("a");
		deleteLink.href = "#";
		deleteLink.className = "borrar-curso";
		deleteLink.dataset.id = id;
		deleteLink.textContent = " X ";
		deleteCell.appendChild(deleteLink);
		row.appendChild(deleteCell);

		// agregar el HTML del carrito en el tbody
		contenedorCarrito.appendChild(row);
	});
}

// Eliminar los cursos del tbody
function limpiarHTML() {
	// Forma lenta
	// contenedorCarrito.innerHTML = "";

	// Forma rapida
	while (contenedorCarrito.firstChild) {
		contenedorCarrito.removeChild(contenedorCarrito.firstChild);
	}
}
