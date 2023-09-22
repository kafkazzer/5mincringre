class gen {
  //после запуска, в зависимости от переданной ему комнаты псевно-рандомно генерирует ее
  constructor(room) {
    this.room = room;
  }
  //a - normal, b - leet, c - treasury, d - event, f - shop, e - sun/moon, g - boss
  a() {
    let temp_rand = getRandomInRange(1, 1);
    if (temp_rand == 1) {
      id1.style.backgroundImage = "url(enemy/2.png)";
      this.spawn_stat("id1", 4, 20, id1, 10);

      id2.style.backgroundImage = "url(enemy/2.png)";
      this.spawn_stat("id2", 4, 20, id2, 10);
    } 
  }
  b() {}
  c() {
    let temp_rand = getRandomInRange(1, 1);
    if(temp_rand == 1){
      id5.style.backgroundImage = "url(Chest/2.png)";
      id5.classList.remove("hide");
      enemys['id5'].spawn();
    }
  }
  d() {
    let temp_rand = getRandomInRange(1, 1);
    if(temp_rand == 1){
      mes_class.editing('lol', 'just a test message', 'money 100', 0);
      mes_class.show();
    }
  }
  f() {}
  e() {}
  g() {}
  spawn_stat(id, dm, hp, idForLive, money) {
    enemys[id].dm = dm;
    enemys[id].hp = hp;
    enemys[id].mn = money;
    enemys[id].spawn();
    live_m.push(idForLive);
    idForLive.classList.remove("hide");
  }
}
let generate_class = new gen();
generate_class.a()