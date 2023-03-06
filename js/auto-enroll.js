// // A modal pop up for auto enroll btn
//     // Create modal elements
//     const modal = document.createElement("div");
//     modal.id = "modal";

//     const modalContent = document.createElement("div");
//     modalContent.id= "modal-content";

//     const closeBtn = document.createElement("span");
//     closeBtn.classList.add("close");
//     closeBtn.innerHTML = "&times;";

//     const modalTitle = document.createElement("h2");
//     modalTitle.textContent = "Modal Title";

//     const modalText = document.createElement("p");
//     modalText.textContent = "Modal content goes here.";

//     // Append elements to modal
//     modalContent.appendChild(closeBtn);
//     modalContent.appendChild(modalTitle);
//     modalContent.appendChild(modalText);

//     modal.appendChild(modalContent);

//     // Append modal to body
//     document.body.appendChild(modal);

    // Create button event listener
    const autoEnrollBtnModal = document.getElementById('auto-enroll-button');
    autoEnrollBtnModal.addEventListener("click", function() {
      //modal.style.display = "block";
      console.log = "hi"
    });

    // Create close button event listener
    // closeBtn.addEventListener("click", function() {
    //   modal.style.display = "none";
    // });

    // // Create window event listener to close modal when clicking outside of it
    // window.addEventListener("click", function(event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
    //   }
    // });

    //End modal pop up for auto enroll btn