var arr = [];
var comentarios = [];

function MiembroSquad(nombreApellido, edad, hobbies){
	this.nombreApellido = nombreApellido;
	this.edad = edad;
	this.hobbies = hobbies;
}

function Comentario(id_miembro,comentario,likes){
	this.id_miembro = id_miembro;
	this.comentario = comentario;
	this.likes = likes;
}

function compas(){
	var gaby = new MiembroSquad("Gaby Bravo", "28 años", ["Pintar", "Ver anime", "Jugar Aion"])
	arr.push(gaby);
	var karina = new MiembroSquad("Karina Laroze", "21 años", ["Bailar"])
	arr.push(karina);
	var mily = new MiembroSquad("Mily Rivas", "18 años", ["Leer", "Ver películas"])
	arr.push(mily);
	var marcela = new MiembroSquad("Marcela Orellana", "31 años", ["Andar en bicicleta", "Ver series coreanas"])
	arr.push(marcela);
	var angela = new MiembroSquad("Angela Aliaga", "32 años", ["Leer", "Escuchar música", "Jugar Donkey Kong Country"])
	arr.push(angela);
	var dani = new MiembroSquad("Daniela Risco", "35 años", ["Ver películas"])
	arr.push(dani);
	var paty = new MiembroSquad("Patricia Zabala", "28 años", ["Cantar"])
	arr.push(paty);

mostrar();
}

function mostrar(){
var imprimir = document.getElementById("compas");

arr.forEach(function(el){
var divVacio = document.createElement("div")
divVacio.innerHTML += "<br>" + "<b>Nombre:</b> " + el.nombreApellido + "<br><b>Edad:</b> " + el.edad + "<br><b>Hobbies:</b><br>";
imprimir.appendChild(divVacio) 
var lista = document.createElement("li");
lista.innerHTML = el.hobbies.forEach(function(e){
divVacio.innerHTML += "<li>" + e + "</li>";
});
	
var caja = document.createElement("textarea");
caja.setAttribute("cols","50");
caja.setAttribute("rows","4");
divVacio.appendChild(caja);

var botonComentar = document.createElement("button");
botonComentar.setAttribute("onclick","crearComentario()");
var nombreBoton = document.createTextNode("Dejar Comentario");
botonComentar.appendChild(nombreBoton);
divVacio.appendChild(botonComentar);
});
}

compas();