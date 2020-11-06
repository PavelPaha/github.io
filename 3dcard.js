const card = document.querySelector(".card");

card.addEventListener("mousemove", rotate)


function rotate(event){
	const cardItem = this.querySelector(".card__item");
	const halfHeight = cardItem.offsetHeight / 2;
	cardItem.style.transform = 'rotateX('+ - (event.offsetY - halfHeight)/5 + 'deg)';
}