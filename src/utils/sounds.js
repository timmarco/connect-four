const sounds = {};

sounds.clack = undefined;
sounds.victory = undefined;
sounds.loss = undefined;

fetch("clack.mp3")
  .then(response => response.blob())
  .then((blob) => {
    const blobUrl = URL.createObjectURL(blob);
    const audio = new Audio(blobUrl);
    sounds.clack = audio;
  });

fetch("victory.mp3")
  .then(response => response.blob())
  .then((blob) => {
    const blobUrl = URL.createObjectURL(blob);
    const audio = new Audio(blobUrl);
    sounds.victory = audio;
  });

fetch("lose.mp3")
  .then(response => response.blob())
  .then((blob) => {
    const blobUrl = URL.createObjectURL(blob);
    const audio = new Audio(blobUrl);
    sounds.loss = audio;
  });

sounds.gameOver = (winner) => {
  if(winner == "bot") {
    sounds.play(sounds.loss);
  }

  if(winner == "player") {
    sounds.play(sounds.victory);
  }
}

sounds.playClack = () => { sounds.play(sounds.clack) };

sounds.play = (whichSound) => {
  if(whichSound !== undefined) {
    whichSound.play();
  }
}

export default sounds;
