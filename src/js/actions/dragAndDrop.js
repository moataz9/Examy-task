import AllQuestions from "../mockData.js";
import renderApp from "../renderApp.js";

export function dragStartQuestionsEl(event) {
  if (event.target.classList.contains("element-to-drag")) {
    event.target.classList.add("dragging");
  }
  document.querySelectorAll(".hide-on-drag").forEach((el) => {
    el.classList.add("hidden");
  });
}

function resortQuestions() {
  const questionsContainer = document.getElementById("questions");
  const questionElements = questionsContainer.querySelectorAll(
    ".element-to-drag"
  );
  const newOrder = Array.from(questionElements).map((el) =>
    parseInt(el.firstElementChild.getAttribute("data-question-id"))
  );
  for (let i = 0; i < newOrder.length; i++) {
    const question = AllQuestions.find((q) => q.id === newOrder[i]);
    if (question) {
      // Update sortNumber based on new position
      question.sortNumber = i + 1; 
    }
  }
  AllQuestions.sort((a, b) => a.sortNumber - b.sortNumber)
  renderApp();
}

export function dragEndQuestionsEl(event) {
  if (event.target.classList.contains("element-to-drag")) {
    event.target.classList.remove("dragging");
  }
  document.querySelectorAll(".hide-on-drag").forEach((el) => {
    el.classList.remove("hidden");
  });
  resortQuestions();
}

export function dragOverQuestionsEl(event) {
  event.preventDefault();
  const questionsContainer = document.getElementById("questions");
  const dragging = document.querySelector(".dragging");
  const afterElement = getDragAfterElement(questionsContainer, event.clientY);
  if (afterElement == null) {
    questionsContainer.appendChild(dragging);
  } else {
    questionsContainer.insertBefore(dragging, afterElement);
  }
}

export function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll(":not(.dragging)")];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

export function makeParentDraggable(event) {
  const draggableElements = document.querySelectorAll(".element-to-drag");

  event.target.parentNode.classList.replace("cursor-grab", "cursor-grabbing");

  if (draggableElements) {
    draggableElements.forEach((el) => el.setAttribute("draggable", "true"));
  }
}

export function makeParentUnDraggable(event) {
  const draggableElements = document.querySelectorAll(".element-to-drag");

  event.target.parentNode.classList.replace("cursor-grabbing", "cursor-grab");

  if (draggableElements) {
    draggableElements.forEach((el) => el.setAttribute("draggable", "false"));
  }
}

export function initDragging() {
  const questionsContainer = document.getElementById("questions");
  questionsContainer.ondragstart = dragStartQuestionsEl;
  questionsContainer.ondragend = dragEndQuestionsEl;
  questionsContainer.ondragover = dragOverQuestionsEl;
}
