// Get the table element from the HTML document
const table3 = document.getElementById("elective-courses-table-id");
console.log(table3.id);

// Create a function to add a row to the table
function addRowToTable3(rowData, type) {
  
  // Create a new row element
  const row = document.createElement("tr");
  row.className = type;
  row.id = rowData[1] + '-elective';


  // Loop through each cell data and add it to the row
  for (const data of rowData) {
    // Create a new cell element
    const cell = document.createElement("td");
    
    // Set the cell's text content to the data
    cell.textContent = data;
    
    // Add the cell to the row
    row.appendChild(cell);
  }
  if (type != 'table-heading') {
    const cell = document.createElement("td");
    const addButton = document.createElement('button');
    addButton.textContent = '+';

    // Adding a class button
    addButton.addEventListener('click', () => {
      const defaultWindowBag = document.getElementById('defaultWindowTxtID');
      defaultWindowBag.style.display = 'none';
    if (classAlreadyAdded(rowData[1])) {
      // Main course already added
      // display error message duplicate
        //ERROR PREVENTION Message: When a user add duplicate courses
        //START
        const dupNotify = document.createElement('div');
        dupNotify.className = 'dupNotifyClassName';
        console.log('Suggested Class')
        //Icon
        const warningIcon = document.createElement('img');
        warningIcon.src = './images/warningSignIcon.webp';
        warningIcon.alt = 'Warning Icon';
        warningIcon.className= 'warningSignIcon';
        //Message
        const dupMsg = document.createElement('span');
        dupMsg.className = 'dupMsg';
        dupMsg.textContent = 'You cannot add duplicate courses!';
        
        //Add to the notification body 
        dupNotify.appendChild(warningIcon);
        dupNotify.appendChild(dupMsg);

        dupNotify.id = 'dupNotifyID';
          // Append the notification element to the body
          document.body.appendChild(dupNotify);
          console.log('duplicate course add');
          // Wait for a moment to trigger the transition
          setTimeout(() => {
            dupNotify.classList.add('active');
          }, 0);

          // Wait for 3 seconds before removing the notification element
          setTimeout(() => {
            dupNotify.classList.remove('active');

            // Wait for the transition to complete before removing the element from the DOM
            setTimeout(() => {
            dupNotify.parentNode.removeChild(dupNotify);
          }, 300);
        }, 3000);
        //END
    }
    else {
      console.log(type);
      if (type=='discussion') {
        // delete any discussions for the current course if they are in bag already
        const discusssions = getObject(getLecture(rowData[1])).discussions
        deleteFromBag(returnOldDiscussion(discusssions));
      }

      if (type=='lab') {
        // delete any labs for the current course if they are in bag already
        const labs = getObject(getLecture(rowData[1])).labs;
        deleteFromBag(returnOldLab(labs));
      }

      if (type != 'main-course' && !bag.includes(getLecture(rowData[1]))) {
        // display error message: add lecture first
      }
      else {
        bag.push(rowData[1]);
        updateBag();
      }


      // Make the buttons for the discussions/lab pop up after adding a lecture
      if (type == 'main-course') {
        var discussionCodes = getDiscussions(rowData[1]);
        var labCodes = getLabs(rowData[1]);
        console.log(discussionCodes);
        for (var i = 0; i< discussionCodes.length; i++) {
          const disButton = document.getElementById(discussionCodes[i] + '-elective').getElementsByTagName('button')[0];
          disButton.style.display = 'inline';
        }
        for (var i = 0; i< labCodes.length; i++) {
          const labButton = document.getElementById(labCodes[i] + '-elective').getElementsByTagName('button')[0];
          labButton.style.display = 'inline';
        }
      }
    }

    });

    cell.appendChild(addButton);
    row.appendChild(cell);


  }


  // Add the row to the table
  table3.appendChild(row);
}



function displayCourses3(courses) {
  // Clear previous classes
  table3.textContent = '';

  for (let i = 0 ; i < courses.length; i++) {
      // Course title
      const courseArea = document.createElement('div'); // new
      courseArea.className = 'course-area';  // new


      const courseTitle = document.createElement('div');
      courseTitle.className = 'course-titles';
      courseTitle.textContent = courses[i].code + '\t-\t' + courses[i].title;



      
      const infoWindow = document.createElement("div");

      const infoDiv = getInfoDiv(infoWindow, courses[i].code, courses[i].description, courses[i].prereqs)


      // Show the popup window when the user hovers over the "i" symbol
      infoDiv.addEventListener("mouseenter", function() {
        infoWindow.style.display = "block"; 
      });

      // Hide the popup window when the user moves the mouse away from the "i" symbol
      infoDiv.addEventListener("mouseleave", function() {
        infoWindow.style.display = "none";

      });



      courseArea.append(courseTitle);  // new
      courseArea.append(infoDiv); // new
      table3.appendChild(courseArea); // new
    
      // Add the headers row to the table
      addRowToTable3([
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
      addRowToTable3([
          courses[i].status,
          courses[i].code,
          courses[i].type,
          courses[i].units,
          courses[i].instructor,
          courses[i].schedule,
          courses[i].location,
          courses[i].enrollment,
          courses[i].waitlist,
        ],'main-course');
      
        // Add the discussion rows for courses[i]
      for (const discussion of courses[i].discussions) {
          addRowToTable3([
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
      
        // Add the lab rows for courses[i]
      for (const lab of courses[i].labs) {
          addRowToTable3([
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

displayCourses3(courses);