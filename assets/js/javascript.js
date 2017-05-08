function MiembroSquad(nombreApellido, edad, hobbies){
	this.nombreApellido = nombreApellido;
	this.edad = edad;
	this.hobbies = hobbies;
	this.mostrar = function (){
		var imprimir = document.getElementById("compas");
		var divVacio = document.createElement("div");
		divVacio.className = "usuario";
		var divTexto = document.createElement("div");
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

		boton.onclick = function agregarComentario(){
			document.getElementById(divComentariosUsuario.id).innerHTML += '<p>' + input.value + "</p><button onclick=like()>Like</button>";
				return false;
			};
		divComentarios.appendChild(form);
		divComentarios.appendChild(comentariosTexto);
		divComentarios.appendChild(divComentariosUsuario);
		divVacio.appendChild(divComentarios);
		imprimir.appendChild(divVacio);
	}

}

var gaby = new MiembroSquad("Gaby Bravo", "28 años", ["Pintar", "Ver anime", "Jugar Aion"])
var karina = new MiembroSquad("Karina Laroze", "21 años", ["Bailar"])
var mily = new MiembroSquad("Mily Rivas", "18 años", ["Leer", "Ver películas"])
var marcela = new MiembroSquad("Marcela Orellana", "31 años", ["Andar en bicicleta", "Ver series coreanas"])
var angela = new MiembroSquad("Angela Aliaga", "32 años", ["Leer", "Escuchar música", "Jugar Donkey Kong Country"])
var dani = new MiembroSquad("Daniela Risco", "35 años", ["Ver películas"])
var paty = new MiembroSquad("Patricia Zabala", "28 años", ["Cantar"])

var squad = [gaby, karina, mily, marcela, angela, dani, paty];

squad.forEach(function(element){element.mostrar();});

