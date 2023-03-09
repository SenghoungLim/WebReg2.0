

  function zoomIn(percentage) {
    document.body.style.zoom = `${percentage}%`;
  }



const slider = document.getElementById('slideBar');
document.body.style.zoom = `${110}%`;

slider.addEventListener('change', () => {
  zoomIn(slider.value);
})