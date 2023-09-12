class Enemy {
  constructor(id) {
    this.id = id;
  }
  // говорит характеристики
  sayMe() {
    console.log(this.id, this.hp, this.dm);
  }
  // собирает Id в строку (нужно для работы anime), после вызывает ret_strike_all().
  // задержка в 700 нужна, что бы не ломалась анимация (duration*2)+100
  damage() {
    temp_id = "#" + this.id;
    anime({
      targets: temp_id,
      rotate: 10,
      duration: 300,
      direction: "alternate",
      scale: 1.2,
      // background: 'rgb(204, 0, 0)',
      border: "3px solid rgb(204, 0, 0)",
    });
    setTimeout(() => {
      this.ret_strike_all();
    }, 700);
  }
  //удаляет из массива live_m ID и добавляет класс "hide", далее, анимация как в damage
  //но с заменой фона, что убирает картинку
  dead() {
    removeItemOnce(live_m, this.id);
    // document.this.classList.add("hide");
    console.log(this.id);
    temp_id = "#" + this.id;
    anime({
      targets: temp_id,
      rotate: 10,
      duration: 300,
      direction: "alternate",
      scale: 1.2,
      background: "rgb(204, 0, 0)",
      border: "3px solid rgb(204, 0, 0)",
    });
  }
  //ответный удар, но только одного enemy
  ret_strike() {
    temp_id = "#" + this.id;
    anime({
      targets: temp_id,
      translateY: player_top - temp_pos.top,
      translateX: player_left - temp_pos.left,
      duration: 400,
      direction: "alternate",
      easing: "easeInQuad",
    });
    //hero get damage
    setTimeout(() => {
      temp_id = temp;
      hero.damage();
    }, 400);
  }
  //автоматичски вызывается из damage, проходит по массиву всех живых и заставляет их атаковать
  ret_strike_all() {
    if (live_m.length != 0) {
      let temp = this.id;
      for (let i = 0; i < live_m.length; i++) {
        temp_id = live_m[i];
        temp_pos = temp_id.getBoundingClientRect();
        anime({
          targets: temp_id,
          translateY: player_top - temp_pos.top,
          translateX: player_left - temp_pos.left,
          duration: 400,
          direction: "alternate",
          easing: "easeInQuad",
        });
      }
      //hero get damage
      setTimeout(() => {
        temp_id = temp;
        hero.damage();
      }, 400);
    }
  }
  //автоматичски вызывается из gen
  spawn() {
    temp_id = "#" + this.id;
    anime({
      targets: temp_id,
      duration: 200,
      direction: "alternate",
      scale: 1.1,
    });
  }
}
let enemy1 = new Enemy("id1");
let enemy2 = new Enemy("id2");
let enemy3 = new Enemy("id3");
let enemy4 = new Enemy("id4");
let enemy5 = new Enemy("id5");
let enemy6 = new Enemy("id6");
enemy1.name = "enemy1";

class Player {
  constructor(id) {
    this.id = id;
  }
  //автоматичски вызывается из ret_strike_all/ret_strike, запускает анимацию получения урона и делает его расчет
  //прибавляя весь урон и после нанося, изменения HP_bar так же просходит отсюда
  damage() {
    anime({
      targets: "#player",
      rotate: 10,
      duration: 300,
      direction: "alternate",
      scale: 1.2,
      // background: 'rgb(204, 0, 0)',
      border: "3px solid rgb(204, 0, 0)",
    });
    let temp =
      enemy1.dm + enemy2.dm + enemy3.dm + enemy4.dm + enemy5.dm + enemy6.dm;
    console.log(temp);
    anime({
      targets: "#hp_bar",
      value: [hp_point, hp_point - temp],
      round: 1,
      easing: "easeInOutExpo",
    });
    hp_point = hp_point - temp;
    setTimeout(() => (spam_stop = 0), 700);
  }

  heal() {
    anime({
      targets: "#player",
      duration: 300,
      direction: "alternate",
      translateY: -30,
      scale: 1.1,
      // background: 'rgb(204, 0, 0)',
      border: "3px solid rgb(34,139,34)",
    });
  }
  //атакует и вызывает анимацию урона, НО не правильно, тк делает новый экземляр класса
  //так мне посоветовали сделать чуваки из PDG
  //temp_en задаётся в main.js при клике
  //вызывается в случае a/b/g комнат
  attack() {
    spam_stop = 1;
    anime({
      targets: "#player",
      translateY: temp_pos.top - player_cords.top,
      translateX: temp_pos.left - player_cords.left,
      duration: 500,
      direction: "alternate",
      easing: "easeInQuad",
    });
    setTimeout(() => {
      temp_en.damage();
    }, 400);
  }
  //вызывается в случае c/g/f комнат, имеет другой easing, задержка так же из формулы (duration*2)+100
  moveTo() {
    spam_stop = 1;
    anime({
      targets: "#player",
      translateY: temp_pos.top - player_cords.top,
      translateX: temp_pos.left - player_cords.left,
      duration: 500,
      direction: "alternate",
      easing: "easeInOutSine",
    });
    setTimeout(() => {
      spam_stop = 0;
    }, 1100);
  }
}
let hero = new Player("#player");
hero.dm = 10;
class gen {
  //после запуска, в зависимости от переданной ему комнаты псевно-рандомно генерирует ее
  constructor(room) {
    this.room = room;
  }
  //a - normal, b - leet, c - treasury, d - event, f - shop, e - sun/moon, g - boss
  a() {
    this.null();
    let temp_rand = getRandomInRange(1, 1);
    if (temp_rand == 1) {
      live_m[0] = id1;
      temp_en = new Enemy("id1");
      temp_en.spawn();
      id1.style.backgroundImage = "url(2.png)";
      enemy1.dm = 4;
      enemy1.hp = 20;
    }
  }
  b() {}
  c() {}
  d() {}
  f() {}
  e() {}
  g() {
    this.null();
  }
  // сброс всех значений урона
  null() {
    enemy1.dm = 0;
    enemy2.dm = 0;
    enemy3.dm = 0;
    enemy4.dm = 0;
    enemy5.dm = 0;
    enemy6.dm = 0;
  }
}
let generate_class = new gen();
generate_class.null();
