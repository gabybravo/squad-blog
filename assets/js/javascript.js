function MiembroSquad(nombreApellido, edad, hobbies){
	this.nombreApellido = nombreApellido;
	this.edad = edad;
	this.hobbies = hobbies;
}

var arr =[];
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

var imprimir = document.getElementById("compas");
var comentario = document.getElementById("comentario");

arr.forEach(function(el){

    imprimir.innerHTML +=  "<div>" + "<b>Nombre:</b> " + el.nombreApellido + "<br><b>Edad:</b> " + el.edad + "<br><b>Hobbies:</b><br>";
    var lista = "<ul> " + el.hobbies.forEach(function(h){
    	return (imprimir.innerHTML += "<li>" + h + "</li>")}) + '</ul>';
    imprimir.innerHTML += "<br>" + "<textarea name='textarea' rows='9' cols='60'>Escribe aquí tus comentarios</textarea>" + "</div>";
    
})




