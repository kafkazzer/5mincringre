const elements = document.querySelectorAll(".flexbox");
const player = document.getElementById("player");
const hp_val = document.getElementById("hp_val");
const money_val = document.getElementById("money_val");
const heading = document.getElementById("heading");
const mess_text = document.getElementById("mess_text");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");

let temp_id = "";
let temp_pos = {};
let temp_en = {};
let player_cords = player.getBoundingClientRect();
let player_top = player_cords.top;
let player_left = player_cords.left;
let spam_stop = 0;
let hp_bar_max = 15;
let hp_point = 15;
let mana_bar_max = 20;
let mana_point = 20;
let live_m = [];
//a - normal, b - leet, c - treasury, d - event, f - shop, e - sun/moon, g - boss
let generate = ["a", "a", "a", "a", "a", "b", "b", "b", "c", "c", "d", "d", "f", "e"];
let room = 0;
let game_class_hero = 1;

elements.forEach((element) => {
  element.addEventListener("click", function (e) {
    if (spam_stop == 0) {
      temp_id = e.target.id;
      temp_pos = e.target.getBoundingClientRect();
      temp_en = enemys[temp_id];
      temp_id = document.getElementById(temp_id);
      if(temp_id.classList.contains('hide') == false){action();}
    }
  });
});
// logger
function func() {
  console.log("top: " + temp_pos.top, "left: " + temp_pos.left);
}
//функция запускающая то/иное дейсвие при нажатии
function action(){
  if (generate[room] == "a" || generate[room] == "b" || generate[room] == "g") {
    hero.attack();
  }
  if (generate[room] == "c" || generate[room] == "g" || generate[room] == "f") {
    hero.moveTo();
  }
}
//рандомит комнаты на этаже и добавляет в конец босса
function generate_lvl() {
  shuffle(generate);
  generate.push("g");
}
//удаляет ID из массива, используется для работы live_m
function removeItemOnce(arr, string) {
  let index = arr.indexOf(string);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}
//рандомит массив
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
//рандом в радиусе
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
