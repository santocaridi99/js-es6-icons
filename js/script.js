const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];
//collego container row
const iconContainer = document.querySelector('.row');
//(bonus)funzione per creare numeri random esadecimali per i colori
function randomColor (){
    let newColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
	return newColor;
}
//funzione per creare icone
function iconsGenerator(iconsList,container){
	//for each dell'array icons (item , index) 
    //do all'inner html  di container i dati ricavati da ogni oggetto dell'array
	iconsList.forEach((obj) => {
		container.innerHTML+=`
			<div class="card d-flex col-2 me-5 mt-5 text-center">
				<i class="${obj.family} ${obj.prefix}${obj.name} ${obj.color} font-icons "></i>
				<div><span class="fw-bold">${obj.name}</span></div>
			</div>
		`
	})
}
//richiamo la funzione di generazione icone e genero
iconsGenerator(icons,iconContainer)
//assegno a nuovi array ,oggetti filtrati per tipo
//filtro tutti(all)
const all = icons.filter(function (newObj) {
	return newObj.type;
});
console.log(all);//debug
//filtro animali
const animal = icons.filter(function(newObj){
	return newObj.type==="animal";
});
console.log(animal);//debug
//filtro  vegetali
const vegetable = icons.filter(function(newObj){
	return newObj.type==="vegetable";
})
console.log(vegetable);//debug
//filtro user
const users = icons.filter(function(newObj){
	return newObj.type==="user";
})
console.log(users);//debug
const selectInput = document.getElementById('select');
//addevent all id select
selectInput.addEventListener("change" , () => {
	//es se seleziono valore uno
	//svuoto container
	//genero schede che hanno all come array
	if(selectInput.value==="1"){
		iconContainer.innerHTML = "";//svuoto container sennò li aggiunge
        iconsGenerator(all,iconContainer)
	}else if(selectInput.value==="2") {
		iconContainer.innerHTML = "";//svuoto container
		iconsGenerator(animal,iconContainer);
	}else if(selectInput.value==="3") {
		iconContainer.innerHTML = "";//svuoto container
		iconsGenerator(vegetable,iconContainer);
	}else if(selectInput.value==="4") {
		iconContainer.innerHTML = "";//svuoto container
		iconsGenerator(users,iconContainer);
	}
})
