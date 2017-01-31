// plik scripts.js 

var buttons = document.getElementsByClassName('button'),
	verse = '';

for (var i = 0; i < buttons.length; i++) {
	console.log(buttons[i].innerText);
	verse = verse + ' ' + buttons[i].innerText;
}
console.log(verse.slice(1));