const elements = document.querySelectorAll(".flexbox");
const player = document.getElementById("player");

let temp_id = "";
let temp_pos = {};
let player_cords = player.getBoundingClientRect();
let player_top = player_cords.top;
let player_left = player_cords.left;
let spam_stop = 0;
let hp_bar_max = 15;
let hp_point = 15;
let mana_bar_max = 20;
let mana_point = 20;
let live_m = [id1, id2, id3];
console.log("player_top: " + player_top, "player_left: " + player_left);

elements.forEach((element) => {
  element.addEventListener("click", function (e) {
    if (spam_stop == 0) {
      temp_id = e.target.id;
      temp_pos = e.target.getBoundingClientRect();
      func();
    }
  });
});

// logger
function func() {
  console.log("top: " + temp_pos.top, "left: " + temp_pos.left);
  hero.moveTo();
}

function removeItemOnce(arr, value) {
    let index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }  
