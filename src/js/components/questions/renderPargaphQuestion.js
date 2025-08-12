import { questionsSortNamingAr } from "../../helpers.js";
import renderChoosingQuestions from "./renderChoosingQuestions.js";
import renderOptionsButtons from "../renderOptionsButtons.js";

const renderParagaphQuestion = (mainQuestion) => /* html */ `
  <table
    class="w-full border-2 border-gray-600 bg-gray-100 font-bold mb-4"
  >
    <tbody>
      <tr class="border-2 border-gray-600">
        <td class="px-4 py-2 text-lg">
          <span>${questionsSortNamingAr[mainQuestion.sortNumber - 1]}</span>
          <span>:</span>
          <span>${mainQuestion.text}</span>
        </td>
      </tr>
      <tr class="border-2 border-gray-600 relative">
        <td class="px-4 py-2 text-lg">
        ${
          mainQuestion.editQuestionMode
            ? /* html */ `
              <textarea
                class="w-full bg-transparent border-2 border-teal-400 rounded-xl focus:outline-none p-2"
                rows="6"
                data-ids="${mainQuestion.id}"
              >${mainQuestion.subText}</textarea>`
            : `<p>${mainQuestion.subText}</p>`
        }
        ${
          mainQuestion.showQuestionsActions
            ? renderOptionsButtons(mainQuestion.id)
            : ""
        }
        ${
          mainQuestion.isEditModeActive
            ? /* html */ `
              <input 
                onclick="showActionsForQuestion(${mainQuestion.id})" 
                type="radio" 
                name="question-${mainQuestion.id}" 
                class="accent-teal-500 absolute size-4 top-1/4 -right-10 mt-1"
                ${mainQuestion.showQuestionsActions ? "checked" : ""}
              />`
            : ""
        }
        </td>
      </tr>
    </tbody>
  </table>
  ${renderChoosingQuestions(mainQuestion)}
`;

export default renderParagaphQuestion;
