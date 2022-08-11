var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var shot = [];

while (isSunk == false) {
	guess = prompt("Привет! Это мини игра морской бой :) Представь, что в 7 ячейках по горизонтали ••••••• (от одного до семи) расположен 3-ёх палубный корабль врага. Твоя задача потопить его за меньшее кол-во попыток. Стреляй! (введи число 1-7):");	
if (guess < 1 || guess > 7) {
		alert("Введи валидное значение 1-7");
	} else {
		guesses = guesses + 1;
		if (guess == location1 || guess == location2 || guess == location3) {
		   if(shot.includes(guess)){
			alert("Вы сюда уже стреляли!");
		   }else{
			alert("Попал!");
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;
				alert("Корабль потоплен!");
			}
		shot.push(guess);
		}
		} else {
			alert("Мимо");
	}
    }
}
var stats = "Ты справился за " + guesses + " попыток. Твоя точность равна " + (3 / guesses);
alert(stats);
