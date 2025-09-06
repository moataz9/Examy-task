import AllQuestions from "../mockData.js";
import renderApp from "../renderApp.js";

function toggleEditModeForMainQuestion(mainQuestionId) {
  const requestedQuestion = AllQuestions.find(
    (question) => question.id === mainQuestionId
  );
  if (!requestedQuestion) {
    console.error("Question category not found:", mainQuestionId);
    return;
  } else {
    requestedQuestion.isEditModeActive = !requestedQuestion.isEditModeActive;
  }
  // Re-render the page to reflect the changes
  console.log("Toggling edit mode for main question:", requestedQuestion);
  renderApp();
}

function enableEditModeForQuestion(mainQuestionId, questionId) {
  const requestedQuestion = AllQuestions.find(
    (question) => question.id === mainQuestionId
  );
  if (!requestedQuestion) {
    console.error("Question category not found:", mainQuestionId);
    return;
  } else {
    const question = requestedQuestion.questions.find(
      (q) => q.id === questionId
    );
    if (!question) {
      console.error("Question not found:", questionId);
      return;
    } else {
      question.editQuestionMode = !question.editQuestionMode;
    }
  }
  // Re-render the page to reflect the changes
  // console.log("Toggling edit mode for question:", requestedQuestion.id);
  renderApp();
}

function showActionsForQuestion(mainQuestionId, questionId) {
  const requestedQuestion = AllQuestions.find(
    (question) => question.id === mainQuestionId
  );
  if (!requestedQuestion) {
    console.error("Question category not found:", mainQuestionId);
    return;
  } else {
    if (!questionId) {
      requestedQuestion.showQuestionsActions =
        !requestedQuestion.showQuestionsActions;
    } else {
      const question = requestedQuestion.questions.find(
        (q) => q.id === questionId
      );
      if (!question) {
        console.error("Question not found:", questionId);
        return;
      } else {
        question.showQuestionsActions = !question.showQuestionsActions;
      }
    }
  }
  // Re-render the page to reflect the changes
  // console.log("Toggling option Actions for question:", requestedQuestion.id);
  renderApp();
}

function saveMainQuestions(mainQuestionId) {
  const requestedQuestion = AllQuestions.find(
    (question) => question.id === mainQuestionId
  );
  if (!requestedQuestion) {
    console.error("Question category not found:", mainQuestionId);
    return;
  } else {
    requestedQuestion.isEditModeActive = false;
  }
  // Re-render the page to reflect the changes
  // console.log("Main question saved:", requestedQuestion);
  renderApp();
}

export {
  toggleEditModeForMainQuestion,
  enableEditModeForQuestion,
  showActionsForQuestion,
  saveMainQuestions,
};
