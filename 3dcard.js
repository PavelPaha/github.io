const card = document.querySelectorAll(".card");
for (let i of card){
	i.addEventListener("mousemove", startRotate);
	i.addEventListener("mouseout", stopRotate);
}


function startRotate(event){
	const cardItem = this.querySelector(".card__item");
	const halfHeight = cardItem.offsetHeight / 2;
	cardItem.style.transform = 'rotateX('+ - (event.offsetY - halfHeight)/7 + 'deg) rotateY('+(event.offsetX - halfHeight)/7 + 'deg) ';
}

function stopRotate(event){
	const cardItem = this.querySelector(".card__item");
	cardItem.style.transform = 'rotate(0)';
}