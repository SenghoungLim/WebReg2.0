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


            const courseTitle = document.createElement('h4');
            courseTitle.textContent = bagList[i].title;
            const drop = document.createElement('button');
            drop.textContent = 'DROP';

            drop.addEventListener('click', () => {
                studyList.splice(i, 1);
                bagList.splice(i, 1);
                console.log(bagList);

                displayStudyList(bagList);
                console.log(studyList);
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