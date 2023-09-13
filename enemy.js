class Enemy {
  constructor(id) {
    this.id = id;
  }
  // говорит характеристики
  sayMe() {
    console.log(` ${this.id}, ${this.hp}, ${this.dm}`);
  }
  // собирает Id в строку (нужно для работы anime), после вызывает ret_strike_all().
  // задержка в 700 нужна, что бы не ломалась анимация (duration*2)+100
  damage() {
    temp_en.hp = temp_en.hp - hero.dm;
    if (temp_en.hp > 0) {
      temp_id = "#" + `${this.id}`;
      anime({
        targets: temp_id,
        rotate: 10,
        duration: 300,
        direction: "alternate",
        scale: 1.2,
        boxShadow:'0px 0px 10px 0px rgba(204, 0, 0, 0.7)',
        border: "3px solid rgb(204, 0, 0)",
      });
      setTimeout(() => {
        this.ret_strike_all();
      }, 700);
    } else {
      this.dead();
    }
  }
  //удаляет из массива live_m ID и добавляет класс "hide", далее, анимация как в damage
  //но с заменой фона, что убирает картинку
  dead() {
    temp_id = "#" + `${this.id}`;
    this.null();
    anime({
      targets: temp_id,
      rotate: 10,
      duration: 300,
      direction: "alternate",
      scale: 1.2,
      background: "rgb(204, 0, 0)",
      boxShadow:'0px 0px 10px 0px rgba(204, 0, 0, 0.7)',
      border: "3px solid rgb(204, 0, 0)",
    });
    setTimeout(() => (spam_stop = 0), 700);
  }
  //ответный удар, но только одного enemy
  ret_strike() {
    temp_id = "#" + `${this.id}`;
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
  //лечение, но феолетовое 
  heal() {
    temp_id = "#" + `${this.id}`;
    anime({
      targets: temp_id,
      duration: 300,
      direction: "alternate",
      translateY: -10,
      scale: 1.1,
      boxShadow:'0px 0px 10px 0px rgba(153,102,204,0.7)',
      border: "3px solid rgb(153,102,204)",
    });
  }
  //автоматичски вызывается из gen
  spawn() {
    temp_id = "#" + `${this.id}`;
    anime({
      targets: temp_id,
      duration: 200,
      direction: "alternate",
      scale: 1.1,
    });
  }
  // сброс всех значений
  null() {
    temp_en.hp = 0;
    temp_en.dm = 0;
    let temp = document.getElementById(this.id);
    setTimeout(() => temp.classList.add("hide"), 600);
    removeItemOnce(live_m, temp);
  }
}
let enemys = {};
enemys["id1"] = new Enemy("id1");
enemys["id2"] = new Enemy("id2");
enemys["id3"] = new Enemy("id3");
enemys["id4"] = new Enemy("id4");
enemys["id5"] = new Enemy("id5");
enemys["id6"] = new Enemy("id6");
