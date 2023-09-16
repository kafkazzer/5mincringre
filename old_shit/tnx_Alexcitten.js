let blocks = {};
  
  blocks["id1"] = new Block("id1");
  blocks["id2"] = new Block("id2");
  blocks["id3"] = new Block("id3");
  
  // Теперь мы можем получить доступ к экземпляру класса по его айди:
  let desiredBlock = blocks["id3"];
  desiredBlock.sayGM();