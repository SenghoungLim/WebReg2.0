
function Course(title, status, code, type, units, instructor, schedule, location, enrollmentCurr, enrollmentMax, waitlistCurr, waitlistMax, department, term, discussions, labs) {
  this.title = title; // On top of the table + for filtering

  // For filtering
  this.department = department;
  this.term = term;

  // In table
  this.status = status;
  this.code = code;
  this.type = type;
  this.units = units;
  this.instructor = instructor;
  this.schedule = schedule;
  this.location = location;
  this.enrollment = enrollmentCurr + '/' + enrollmentMax;
  this.waitlist = waitlistCurr + '/' + waitlistMax;

  // Other objects under the table
  this.discussions = discussions;
  this.labs = labs;
}

function Discussion(status, code, type, units, instructor, schedule, location, enrollmentCurr, enrollmentMax, waitlistCurr, waitlistMax, lectureCode) {
  this.status = status;
  this.code = code;
  this.type = type;
  this.units = units;
  this.instructor = instructor;
  this.schedule = schedule;
  this.location = location;
  this.enrollment = enrollmentCurr + '/' + enrollmentMax;
  this.waitlist = waitlistCurr + '/' + waitlistMax;

  this.lectureCode = lectureCode;
}

function Lab(status, code, type, units, instructor, schedule, location, enrollmentCurr, enrollmentMax, waitlistCurr, waitlistMax, lectureCode) {
  this.status = status;
  this.code = code;
  this.type = type;
  this.units = units;
  this.instructor = instructor;
  this.schedule = schedule;
  this.location = location;
  this.enrollment = enrollmentCurr + '/' + enrollmentMax;
  this.waitlist = waitlistCurr + '/' + waitlistMax;

  this.lectureCode = lectureCode;
}

const courses = [

new Course("Intro to Programming", "Open", "COMP101", "Lecture", 4, "Dr. Johnson", "MWF 10-11:00 AM", "Building 1 Room 101", 150, 300, 10, 20, "Computer Science", "Fall", [
  new Discussion("Open", "COMP101A", "Discussion", 1, "John Smith", "M 1-2:00 PM", "Building 1 Room 201", 25, 30, 5, 10, "COMP101"),
  new Discussion("Open", "COMP101B", "Discussion", 1, "Sarah Lee", "T 1-2:00 PM", "Building 1 Room 202", 25, 25, 5, 10, "COMP101"),
], [
  new Lab("Open", "COMP101L1", "Lab", 1, "Alex Brown", "F 1-3:00 PM", "Building 2 Room 301", 25, 30, 5, 10, "COMP101"),
  new Lab("Open", "COMP101L2", "Lab", 1, "Emily Kim", "W 1-3:00 PM", "Building 2 Room 302", 25, 30, 5, 10, "COMP101"),
]),


new Course("Calculus I", "Open", "MATH101", "Lecture", 4, "Dr. Lee", "MWF 9-10:00 AM", "Building 1 Room 102", 100, 150, 5, 10, "Mathematics", "Fall", [
  new Discussion("Open", "MATH101A", "Discussion", 1, "Jessica Chen", "W 10-11:00 AM", "Building 1 Room 203", 25, 30, 5, 10, "MATH101"),
  new Discussion("Open", "MATH101B", "Discussion", 1, "David Kim", "F 10-11:00 AM", "Building 1 Room 204", 25, 30, 5, 10, "MATH101"),
], [
  new Lab("Open", "MATH101L1", "Lab", 1, "Chris Lee", "Th 1-3:00 PM", "Building 2 Room 303", 25, 30, 5, 10, "MATH101"),
  new Lab("Open", "MATH101L2", "Lab", 1, "Jennifer Park", "T 1-3:00 PM", "Building 2 Room 304", 25, 30, 5, 10, "MATH101"),
]),
]

  
const bag = [] // an array to hold the courses in a bag

  function filterCourses(term, instructor, department) {
    let filteredCourses = courses.filter(course => {
      let termMatch = term === '' || course.term === term;
      let instructorMatch = instructor === '' || course.instructor.toLowerCase().replace(' ', '-') === instructor;
      let departmentMatch = department === '' || course.department.toLowerCase().replace(' ', '-') === department;
      return termMatch && instructorMatch && departmentMatch;
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
    const bagList = document.getElementById('bag-list');
    bagList.innerHTML = ''; // Clear the previous list
    console.log(bag);
    bag.forEach(code => {

      const removeButton = document.createElement('button');
      removeButton.innerText = 'Remove';
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
        const courseHeading = document.createElement('h5');
        courseHeading.innerText  = getObject(code).title;

        const ul = document.createElement('ul');
        ul.id = code + '-list';

        const units = document.createElement('h6');
        units.innerText = getObject(code).units + ' Units';

        const prof = document.createElement('h6');
        prof.innerText = getObject(code).instructor;

        const disList = document.createElement('ul');
        disList.id = code + '-bag-discussions';

        const labList = document.createElement('ul');
        labList.id = code + '-bag-labs';

        ul.appendChild(units);
        ul.appendChild(prof);
        ul.appendChild(disList);
        ul.appendChild(labList);


        li.appendChild(courseHeading);
        li.appendChild(ul);
        li.appendChild(removeButton);
        
 
        bagList.appendChild(li);

      }
      else if (getType(code) == 'Discussion') {
        // discussion added
        const ul = document.getElementById(getLecture(code) + '-list');
        
        const disList = document.getElementById(getLecture(code) + '-bag-discussions');
        const discussionHeading = document.createElement('h5');

        discussionHeading.textContent = 'Discussion:'
        disList.textContent = getObject(code).code;

        ul.appendChild(discussionHeading);
        ul.appendChild(disList);
      }
      else {
        // lab added
        const ul = document.getElementById(getLecture(code) + '-list');

        const labList = document.getElementById(getLecture(code) + '-bag-labs');
        const labHeading = document.createElement('h5');

        labHeading.textContent = 'Lab:'
        labList.textContent = getObject(code).code;

        ul.appendChild(labHeading);
        ul.appendChild(labList);
      }

       });
  }
  
  let classForm = document.getElementById('class-form');
  classForm.addEventListener('submit', event => {
    console.log("clicked")
    event.preventDefault();
    let term = document.getElementById('term').value;
    let instructor = document.getElementById('instructor').value;
    let department = document.getElementById('department').value;
    let filteredCourses = filterCourses(term, instructor, department);
    displayCourses(filteredCourses);
  });
  

console.log("Bags");
