/* eslint-disable */

class InfographicView {
  _human;
  _parentElement = document.getElementById("grid");

  setHumanData(human) {
    this._human = human;
  }

  renderAnimals(dinos) {
    // Generate the markup
    const markup = dinos.map((dino) => this.generateMarkup(dino)).join("");

    // Render to the screen
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  generateMarkup(dino) {
    const name = dino !== this._human ? dino.species : dino.name;
    const html = `
    <div class="grid-item ${dino === this._human ? "human-grid-item" : ""}">
      <h3>${name}</h3>
        <img src="${dino.image}" alt="${name}">
        <p>${dino !== this._human ? this._randomFact(dino) : ""}</p>
    </div>`;

    return html;
  }

  _randomFact(dino) {
    return dino.randomFact(this._human);
  }
}

export default new InfographicView();
