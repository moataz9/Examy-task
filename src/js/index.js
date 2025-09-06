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

import {
  initDragging,
  makeParentDraggable,
  makeParentUnDraggable,
} from "./actions/dragAndDrop.js";

import renderApp from "./renderApp.js";

document.addEventListener("DOMContentLoaded", () => {
  // Attach event listeners to the global functions
  const AppActions = [
    // Questions actions
    toggleEditModeForMainQuestion,
    enableEditModeForQuestion,
    showActionsForQuestion,
    saveMainQuestions,
    // Options actions
    editMainQuestion,
    restoreMainQuestion,
    saveMainQuestion,
    editSubQuestion,
    restoreSubQuestion,
    saveSubQuestion,
    // Drag and drop actions
    makeParentDraggable,
    makeParentUnDraggable,
  ];
  AppActions.forEach((action) => {
    if (typeof action === "function") window[action.name] = action;
  });
  // Initial render
  renderApp();
  // init dragging
  initDragging();
});
