import {
  toggleEditModeForMainQuestion,
  enableEditModeForQuestion,
  showActionsForQuestion,
  saveMainQuestions,
} from "./actions/questions.js";

import {
  editMainQuestion,
  restoreMainQuestion,
  saveMainQuestion,
  editSubQuestion,
  restoreSubQuestion,
  saveSubQuestion,
} from "./actions/options.js";

import renderApp from "./renderApp.js";

document.addEventListener("DOMContentLoaded", () => {
  // Attach event listeners to the global functions
  // question actions
  window.toggleEditModeForMainQuestion = toggleEditModeForMainQuestion;
  window.enableEditModeForQuestion = enableEditModeForQuestion;
  window.showActionsForQuestion = showActionsForQuestion;
  window.saveMainQuestions = saveMainQuestions;
  // option actions
  window.editMainQuestion = editMainQuestion;
  window.restoreMainQuestion = restoreMainQuestion;
  window.saveMainQuestion = saveMainQuestion;
  window.editSubQuestion = editSubQuestion;
  window.restoreSubQuestion = restoreSubQuestion;
  window.saveSubQuestion = saveSubQuestion;
  // Initial render
  renderApp();
});
