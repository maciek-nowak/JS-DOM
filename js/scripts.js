// plik scripts.js 

var buttonElement = document.getElementById('addElem'),
	list = document.getElementById('Lista');
	itemNumber = 1;

function checkOnclickEvent(param) { 
	list.innerHTML += '<li>item ' + param +'</li>';
} 

buttonElement.addEventListener('click', function(e) { 
	checkOnclickEvent(itemNumber);
	itemNumber++; 
}); 

