// cambie el scope de la variable
const formulario = document.getElementById("formulario");

// coloque un nombre al parametro mas descriptivo
formulario.onsubmit = function (event) {
    // la funcion prevent estaba mal escrita
    event.preventDefault();

    /*
    cambie a nombres mas descriptivos y el scope de las variables
    obtengo los valores de name y age ya que no necesito el elemento completo
    y evito crear variables innecesarias
    */
	const name = formulario.elements[0].value;
	const age = formulario.elements[1].value;
	const nationality = formulario.elements[2];
    

	var i = na.selectedIndex;
	var nacionalidad = na.options[i].value;
	console.log(nombre, edad);
	console.log(nacionalidad);

	if (nombre.length === 0) {
		n.classList.add("error");
	}
	if (edad < 18 || edad > 120) {
		e.classList.add("error");
	}

	if (nombre.length > 0 && edad > 18 && edad < 120) {
		agregarInvitado(nombre, edad, nacionalidad);
	}
};

var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
	if (nacionalidad === "ar") {
		nacionalidad = "Argentina";
	} else if (nacionalidad === "mx") {
		nacionalidad = "Mexicana";
	} else if (nacionalidad === "vnzl") {
		nacionalidad = "Venezolana";
	} else if (nacionalidad === "per") {
		nacionalidad = "Peruana";
	}

	var lista = document.getElementById("lista-de-invitados");

	var elementoLista = document.createElement("div");
	elementoLista.classList.added("elemento-lista");
	lista.appendChild(elementoLista);

	var spanNombre = document.createElement("span");
	var inputNombre = document.createElement("input");
	var espacio = document.createElement("br");
	spanNombre.textContent = "Nombre: ";
	inputNombre.value = nombre;
	elementoLista.appendChild(spanNombre);
	elementoLista.appendChild(inputNombre);
	elementoLista.appendChild(espacio);

	function crearElemento(descripcion, valor) {
		var spanNombre = document.createElement("span");
		var inputNombre = document.createElement("input");
		var espacio = document.createElement("br");
		spanNombre.textContent = descripcion + ": ";
		inputNombre.value = valor;
		elementoLista.appendChild(spanNombre);
		elementoLista.appendChild(inputNombre);
		elementoLista.appendChild(espacio);
	}

	crearElemento("Nombre", nombre);
	crearElemento("Edad", edad);
	crearElemento("Nacionalidad", nacionalidad);

	var botonBorrar = document.createElement("button");
	botonBorrar.textContent = "Eliminar invitado";
	botonBorrar.id = "boton-borrar";
	var corteLinea = document.createElement("br");
	elementoLista.appendChild(corteLinea);
	elementoLista.appendChild(botonBorrar);

	botonBorrar.onclick = function () {
		// this.parentNode.style.display = 'none';
		botonBorrar.parentNode.remove();
	};
}
