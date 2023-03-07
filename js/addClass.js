


const bag = [] // an array to hold the courses in a bag

  function filterCourses(term, instructor, department) {
    let filteredCourses = courses.filter(course => {
      let termMatch = term === '' || course.term === term;

      return termMatch;
    });
    return filteredCourses;
  }

  function getObject(code) {
    // search courses
    for (var i = 0; i< courses.length; i++) {
      if (courses[i].code == code) {
        return courses[i];
      }
    }
    
    for (var i = 0; i< courses.length; i++) {
      // labs
      l = courses[i].labs;
      for (var j = 0; j < l.length; j++) {
        if (l[j].code == code) {
          return l[j];
        } 
      }
    }

    for (var i = 0; i< courses.length; i++) {
    // search discussions
      d = courses[i].discussions;
      for (var j = 0; j < d.length; j++) {
        if (d[j].code == code) {
          return d[j];
        }
      }
    }
}

  function getType(code) {
    return getObject(code).type;
  }
  

  function classAlreadyAdded(code) {
    for (var i = 0; i< bag.length; i++) {
      if (bag[i] == code) {
        return true;
      }
    }
    return false;
  }

  function getLecture(code) {
    return getObject(code).lectureCode;
  }

  function getDiscussions(code) {
    result = []
    var discussionObjs = getObject(code).discussions;
    for (var i = 0; i< discussionObjs.length; i++) {
      result.push(discussionObjs[i].code);
    }
    return result;
  }

  function getLabs(code) {
    result = []
    var labObjs= getObject(code).labs;
    for (var i = 0; i< labObjs.length; i++) {
      result.push(labObjs[i].code);
    }
    return result;
  }

  function deleteFromBag(code) {
    for (var i = 0; i< bag.length; i++) {
      if (bag[i] == code) {
        console.log(bag[i]);
        bag.splice(i, 1);
      }
    }
  }


  function returnOldDiscussion(discussions) {
    for (var i = 0; i< bag.length; i++) {
      for (var j = 0; j < discussions.length; j++) {
        if (bag[i] == discussions[j].code) {
          return bag[i];
        }
      }
    }
  }

  function returnOldLab(labs) {
    for (var i = 0; i< bag.length; i++) {
      for (var j = 0; j < labs.length; j++) {
        if (bag[i] == labs[j].code) {
          return bag[i];
        }
      }
    }
  }

  // Get the table element from the HTML document
  const table = document.getElementById("courses-table");

  // Create a function to add a row to the table
  function addRowToTable(rowData, type) {
    
    // Create a new row element
    const row = document.createElement("tr");
    row.className = type;
    row.id = rowData[1];

  
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
        const defaultBagWindowText = document.getElementById('defaultBagWindowTxtID');
        defaultBagWindowText.style.display = "none";
      if (classAlreadyAdded(rowData[1])) {
        // Main course already added
        
        //ERROR PREVENTION Message: When a user add duplicate courses
        //START
        const dupNotify = document.createElement('div');
        dupNotify.className = 'dupNotifyClassName';
      
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
          //alert("Please add a lecture before proceeding to add lab & discussion.");
          //ERROR PREVENTION Message: When a user add lab & dis before lec
            //START
            const disLabNotify = document.createElement('div');
            disLabNotify.className = 'disLabNotifyClassName';
          
            //Icon
            const warningIcon = document.createElement('img');
            warningIcon.src = './images/warningSignIcon.webp';
            warningIcon.alt = 'Warning Icon';
            warningIcon.className= 'warningSignIcon';
            //Message
            const dupMsg = document.createElement('span');
            dupMsg.className = 'dupMsg';
            dupMsg.textContent = 'Please add a lecture before proceeding to add lab & discussion.';
            
            //Add to the notification body 
            disLabNotify.appendChild(warningIcon);
            disLabNotify.appendChild(dupMsg);

            disLabNotify.id = 'disLabNotifyID';
              // Append the notification element to the body
              document.body.appendChild(disLabNotify);
              console.log('Dis & Lab added before lecture warning');
              // Wait for a moment to trigger the transition
              setTimeout(() => {
                disLabNotify.classList.add('active');
              }, 0);

              // Wait for 3 seconds before removing the notification element
              setTimeout(() => {
                disLabNotify.classList.remove('active');

                // Wait for the transition to complete before removing the element from the DOM
                setTimeout(() => {
                  disLabNotify.parentNode.removeChild(disLabNotify);
              }, 300);
            }, 3000);
            //END
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
            const disButton = document.getElementById(discussionCodes[i]).getElementsByTagName('button')[0];
            disButton.style.display = 'inline';
          }
          for (var i = 0; i< labCodes.length; i++) {
            const labButton = document.getElementById(labCodes[i]).getElementsByTagName('button')[0];
            labButton.style.display = 'inline';
          }
        }
      }

      });

      cell.appendChild(addButton);
      row.appendChild(cell);


    }
  
  
    // Add the row to the table
    table.appendChild(row);
  }
  
