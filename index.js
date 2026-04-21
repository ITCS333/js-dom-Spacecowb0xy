function changeHeadingText() {
  document.getElementById('main-heading').textContent = 'DOM Manipulation Challenge';
}

function changeBoxColor() {
  document.getElementById('box-to-modify').style.backgroundColor = 'lightblue';
}

function addNewItem() {
  const li = document.createElement('li');
  li.textContent = 'New Item';
  document.getElementById('item-list').appendChild(li);
}

function highlightParagraph() {
  document.getElementsByClassName('content-para')[0].classList.add('highlight');
}

function removeElement() {
  const el = document.getElementById('to-be-removed');
  el.parentNode.removeChild(el);
}
