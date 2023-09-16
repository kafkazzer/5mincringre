//amination
function moveTo() {
  spam_stop = 1;
  anime({
    targets: "#player",
    translateY: temp_pos.top - player_cords.top,
    translateX: temp_pos.left - player_cords.left,
    duration: 500,
    direction: "alternate",
    easing: "easeInQuad",
  });
  setTimeout(() => damage(), 400);
}

function damage() {
  temp_id = "#" + temp_id;
  anime({
    targets: temp_id,
    rotate: 10,
    duration: 300,
    direction: "alternate",
    scale: 1.2,
    // background: 'rgb(204, 0, 0)',
    border: "3px solid rgb(204, 0, 0)",
  });
  setTimeout(() => {ret_strike();}, 900);
}

function ret_strike() {
  for(let i = 0; i < live_m.length; i++){
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
    spam_stop = 0;
    anime({
      targets: "#player",
      rotate: 10,
      duration: 300,
      direction: "alternate",
      scale: 1.2,
      // background: 'rgb(204, 0, 0)',
      border: "3px solid rgb(204, 0, 0)",
    });
  }, 400);
}

function heal() {
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