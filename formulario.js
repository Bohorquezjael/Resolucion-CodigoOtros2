// cambie el scope de la variable
const formulario = document.getElementById("formulario");

// coloqué un nombre al parametro mas descriptivo
formulario.onsubmit = function (event) {
	// la funcion prevent estaba mal escrita
	event.preventDefault();

	/*
    cambie a nombres mas descriptivos y el scope de las variables
    obtengo los valores de name,age y nationality ya que no necesito el elemento completo
    y evito crear variables innecesarias
    */
	const name = formulario.elements[0].value;
	const age = formulario.elements[1].value;
	const nationality = formulario.elements[2].value;

	console.log(name, age);
	console.log(nationality);

	/*
    hago un refactor y delego la responsabilidad de validacion y modularizo la creacion
    de los elementos que contienen a la lista y como se añaden elementos a esta
    */

	if (!isValidPerson(name, age)) {
		return; //TODO: mostrar mensaje de error en los inputs
	}

	//createInvitedList();
	agregarInvitado(name, age, nationality);
};

//meti la creacion de elementos en la misma funcion ademas estaba repetido

function agregarInvitado(nombre, edad, nacionalidad) {
	//elimine validacion innecesaria

	const lista = document.getElementById("lista-de-invitados");
    const elementoLista = document.createElement("div");
	//elementoLista.classList.added("elemento-lista");
    elementoLista.id = "elemento-lista";
	lista.appendChild(elementoLista);

    //elimine funciones internas y codigo repetido

	crearElemento("Nombre", nombre);
	crearElemento("Edad", edad);
	crearElemento("Nacionalidad", nacionalidad);

	const botonBorrar = document.createElement("button");
	botonBorrar.textContent = "Eliminar invitado";
	botonBorrar.id = "boton-borrar";
	const corteLinea = document.createElement("br");
	elementoLista.appendChild(corteLinea);
	elementoLista.appendChild(botonBorrar);

	botonBorrar.onclick = function () {
		// this.parentNode.style.display = 'none';
		botonBorrar.parentNode.remove();
	};
}

function isValidPerson(name, age) {
	let regEx = /[0-9!@#$%^&*(),.?":{}|<>]/;
	if (name.match(regEx)) {
		alert("El nombre no puede contener numeros ni caracteres especiales");
		return false;
	}

	if (age < 18 || age > 120) {
		alert("La edad debe ser mayor a 18 y menor a 120");
		return false;
	}

	return true;
}

function createInvitedList() {
	const botonBorrar = document.createElement("button");
	botonBorrar.textContent = "Eliminar invitado";
	botonBorrar.id = "boton-borrar";
	const corteLinea = document.createElement("br");
	document.body.appendChild(corteLinea);
	document.body.appendChild(botonBorrar);
}

function crearElemento(descripcion, valor) {
    const spanNombre = document.createElement("span");
    const inputNombre = document.createElement("input");
    const espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    const elementoLista = document.getElementById("elemento-lista");
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
}