const studyList = [];


function getDiscussionFromBag(courseObj) {
    for (const discussion of courseObj.discussions) {
        for (const code of bag) {
            if (discussion.code == code) {
                return discussion;
            }
        } 
    }
}

function getLabFromBag(courseObj) {
    for (const lab of courseObj.labs) {
        for (const code of bag) {
            if (lab.code == code) {
                return lab;
            }
        } 
    }
}


const tableStudyList = document.getElementById("study-list-table");

function addRowToStudyList(rowData, type) {
    
    // Create a new row element
    const row = document.createElement("tr");
    row.className = type;
    row.id = rowData[1] + "-study-list";

  
    // Loop through each cell data and add it to the row
    for (const data of rowData) {
      // Create a new cell element
      const cell = document.createElement("td");
      
      // Set the cell's text content to the data
      cell.textContent = data;
      
      // Add the cell to the row
      row.appendChild(cell);
    }
  

    // Add the row to the table
    tableStudyList.appendChild(row);
    console.log("count")
  }
  


function displayStudyList(bagList) {
    // Clear previous classes
    tableStudyList.textContent = '';
  
    for (let i = 0 ; i < bagList.length; i++) {
        if (bagList[i].type == "Lecture") {
            // Add to study list
            studyList.push(bag[i]);


            // Course title
            const top = document.createElement('div');
            top.className = 'top';


            const courseTitle = document.createElement('div');
            courseTitle.className = 'course-titles';
            courseTitle.textContent = bagList[i].code + '\t-\t' + bagList[i].title;
            const drop = document.createElement('button');
            drop.textContent = 'DROP';

            drop.addEventListener('click', () => {
                
                // Get the modal element
                const confirmBtnBox = document.createElement('div');
                confirmBtnBox.classList.add('modal');

                // Create the modal content
                const modalContent = document.createElement('div');
                modalContent.classList.add('modal-content');
                
                // Create the yes button
                const yesBtn = document.createElement('button');
                yesBtn.classList.add('yesButtonClass');
                yesBtn.id = 'yesButton';
                yesBtn.textContent = 'Yes';
                
                // Clear the course if they select yes
                yesBtn.addEventListener('click', () => {
                // Add your confirmation logic here
                    confirmBtnBox.style.display = 'none';
                    studyList.splice(i, 1);
                    bagList.splice(i, 1);
                    console.log(bagList);
    
                    displayStudyList(bagList);
                    console.log(studyList);
                });

                 // Create the No button
                 const noBtn = document.createElement('button');
                 noBtn.classList.add('noButtonClass');
                 noBtn.id = 'noButton';
                 noBtn.textContent = 'No';
                 noBtn.addEventListener('click', () => {
                    // Add your confirmation logic here
                    confirmBtnBox.style.display = 'none';
                 });

                
                
                // Create the modal message
                const message = document.createElement('p');
                message.id = 'modalMsgID';
                message.textContent = 'Are you sure you want to drop this class?';
                
                // Add the close button and message to the modal content
                yesBtn.style.display = 'inline-block';
                noBtn.style.display = 'inline-block';
                modalContent.appendChild(message);
                modalContent.appendChild(yesBtn);
                modalContent.appendChild(noBtn);
                
                // Add the modal content to the modal
                confirmBtnBox.appendChild(modalContent);
                
                // Append the modal to the document body
                document.body.appendChild(confirmBtnBox);

                // Show the modal
                confirmBtnBox.style.display = 'block';
            });

            top.appendChild(courseTitle);
            top.appendChild(drop);

            
            tableStudyList.appendChild(top);

            // Add the headers row to the table
            addRowToStudyList([
                "Status",
                "Course Code",
                "Class Type",
                "Units",
                "Instructor",
                "Schedule",
                "Location",
                "Enrollment",
                "Waitlist",
            ],'table-heading');
            // Add course info
            addRowToStudyList([
                bagList[i].status,
                bagList[i].code,
                bagList[i].type,
                bagList[i].units,
                bagList[i].instructor,
                bagList[i].schedule,
                bagList[i].location,
                bagList[i].enrollment,
                bagList[i].waitlist,
            ],'main-course');
            
            const discussion = getDiscussionFromBag(bagList[i]);

            if (discussion) {
                console.log("DISCUSS");
                addRowToStudyList([
                    discussion.status,
                    discussion.code,
                    discussion.type,
                    discussion.units,
                    discussion.instructor,
                    discussion.schedule,
                    discussion.location,
                    discussion.enrollment,
                    discussion.waitlist,
                  ],'discussion');
            }

            const lab = getLabFromBag(bagList[i]);
            if (lab) {
                console.log("LAB");
                addRowToStudyList([
                    lab.status,
                    lab.code,
                    lab.type,
                    lab.units,
                    lab.instructor,
                    lab.schedule,
                    lab.location,
                    lab.enrollment,
                    lab.waitlist,
                  ],'lab');
            }

        }
  }
}

enrollButton = document.getElementById('enroll-button');
enrollButton.addEventListener('click', event => {
    const bagList = []
    for (var i = 0; i < bag.length; i++) {
        bagList.push(getObject(bag[i]));
    }
    // alert('Your course/courses have been enrolled, Check study list for more detail.');
    //Hidden default text once they clicked enrolled.
    //Confirmation Alert: Confirm that a user enrolled in a class
            //START
            const enrollNotify = document.createElement('div');
            enrollNotify.className = 'enrollNotifyClassName';
          
            //Icon
            const warningIcon = document.createElement('img');
            warningIcon.src = './images/greenCheck.png';
            warningIcon.alt = 'Green Check Icon';
            warningIcon.className= 'greenCheckSignIcon';
            //Message
            const dupMsg = document.createElement('span');
            dupMsg.className = 'dupMsg';
            dupMsg.textContent = 'Your course/courses have been enrolled, Check study list to view it.';
            
            //Add to the notification body 
            enrollNotify.appendChild(warningIcon);
            enrollNotify.appendChild(dupMsg);

            enrollNotify.id = 'disLabNotifyID';
              // Append the notification element to the body
              document.body.appendChild(enrollNotify);
              console.log('Dis & Lab added before lecture warning');
              // Wait for a moment to trigger the transition
              setTimeout(() => {
                enrollNotify.classList.add('active');
              }, 0);

              // Wait for 3 seconds before removing the notification element
              setTimeout(() => {
                enrollNotify.classList.remove('active');

                // Wait for the transition to complete before removing the element from the DOM
                setTimeout(() => {
                    enrollNotify.parentNode.removeChild(enrollNotify);
              }, 300);
            }, 3000);
            //END
    const listViewDefaultPage = document.getElementById('defaultListViewPage');
    listViewDefaultPage.style.display= 'none';
    //Create a div
    const enrollNotifyDiv = document.createElement('div');
    enrollNotifyDiv.id = 'enrollNotifyID'; //add id
    //Create the p tag message within div
    const enrollMsg = document.createElement('p');
    //Add id to the enroll msg class
    enrollMsg.id = 'enrollMsgID';
    //Add the text to the p tag
    enrollMsg.textContent = 'Your course/courses have been enrolled, Check study list for more detail.';
    //Add the p tag under the div class 
    enrollNotifyDiv.appendChild(enrollMsg);

    document.body.appendChild(enrollNotifyDiv);
    enrollNotifyDiv.addEventListener('animationend', () => {
        enrollNotifyDiv.remove();
    });
    displayStudyList(bagList);
});