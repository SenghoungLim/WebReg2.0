const openWindowButton = document.getElementById('open-window');
let clickCount = 0;
openWindowButton.addEventListener('click', () => {
    clickCount++;


  const windowElement = document.getElementById('bag-window-id'); // create window
  if (windowElement.classList.contains('window-open')) {
    closeBag(windowElement);
  }
  else {
    windowElement.style.display = 'inline';

    const notification = document.getElementById('notification')
    notification.style.display = 'none';
    // Create a default text before a course is added
      // const defaultBagWindowTxt = document.createElement('p');
      // defaultBagWindowTxt.id = "defaultBagWindowTxtID";
      // defaultBagWindowTxt.textContent = "You have not added any courses yet.";
      // windowElement.appendChild(defaultBagWindowTxt);
  
  
    //windowElement.textContent = 'hi';
    windowElement.classList.add('window');
    document.body.appendChild(windowElement);
     // Create a default text before a course is added
    // const defaultBagWindowTxt = document.createElement('p');
    // defaultBagWindowTxt.id = "defaultBagWindowTxtID";
    // defaultBagWindowTxt.textContent = "You have not added any courses yet.";
    // windowElement.body.appendChild(defaultBagWindowTxt);
  
    setTimeout(() => {
      windowElement.classList.add('window-open');
    }, 10); // Wait for the element to be added to the DOM before starting the transition
  
    const closeButton = document.getElementById('bag-window-close');
  
    closeButton.style.display = "inline";
    closeButton.addEventListener('click', () => {
      closeBag(windowElement);
    });
  }
  

});


function closeBag(windowElement) {
  notification.style.display = 'none';
  openWindowButton.style.display = 'inline'; // make the open button appear again
  windowElement.classList.remove('window-open');
  setTimeout(() => {
      windowElement.style.display = 'none'; 
  
  }, 300); // Wait for the transition to finish before removing the element
}
