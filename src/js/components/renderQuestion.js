const renderQuestion = (headerEl, bodyEl) => /* html */ `
<div>
  ${headerEl}
  <div class="bg-white px-16 py-10 rounded-b-xl">
    ${bodyEl}
  </div>
</div>
`;

export default renderQuestion;
