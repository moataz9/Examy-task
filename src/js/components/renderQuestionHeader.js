import { questionsSortNamingAr } from "../constants.js";

const renderQuestionHeader = (question) => /* html */ `
<div 
  class="flex items-center gap-4 bg-gray-200 rounded-xl shadow-md p-6"
  data-question-id="${question.id}"
>
  <div 
    class="bg-gray-300 rounded-lg cursor-grab"
    onmousedown="makeParentDraggable(event, ${question.id})"
    onmouseup="makeParentUnDraggable(event, ${question.id})"
    draggable="false"
  >
    <img src="./src/images/app-dots.png" class="h-12" alt="grap" draggable="false" />
  </div>

  <p class="ml-auto font-bold text-lg">
    <span>${questionsSortNamingAr[question.sortNumber - 1]}</span>
    <span>:</span>
    <span>${question.text}</span>
  </p>
${
  question.isEditModeActive
    ? /* html */ `
    <button class="flex gap-2 px-4 py-2 rounded-lg shadow-sm bg-white">
      <img src="./src/images/round-arrow.png" alt="" class="h-6" />
      <span> استرجاع النموذج الأساسى </span>
    </button>
    <button
      onclick="saveMainQuestions(${question.id})" 
      class="flex gap-1 px-4 py-2 rounded-lg shadow-sm bg-teal-600 text-white">
      <span> حفظ </span>
    </button>`
    : /* html */ `
    <button 
      class="flex gap-1 px-4 py-2 rounded-lg shadow-sm bg-teal-600 text-white"
      onclick="toggleEditModeForMainQuestion(${question.id})"
    >
      <img src="./src/images/pen.png" alt="" class="h-6" />
      <span> تعديل </span>
    </button>`
}
</div>`;

export default renderQuestionHeader;
