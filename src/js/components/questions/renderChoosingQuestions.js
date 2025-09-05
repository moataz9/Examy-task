import renderOptionsButtons from "../renderOptionsButtons.js";

const renderChoosingQuestionRow = (
  index,
  question,
  mainQuestionId,
  mainQuestionIsEditModeActive
) => /* html */ `
<tr class="relative ${index % 2 == 0 ? "bg-gray-100" : ""}">
  <td class="border border-gray-600 px-2 text-center text-lg w-10" rowspan="2">
  <span>${index}</span>
  ${
    mainQuestionIsEditModeActive
      ? /* html */ `
        <input 
          onclick="showActionsForQuestion(${mainQuestionId}, ${question.id})" 
          type="radio" 
          name="question-${question.id}" 
          class="accent-teal-500 absolute size-4 -right-10 mt-1"
          ${question.showQuestionsActions ? "checked" : ""}
        />`
      : ""
  }
  ${
    question.showQuestionsActions
      ? renderOptionsButtons(mainQuestionId, question.id)
      : ""
  }
  </td>
  <td colspan="4" class="border border-gray-600 px-4 py-2 text-right">
    ${
      question.editQuestionMode
        ? /* html */ `
        <input 
          type="text"
          class="w-full bg-transparent border border-teal-400 rounded-xl focus:outline-none px-2 py-1"
          data-ids="${[mainQuestionId, question.id].join("-")}"
          value="${question.text}"
          />`
        : `<span>${question.text}</span>`
    }
  </td>
</tr>
<tr class="${index % 2 == 0 ? "bg-gray-100" : ""}">
${question.options
  .map(
    (option) => /* html */ `
    ${
      question.type === "text"
        ? /* html */ `
        <td class="border border-gray-600 p-0">
          <div class="flex items-stretch">
            <div class="border-l-2 border-gray-600 py-1 px-2 flex items-center">
              <input 
                type="radio" 
                name="mq${mainQuestionId}-q${question.id}"
                id="mq${mainQuestionId}-q${question.id}-a${option.id}"
                data-ids="${[mainQuestionId, question.id, option.id].join("-")}"
                class="size-4 mt-1 accent-gray-700" 
                ${option.isCorrect ? `checked` : ""}
              />
            </div>
            <label
              for="mq${mainQuestionId}-q${question.id}-a${option.id}"
              class="text-center w-full p-1"
              > 
              ${
                question.editQuestionMode
                  ? /* html */ `
                  <input 
                    type="text"
                    data-ids="${[mainQuestionId, question.id, option.id].join(
                      "-"
                    )}"
                    class="w-full bg-transparent border border-teal-400 rounded-xl focus:outline-none px-2 py-1"
                    value="${option.text}" />`
                  : `<span>${option.text}</span>`
              }
              
            </label>
          </div>
        </td>`
        : /* html */ `
        <td class="border border-gray-600 p-0 h-48">
          <div class="flex items-stretch h-full">
          <div
            class="border-l-2 border-gray-600 px-2 flex items-center"
          >
            <input 
              type="radio" 
              name="mq${mainQuestionId}-q${question.id}"
              id="mq${mainQuestionId}-q${question.id}-a${option.id}"
              data-ids="${[mainQuestionId, question.id, option.id].join("-")}"
              class="size-4 mt-1 accent-gray-700" 
              ${option.isCorrect ? `checked` : ""}
            />
          </div>
          <label
            for="mq${mainQuestionId}-q${question.id}-a${option.id}"
            class="text-center size-full flex items-center justify-center relative"
          >
            <img
              src="${option.src}"
              alt="a${option.id}-image"
              class="h-5/6 object-fill"
            />
            ${
              question.editQuestionMode
                ? /* html */ `
                  <button
                    class="flex size-10 rounded-lg shadow-sm bg-teal-600 text-white absolute bottom-4 left-4"
                  >
                    <input
                      type="file"
                      name="mq${mainQuestionId}-q${question.id}"
                      accept="image/*"
                      class="inset-0 absolute opacity-0"
                    />
                    <img
                      src="./src/images/pen.png"
                      alt=""
                      class="h-6 m-auto"
                    />
                  </button>`
                : ""
            }
          </label>
        </div>
      </td>`
    }`
  )
  .join("")}
</tr>`;

const renderChoosingQuestions = (mainQuestion) => {
  const mainQuestionIsEditModeActive = mainQuestion.isEditModeActive;
  const mainQuestionId = mainQuestion.id;
  return /* html */ `
    <table class="striped-2-rows w-full border border-separate border-spacing-0 border-gray-600 text-center font-bold">
      <tbody>
        ${mainQuestion.questions
          .map((question, index) =>
            renderChoosingQuestionRow(
              ++index,
              question,
              mainQuestionId,
              mainQuestionIsEditModeActive
            )
          )
          .join("")}
      </tbody>
    </table>
  `;
};

export default renderChoosingQuestions;
