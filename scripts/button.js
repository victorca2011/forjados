let confettiContainer;

const partyBtn = document.getElementsByClassName("yes-content");

tsParticles
  .load("tsparticles", {
    particles: {
      shape: {
        type: "character",
        character: {
          value: ["*"]
        },move: {
          direction: "top"},
      }
    },
    preset: "confetti",
    emitters: []
  })
  .then((container) => (confettiContainer = container));

layout.addEventListener("click", () => {
  confettiContainer.addEmitter({
    size: {
      width: 0,
      height: 0
    },
    
    startCount: 340,
    position: {
    "x": 50,
    "y": 50},
    rate: {
      delay: 0,
      quantity: 50
    },
    life: {
      duration: 5,
      count: 5
    }
  });
});