function displayCourses(courses) {
  // Clear previous classes
  table.textContent = '';

  for (let i = 0 ; i < courses.length; i++) {
      // Course title
      const courseTitle = document.createElement('h4');
      courseTitle.textContent = courses[i].title;
      table.appendChild(courseTitle);
  
      // Add the headers row to the table
      addRowToTable([
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
      addRowToTable([
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
          addRowToTable([
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
          addRowToTable([
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


  function updateBag() {
    notification = document.getElementById('notification');
    notification.style.display = 'block';
    const backpackImg = document.querySelector('.bag-icon-wrapper .bag-button-class img');
    backpackImg.style.cssText = 'animation: shake 0.3s';
    setTimeout(() => {
      backpackImg.style.cssText = 'animation: none';
    }, 300)

    const saveButton = document.getElementById('enroll-button');
    const autoEnrollButton = document.getElementById('auto-enroll-button');
    saveButton.style.display = 'inline';
    autoEnrollButton.style.display = 'inline';

    const bagList = document.getElementById('bag-list');
    bagList.innerHTML = ''; // Clear the previous list
    console.log(bag);
    bag.forEach(code => {

      const removeButton = document.createElement('img');
      removeButton.src= './images/trash-can.png';
      removeButton.addEventListener('click', () => {
       // const existingLabs
        bag.splice(bag.indexOf(code), 1);
        const listOfDiscussions = getDiscussions(code);
        const listOfLabs = getLabs(code);

        // Delete any discussion section
        for (var i = 0; i< listOfDiscussions.length; i++) {
          deleteFromBag(listOfDiscussions[i]);
        }
        // Delete any lab section
        for (var i = 0; i< listOfLabs.length; i++) {
          deleteFromBag(listOfLabs[i]);
        }

        updateBag();
        console.log('removed', bag);

      });

      if (getType(code) == 'Lecture') {
        const li = document.createElement('li');
        const courseHeading = document.createElement('div');
        courseHeading.className = 'course-heading';

        courseHeading.innerText  = getObject(code).title;
        // separator.innerText = "--------------";

        const ul = document.createElement('ul');
        ul.id = code + '-list';

        const units = document.createElement('div');
        units.innerText = getObject(code).units + ' Units';
        units.className = 'info';

        const prof = document.createElement('div');
        prof.innerText = getObject(code).instructor;
        prof.className = 'info';


        const schedule = document.createElement('div');
        schedule.innerText = getObject(code).schedule;
        schedule.className = 'info';

        const disList = document.createElement('ul');
        disList.id = code + '-bag-discussions';

        const labList = document.createElement('ul');
        labList.id = code + '-bag-labs';

        ul.appendChild(units);
        ul.appendChild(prof);
        ul.appendChild(schedule);
        ul.appendChild(disList);
        ul.appendChild(labList);

        
        const left = document.createElement('div');
        left.className = 'left';

        const right = document.createElement('div');
        right.className = 'right';

        // const separatorLine = document.createElement('div');
        // separatorLine.className = 'separator';

        left.appendChild(removeButton);
        right.appendChild(courseHeading);
        right.appendChild(ul);
        // separatorLine.appendChild(separator);

        li.appendChild(right);
        li.appendChild(left);
        // li.appendChild(separator)
        
 
        bagList.appendChild(li);

      }
      else if (getType(code) == 'Dis') {
        // discussion added
        const ul = document.getElementById(getLecture(code) + '-list');
        
        const disList = document.getElementById(getLecture(code) + '-bag-discussions');
        const discussionHeading = document.createElement('div');
        discussionHeading.className = 'discussion-heading';

        discussionHeading.textContent = 'Discussion:'
        disList.textContent = getObject(code).code;

        ul.appendChild(discussionHeading);
        ul.appendChild(disList);
      }
      else {
        // lab added
        const ul = document.getElementById(getLecture(code) + '-list');

        const labList = document.getElementById(getLecture(code) + '-bag-labs');
        const labHeading = document.createElement('div');
        labHeading.className = 'lab-heading';

        labHeading.textContent = 'Lab:'
        labList.textContent = getObject(code).code;

        ul.appendChild(labHeading);
        ul.appendChild(labList);
      }

       });
  }
  
  let classForm = document.getElementById('class-form');
  classForm.addEventListener('submit', event => {
    console.log("heyy");
    const anteater = document.getElementById('initialOpenPageID');
    anteater.style.display = "none";
    console.log("clicked")
    event.preventDefault();
    let term = document.getElementById('term').value;
    let instructor = document.getElementById('instructor').value;
    let department = document.getElementById('department').value;
    let filteredCourses = filterCourses(term, instructor, department);
    displayCourses(filteredCourses);
  });
  