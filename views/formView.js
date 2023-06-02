/* eslint-disable */

class FormView {
  _parentElement = document.getElementById("dino-compare");

  addHandlerFormSubmit(handler) {
    this._parentElement.addEventListener("submit", function (event) {
      event.preventDefault();

      handler(event);
    });
  }

  hideForm() {
    this._parentElement.style.display = "none";
  }

  _generateMarkup() {}
}

export default new FormView();
