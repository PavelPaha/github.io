let form = document.querySelector('form');
let send = document.querySelector('.send');
let text = document.querySelector('textarea');
let submitButton = document.querySelector('.send>input');
let name = document.querySelector('form .name');
let email = document.querySelector('form').email;
let trueAddress = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
let i1 = false;
let i2 = false;
let i3 = false;
function valid(form){
	
	if (name == "" || name == " "){
		alert('Вы не ввели своё имя');

	}
	if (email == ""){
		alert("Вы не ввели эл. почту");
	}
}

text.oninput = function(){
	text.style.color = '#202117';
	text.style.borderColor = 'black';
	i1 = true;
	if (text.value.length < 10 || text.value.length > 200){
		text.style.color = 'red';
		text.style.borderColor = 'red';
		i1 = false;
	}
	if (i1 && i2 && i3) submitButton.disabled = false;
	else submitButton.disabled = true;
}
name.oninput = function(){
	i2=true;
	text.style.color = '#202117';
	text.style.borderColor = 'black';
	if (name.value.length==" " || name.value.length==" "){
		i2=false;
	}
	if (i1 && i2 && i3) submitButton.disabled = false;
	else submitButton.disabled = true;
}
email.oninput = function(){
	i3 = true
	if (trueAddress.test(email) == false){
		i3 = false;
	}
	if (i1 && i2 && i3) submitButton.disabled = false;
	else submitButton.disabled = true;

}

