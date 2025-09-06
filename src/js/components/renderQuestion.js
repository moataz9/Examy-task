const renderQuestion = (headerEl, bodyEl) => /* html */ `
<div class="element-to-drag">
  ${headerEl}
  <div class="bg-white px-16 py-10 rounded-b-xl hide-on-drag">
    ${bodyEl}
  </div>
</div>
`;

export default renderQuestion;
