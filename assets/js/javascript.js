//Función que contiene el constructor de los miembros del squad junto al método que imprime en el HTML los datos y las funcionalidades de los botones: 
function MiembroSquad(nombreApellido, edad, hobbies){
	this.nombreApellido = nombreApellido;
	this.edad = edad;
	this.hobbies = hobbies;
	this.imagen = new Image();
	this.imagen.src = "assets/images/image.PNG";

//Este método es el que refleja cada dato de mis compañeras y contiene los botones para agregar comentario y dar like:
	this.mostrar = function (){
		var imprimir = document.getElementById("compas");
		var divVacio = document.createElement("div");
		divVacio.className = "usuario";
		var divTexto = document.createElement("div");
		divVacio.appendChild(this.imagen);
		divTexto.className = "texto";
		divVacio.innerHTML += "<br>" + "<b>Nombre:</b> " + nombreApellido + "<br><b>Edad:</b> " + edad + "<br><b>Hobbies:</b><br>";
		imprimir.appendChild(divVacio) 
		var lista = document.createElement("li");
		lista.innerHTML = hobbies.forEach(function(e){
		divVacio.innerHTML += "<li>" + e + "</li>";
		});
		divVacio.appendChild(divTexto);
		var divComentarios = document.createElement("div");
		divComentarios.className = "comentarios";
		var form = document.createElement("form");
		var input = document.createElement("textarea");
		var boton = document.createElement("button");
		var botonTexto = document.createTextNode("Comentar");
		boton.appendChild(botonTexto);
		boton.className = "boton1";
		input.id = "comentarioPara" + squad.indexOf(this);
		input.placeholder = "Escribe aquí un comentario..."
		form.appendChild(input);
		form.appendChild(boton);
		var comentarios = document.createElement("H4");
		var comentariosTexto = document.createTextNode("Comentarios: ");
		comentarios.appendChild(comentariosTexto);
		var divComentariosUsuario = document.createElement("div");
		divComentariosUsuario.id = "comentarios" + squad.indexOf(this);

//Esta es la función que realiza el botón "Comentar" al momento de presionarlo:
		boton.onclick = function agregarComentario(){
			document.getElementById(divComentariosUsuario.id).innerHTML += '<p>' + input.value + "</p><button onclick=like()>❤</button>";
				return false;
			};
		divComentarios.appendChild(form);
		divComentarios.appendChild(comentariosTexto);
		divComentarios.appendChild(divComentariosUsuario);
		divVacio.appendChild(divComentarios);
		imprimir.appendChild(divVacio);
	}

}

// Esta es la función que debería ejecutarse al dar click en el corazón, pero no logré desarrollarla:
function like(){
alert("+1");
}

//Aquí están las instancias creadas para cada compañera:
var gaby = new MiembroSquad("Gaby Bravo", "28 años", ["Pintar", "Ver anime", "Jugar Aion"])
var karina = new MiembroSquad("Karina Laroze", "21 años", ["Bailar"])
var mily = new MiembroSquad("Mily Rivas", "18 años", ["Leer", "Ver películas"])
var marcela = new MiembroSquad("Marcela Orellana", "31 años", ["Andar en bicicleta", "Ver series coreanas"])
var angela = new MiembroSquad("Angela Aliaga", "32 años", ["Leer", "Escuchar música", "Jugar Donkey Kong Country"])
var dani = new MiembroSquad("Daniela Risco", "35 años", ["Ver películas"])
var paty = new MiembroSquad("Patricia Zabala", "28 años", ["Cantar"])

//Este es el arreglo que contiene a las compañeras creadas mediante instancias y con el método mostrar se produce la acción:
var squad = [gaby, karina, mily, marcela, angela, dani, paty];

//Con este forEach se puede imprimir cada atributo y método por cada compañera del squad:
squad.forEach(function(element){element.mostrar();});

