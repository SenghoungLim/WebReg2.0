const leftPanel = document.querySelector('.left-panel');
const rightPanel = document.querySelector('.right-panel');

const toggleLeftPanelWidth = () => {
  leftPanel.classList.toggle('collapsed');
  rightPanel.classList.toggle('expanded');
}

const toggleRightPanelWidth = () => {
  rightPanel.classList.toggle('expanded');
  leftPanel.classList.toggle('collapsed');
}

function togglePanel() {
    toggleLeftPanelWidth()
}

$("ul.nav-tabs a").click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});