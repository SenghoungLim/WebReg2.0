function getInfoDiv(infoWindow, code, description, prereqs) {

    const infoDiv = document.createElement("div"); // new
    infoDiv.classList.add("info"); // new
    infoDiv.innerText = 'i'; // new

    // Create the popup window element

    // Add a class to the popup window element
    infoWindow.classList.add("info-window");

    // Add two sections of text to the popup window
    const codeText = code + ': ';
    const descriptionText  = description;

    let bottomText = '';

    if (!prereqs) {
        bottomText = 'No Prerequisites';
    }
    else {
        bottomText = 'Prerequisites: ' + prereqs;
    }

    infoWindow.innerHTML = `<div class='top-section'>${codeText}</div><div class='description-text'></div>${descriptionText}</div><div class='bottom-section'>${bottomText}</div>`;

    infoDiv.appendChild(infoWindow);

    return infoDiv;
}



  

