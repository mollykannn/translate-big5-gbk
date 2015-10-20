var clipboard = new Clipboard('#copybutton');
clipboard.on('success', function(e) {
  e.clearSelection();
  showTooltip(e.trigger);
});

document.getElementById('copybutton').addEventListener('mouseleave', function(e) {
  e.currentTarget.setAttribute('class', 'column--button');
});

function showTooltip(elem) {
  elem.setAttribute('class', 'column--button column--tips');
}

function clearContent() {
  document.getElementById('txtOutput').value = '';
}