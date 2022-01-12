/* Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona,
in cui è presente il nome dell’icona e l’icona stessa.
Milestone 2
Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). 
Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà “color” in modo dinamico:
generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo “#”
seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente.
*/

const catalog = [
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

function createInteger(inf,sup){
	return Math.floor(Math.random()*(sup-inf)+inf);
}

function convertInHexadecimal(n){
	return n.toString(16);
}

function createCatalogElement(element){
	const catalog = document.getElementById("catalog");
	let sup = parseInt("ffffff", 16);
	let n = createInteger(0,sup);
	let color = convertInHexadecimal(n);
	catalog.innerHTML +=`
	<div class="col-2 mx-2 bg-white my-4 ms-rounded">
		<div class="container">
			<div class="row text-center pt-4">
				<i class="fas fa-` +element.name+` fs-3" style="color:#`+color+`"></i>
			</div>
			<div class="row text-center pb-4 fs-6 text-uppercase">
				<span>`+(element.name)+`</span>
			</div>
		</div>
	</div>`
}

function clearCatalog(){
	const catalog = document.getElementById("catalog");
	catalog.innerHTML = "";
}

function filterCatalog(catalog){
		let select = document.getElementById("catalog-filter");
		let selectedValue = select.options[select.selectedIndex].value;
		let filteredCatalog = catalog.filter(function(element,index,catalog) {
			return element == selectedValue;
		});
		clearCatalog();
		for (let i=0; i<filteredCatalog.length;i++){
			createCatalogElement(filteredCatalog[i]);
		};
}

for (let i=0; i<catalog.length;i++){
	createCatalogElement(catalog[i]);
};

const filters = document.querySelectorAll(".filter-option");

for (let i=0; i<filters.length;i++){
	filters[i].addEventListener("change",filterCatalog);
}