class Player {
  constructor(id) {
    this.id = id;
  }
  //автоматичски вызывается из ret_strike_all/ret_strike, запускает анимацию получения урона и делает его расчет
  //прибавляя весь урон и после нанося, изменения HP_bar так же просходит отсюда
  damage() {
    anime({
      targets: "#player",
      rotate: 5,
      duration: 300,
      direction: "alternate",
      scale: 1.2,
      boxShadow:'0px 0px 10px 0px rgba(204, 0, 0, 0.7)',
      border: "3px solid rgb(204, 0, 0)",
    });
    let temp = enemys["id1"].dm + enemys["id2"].dm;
    // console.log(temp);
    anime({
      targets: "#hp_bar",
      value: [hp_point, hp_point - temp],
      round: 1,
      easing: "easeInOutExpo",
    });
    anime({
      targets: "#hp_val",
      value: [hp_point],
      round: 1,
      easing: "easeInOutExpo",
    });
    hp_point = hp_point - temp;
    hp_val.innerHTML = hp_point;
    setTimeout(() => (spam_stop = 0), 700);
  }

  heal() {
    anime({
      targets: "#player",
      duration: 300,
      direction: "alternate",
      translateY: -10,
      scale: 1.1,
      boxShadow:'0px 0px 10px 0px rgba(34,139,34,0.7)',
      border: "3px solid rgb(34,139,34)",
    });
  }
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
      temp_en.taking();
    }, 400);
  }
  //способность 
  cast(){
    anime({
      targets: "#player",
      duration: 300,
      direction: "alternate",
      translateY: -10,
      scale: 1.1,
      boxShadow:'0px 0px 10px 0px rgba(0,0,125,0.7)',
      border: "3px solid rgb(0,0,125)",
    });
  }
}
let hero = new Player("#player");
hero.dm = 10;
hero.mn = 0;
function god_mode(){
  hero.dm = 100;
  hero.hp = 1000;
  hero.mn = 1000;
}