// Get the table element from the HTML document
  const table2 = document.getElementById("suggested-courses-table-id");
  console.log(table2.id);

  // Create a function to add a row to the table
  function addRowToTable2(rowData, type) {
    
    // Create a new row element
    const row = document.createElement("tr");
    row.className = type;
    row.id = rowData[1] + '-suggested';

  
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
      if (classAlreadyAdded(rowData[1])) {
        // Main course already added
        // display error message duplicate
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
            const disButton = document.getElementById(discussionCodes[i] + '-suggested').getElementsByTagName('button')[0];
            disButton.style.display = 'inline';
          }
          for (var i = 0; i< labCodes.length; i++) {
            const labButton = document.getElementById(labCodes[i] + '-suggested').getElementsByTagName('button')[0];
            labButton.style.display = 'inline';
          }
        }
      }

      });

      cell.appendChild(addButton);
      row.appendChild(cell);


    }
  
  
    // Add the row to the table
    table2.appendChild(row);
  }



function displayCourses2(courses) {
    // Clear previous classes
    table2.textContent = '';
  
    for (let i = 0 ; i < courses.length; i++) {
        // Course title

        const courseTitle = document.createElement('div');
        courseTitle.className = 'course-titles';
        courseTitle.textContent = courses[i].code + '\t-\t' + courses[i].title;
        table2.appendChild(courseTitle);
    
        // Add the headers row to the table
        addRowToTable2([
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
        addRowToTable2([
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
            addRowToTable2([
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
            addRowToTable2([
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

