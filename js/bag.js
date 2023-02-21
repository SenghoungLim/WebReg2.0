const openWindowButton = document.getElementById('open-window');

openWindowButton.addEventListener('click', () => {
    console.log("Bag clicked")


  const windowElement = document.getElementById('bag-window-id'); // create window
  windowElement.style.display = 'inline';

  //windowElement.textContent = '';
  windowElement.classList.add('window');
  document.body.appendChild(windowElement);

  setTimeout(() => {
    windowElement.classList.add('window-open');
  }, 10); // Wait for the element to be added to the DOM before starting the transition

  const closeButton = document.getElementById('bag-window-close');
  closeButton.style.display = "inline";
  closeButton.addEventListener('click', () => {
    openWindowButton.style.display = 'inline'; // make the open button appear again
    windowElement.classList.remove('window-open');
    setTimeout(() => {
        windowElement.style.display = 'none'; 

    }, 300); // Wait for the transition to finish before removing the element
  });
});

