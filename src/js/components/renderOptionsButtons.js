const renderOptionsButtons = (mainQuestionId, questionId) => /* html */ `
<div class="absolute -left-12 -top-3 space-y-2">
  <button
    class="flex size-8 rounded-lg shadow-sm bg-teal-600 relative group"
    onclick="${
      !questionId
        ? `editMainQuestion(${mainQuestionId})`
        : `editSubQuestion(${mainQuestionId}, ${questionId})`
    }"
  >
    <img
      src="./src/images/pen.png"
      alt=""
      class="h-6 m-auto"
    />
    <span
      class="opacity-0 group-hover:opacity-100 duration-200 bg-teal-600 absolute -top-1 right-12 text-white font-normal rounded-lg py-1 px-2 before:absolute before:top-[10px] before:-right-2 before:border-t-8 before:border-t-transparent before:border-b-8 before:border-b-transparent before:border-l-8 before:border-l-teal-600"
    >
      تعديل
    </span>
  </button>
  <button
    class="flex size-8 rounded-lg shadow-sm bg-teal-600 relative group"
    onclick="${
      !questionId
        ? `restoreMainQuestion(${mainQuestionId})`
        : `restoreSubQuestion(${mainQuestionId}, ${questionId})`
    }"
  >
    <img
      src="./src/images/round-arrow.png"
      alt=""
      class="h-6 m-auto invert"
    />
    <span
      class="opacity-0 group-hover:opacity-100 duration-200 bg-teal-600 absolute -top-1 right-12 text-white font-normal rounded-lg py-1 px-2 before:absolute before:top-[10px] before:-right-2 before:border-t-8 before:border-t-transparent before:border-b-8 before:border-b-transparent before:border-l-8 before:border-l-teal-600"
    >
      استرجاع
    </span>
  </button>
  <button
    class="flex size-8 rounded-lg shadow-sm bg-teal-600 relative group"
    onclick="${
      !questionId
        ? `saveMainQuestion(${mainQuestionId})`
        : `saveSubQuestion(${mainQuestionId}, ${questionId})`
    }"
  >
    <img
      src="./src/images/svg/check.svg"
      alt=""
      class="h-6 m-auto invert"
    />
    <span
      class="opacity-0 group-hover:opacity-100 duration-200 bg-teal-600 absolute -top-1 right-12 text-white font-normal rounded-lg py-1 px-2 before:absolute before:top-[10px] before:-right-2 before:border-t-8 before:border-t-transparent before:border-b-8 before:border-b-transparent before:border-l-8 before:border-l-teal-600"
    >
      حفظ
    </span>
  </button>
</div>`;

export default renderOptionsButtons;
