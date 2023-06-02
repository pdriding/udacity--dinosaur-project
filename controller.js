/* eslint-disable */

import * as model from "./model.js";
import formView from "./views/formView.js";
import infographicView from "./views/infographicView.js";

const controlForm = async function (e) {
  // Get Data human data from form
  const human = model.createHumanObject(e);

  // Set Dinosaur data
  await model.createDinoObject();

  // Hide form
  formView.hideForm();

  // Give data to be rendered on the screen
  controlInfographics(model.instances, human);
};

const controlInfographics = function (animals, human) {
  // Set the data of the user
  infographicView.setHumanData(human);

  // Render the data to the screen
  infographicView.renderAnimals(animals);
};

const init = function () {
  formView.addHandlerFormSubmit(controlForm);
};

init();
