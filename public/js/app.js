document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.card-title').textContent;
  const hint = document.querySelector('#hint');
  const button = hint.children[0];
  const paragraph = hint.children[1];

  if (title === 'question') {
    button.addEventListener('click', () => {
      button.remove();
      hint.append(paragraph);
    });
    paragraph.remove();
  } else {
    hint.remove();
  }
});