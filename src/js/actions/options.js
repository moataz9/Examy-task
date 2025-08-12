import AllQuestions from "../mockData.js";
import renderApp from "../renderApp.js";

function editMainQuestion(mainQuestionId) {
  const requestedQuestion = AllQuestions.find(
    (question) => question.id === mainQuestionId
  );
  if (!requestedQuestion) {
    console.error("Question category not found:", mainQuestionId);
    return;
  } else {
    requestedQuestion.editQuestionMode = true;
  }
  renderApp();
}

function editSubQuestion(mainQuestionId, questionId) {
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
      question.editQuestionMode = true;
    }
  }
  renderApp();
}

function restoreMainQuestion(mainQuestionId) {
  const requestedQuestion = AllQuestions.find(
    (question) => question.id === mainQuestionId
  );
  if (!requestedQuestion) {
    console.error("Main question not found for question:", questionId);
    return;
  }
  // Discard unsaved changes in the UI
  requestedQuestion.editQuestionMode = false;
  renderApp();
}

function restoreSubQuestion(mainQuestionId, questionId) {
  const requestedQuestion = AllQuestions.find(
    (question) => question.id === mainQuestionId
  );
  if (!requestedQuestion) {
    console.error("Main question not found for question:", questionId);
    return;
  }
  const question = requestedQuestion.questions.find((q) => q.id === questionId);
  if (!question) {
    console.error("Question not found:", questionId);
    return;
  }
  // Discard unsaved changes in the UI
  question.editQuestionMode = false;
  renderApp();
}

function saveMainQuestion(mainQuestionId) {
  const requestedQuestion = AllQuestions.find(
    (question) => question.id === mainQuestionId
  );
  if (!requestedQuestion) {
    console.error("Main question not found for question:", mainQuestionId);
    return;
  }

  // Save edited text if textarea exists
  const textareaInput = document.querySelector(
    `textarea[data-ids='${mainQuestionId}']`
  );
  if (textareaInput) {
    requestedQuestion.subText = textareaInput.value;
  }

  // Exit edit mode and show actions
  requestedQuestion.editQuestionMode = false;
  requestedQuestion.showQuestionsActions = false;
  console.log("Question saved:", requestedQuestion.subText);
  renderApp();
}

function saveSubQuestion(mainQuestionId, questionId) {
  const requestedQuestion = AllQuestions.find(
    (question) => question.id === mainQuestionId
  );
  if (!requestedQuestion) {
    console.error("Main question not found for question:", questionId);
    return;
  }
  const question = requestedQuestion.questions.find((q) => q.id === questionId);
  if (!question) {
    console.error("Question not found:", questionId);
    return;
  }
  // Save edited text if input exists
  const textInput = document.querySelector(
    `input[data-ids='${mainQuestionId}-${questionId}']`
  );
  if (textInput) {
    question.text = textInput.value;
  }
  // Save edited options if inputs exist
  if (question.options && Array.isArray(question.options)) {
    question.options.forEach((option) => {
      // Update option text
      const optionInput = document.querySelector(
        `input[type='text'][data-ids='${mainQuestionId}-${questionId}-${option.id}']`
      );
      if (optionInput) {
        option.text = optionInput.value;
      }
      // Update isCorrect value based on radio input
      const radioInput = document.querySelector(
        `input[type='radio'][data-ids='${mainQuestionId}-${questionId}-${option.id}']`
      );
      if (radioInput) {
        option.isCorrect = radioInput.checked;
      }
    });
  }
  // Exit edit mode and show actions
  question.editQuestionMode = false;
  question.showQuestionsActions = false;
  console.log("Question saved:", requestedQuestion.id, question.id, question);
  renderApp();
}

export {
  editMainQuestion,
  editSubQuestion,
  restoreMainQuestion,
  restoreSubQuestion,
  saveMainQuestion,
  saveSubQuestion,
};
