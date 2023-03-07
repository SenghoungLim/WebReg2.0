const autoEnrollButton = document.getElementById('auto-enroll-button');

autoEnrollButton.addEventListener('click', () => {
  // Get the modal element
  const modal = document.createElement('div');
  modal.classList.add('modal');

  // Create the modal content
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  
  // Create the close button
  const confirmButton = document.createElement('button');
  confirmButton.classList.add('confirm');
  confirmButton.textContent = 'Understood';
  confirmButton.addEventListener('click', () => {
  // Add your confirmation logic here
  modal.style.display = 'none';
  });
  
  // Create the modal message
  const message = document.createElement('p');
  message.id = 'modalMsgID';
  message.textContent = 'We would like to inform you that by utilizing our "Auto Enroll" feature, your course preferences will be securely saved and enrolled once your enrollment window becomes available. In the event that a class is already filled to capacity, our system will prioritize your enrollment by adding you to the waitlist of the first available course. You will be notified of any updates regarding your enrolled or waitlisted courses via email.';
  
  // Add the close button and message to the modal content
  modalContent.appendChild(confirmButton);
  modalContent.appendChild(message);
  
  // Add the modal content to the modal
  modal.appendChild(modalContent);
  
  // Append the modal to the document body
  document.body.appendChild(modal);

  // Show the modal
  modal.style.display = 'block';
});
