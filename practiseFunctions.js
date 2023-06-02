(function () {
  document
    .getElementById("dino-compare")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const name = e.target.name.value;
      const height = e.target.feet.value * 12 + e.target.inches.value;
      const weight = e.target.weight.value;
      const diet = e.target.diet.value;

      const human = new Human(name, height, weight, diet);
    });
})();
