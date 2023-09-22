class message {
    constructor(id) {
      this.id = id;
    }
    show() {
      anime({
        targets: "#mes",
        duration: 1000,
        opacity: 1,
        top: 0,
        easing: "easeInOutSine",
      });
    }
    hide() {
      anime({
        targets: "#mes",
        duration: 1000,
        opacity: 0,
        top: 800,
        easing: "easeInOutSine",
      });
    }
    editing(ed_heading, ed_mess_text, ed_option1, ed_option2) {
      heading.innerHTML = ed_heading;
      mess_text.innerHTML = ed_mess_text;
      option1.value = ed_option1;
      if (ed_option2 == 0 && option2.classList.contains("hide") == false) {
        option2.classList.add("hide");
      } else {
        option2.classList.remove("hide");
        option2.value = ed_option2;
      }
    }
  }
  let mes_class = new message("#mes");
  