// compoenents
import { default as AllQuestions } from "./mockData.js";
import renderChoosingQuestions from "./components/questions/renderChoosingQuestions.js";
import renderPargaphQuestion from "./components/questions/renderPargaphQuestion.js";
import renderQuestionHeader from "./components/renderQuestionHeader.js";
import renderQuestion from "./components/renderQuestion.js";
const questionsSection = document.getElementById("questions");

// Initialize the questions section with mock data
const renderApp = () => {
  console.log("Rendered");
  let finalHTMLContent = "";
  if (AllQuestions && AllQuestions.length > 0) {
    AllQuestions.forEach((question) => {
      switch (question.type) {
        case "choosing":
          finalHTMLContent += renderQuestion(
            renderQuestionHeader(question),
            renderChoosingQuestions(question)
          );
          break;
        case "paragraph":
          finalHTMLContent += renderQuestion(
            renderQuestionHeader(question),
            renderPargaphQuestion(question)
          );
          break;
      }
    });
  }
  questionsSection.innerHTML = finalHTMLContent;
};

export default renderApp;
