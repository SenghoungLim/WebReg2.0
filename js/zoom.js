

  function zoomIn(percentage) {
    document.body.style.zoom = `${percentage}%`;
  }



const slider = document.getElementById('slideBar');

slider.addEventListener('change', () => {
  zoomIn(slider.value);
})