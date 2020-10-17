let posts = document.querySelectorAll('.main-flex-content-item');
let bigBlock1 = document.querySelectorAll('.big-block1');
let bigBlock2 = document.querySelectorAll('.big-block2');
// let img = document.querySelectorAll('img');
let MainFlexContent = document.querySelectorAll('.main-flex-content');
let select = document.querySelector('#select1');
let city = document.querySelector('.city');
let books = document.querySelector('.books');
let journey = document.querySelector('.journey');


select.onchange = function(){
	console.log(select.value);
	for (let post of posts){
		post.classList.add('none');
	}
	for (let block1 of bigBlock1){
		block1.classList.add('none');
	}
	for (let block2 of bigBlock2){
		block2.classList.add('none');
	}



	if (select.value == 'recipes'){
		for (let block2 of bigBlock2){
			block2.classList.remove('none');
		}
	}
	if (select.value == 'photos'){
		for (let block1 of bigBlock1){
		block1.classList.remove('none');
		}
	}

	if (select.value == 'city'){
		city.classList.remove('none');
	}

	if (select.value == 'journey'){
		journey.classList.remove('none');
	}

	if (select.value == 'books'){
		books.classList.remove('none');
	}

	if (select.value == 'all') {
		for (let post of posts){
		post.classList.remove('none');
	}
	for (let block1 of bigBlock1){
		block1.classList.remove('none');
	}
	for (let block2 of bigBlock2){
		block2.classList.remove('none');
	}
	}
}



