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
      this.spawn_stat("id1", 4, 20, id1);

      id2.style.backgroundImage = "url(enemy/2.png)";
      this.spawn_stat("id2", 4, 20, id2);
    }
  }
  b() {}
  c() {}
  d() {}
  f() {}
  e() {}
  g() {}
  spawn_stat(id, dm, hp, idForLive) {
    enemys[id].dm = dm;
    enemys[id].hp = hp;
    enemys[id].spawn();
    live_m.push(idForLive);
    idForLive.classList.remove("hide");
  }
}
let generate_class = new gen();