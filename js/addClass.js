
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

function Discussion(status, code, type, units, instructor, schedule, location, enrollmentCurr, enrollmentMax, waitlistCurr, waitlistMax) {
  this.status = status;
  this.code = code;
  this.type = type;
  this.units = units;
  this.instructor = instructor;
  this.schedule = schedule;
  this.location = location;
  this.enrollment = enrollmentCurr + '/' + enrollmentMax;
  this.waitlist = waitlistCurr + '/' + waitlistMax;

}

function Lab(status, code, type, units, instructor, schedule, location, enrollmentCurr, enrollmentMax, waitlistCurr, waitlistMax) {
  this.status = status;
  this.code = code;
  this.type = type;
  this.units = units;
  this.instructor = instructor;
  this.schedule = schedule;
  this.location = location;
  this.enrollment = enrollmentCurr + '/' + enrollmentMax;
  this.waitlist = waitlistCurr + '/' + waitlistMax;

}

const courses = [

new Course("Intro to Programming", "Open", "COMP101", "Lecture", 4, "Dr. Johnson", "MWF 10-11:00 AM", "Building 1 Room 101", 150, 300, 10, 20, "Computer Science", "Fall", [
  new Discussion("Open", "COMP101A", "Discussion", 1, "John Smith", "M 1-2:00 PM", "Building 1 Room 201", 25, 30, 5, 10),
  new Discussion("Open", "COMP101B", "Discussion", 1, "Sarah Lee", "T 1-2:00 PM", "Building 1 Room 202", 25, 25, 5, 10),
], [
  new Lab("Open", "COMP101L1", "Lab", 1, "Alex Brown", "F 1-3:00 PM", "Building 2 Room 301", 25, 30, 5, 10),
  new Lab("Open", "COMP101L2", "Lab", 1, "Emily Kim", "W 1-3:00 PM", "Building 2 Room 302", 25, 30, 5, 10),
]),


new Course("Calculus I", "Open", "MATH101", "Lecture", 4, "Dr. Lee", "MWF 9-10:00 AM", "Building 1 Room 102", 100, 150, 5, 10, "Mathematics", "Fall", [
  new Discussion("Open", "MATH101A", "Discussion", 1, "Jessica Chen", "W 10-11:00 AM", "Building 1 Room 203", 25, 30, 5, 10),
  new Discussion("Open", "MATH101B", "Discussion", 1, "David Kim", "F 10-11:00 AM", "Building 1 Room 204", 25, 30, 5, 10),
], [
  new Lab("Open", "MATH101L1", "Lab", 1, "Chris Lee", "Th 1-3:00 PM", "Building 2 Room 303", 25, 30, 5, 10),
  new Lab("Open", "MATH101L2", "Lab", 1, "Jennifer Park", "T 1-3:00 PM", "Building 2 Room 304", 25, 30, 5, 10),
]),


new Course("Calculus II", "Open", "MATH101", "Lecture", 4, "Dr. Lee", "MWF 9-10:00 AM", "Building 1 Room 102", 100, 150, 5, 10, "Mathematics", "Fall", [
  new Discussion("Open", "MATH101A", "Discussion", 1, "Jessica Chen", "W 10-11:00 AM", "Building 1 Room 203", 25, 30, 5, 10),
  new Discussion("Open", "MATH101B", "Discussion", 1, "David Kim", "F 10-11:00 AM", "Building 1 Room 204", 25, 30, 5, 10),
], [
  new Lab("Open", "MATH101L1", "Lab", 1, "Chris Lee", "Th 1-3:00 PM", "Building 2 Room 303", 25, 30, 5, 10),
  new Lab("Open", "MATH101L2", "Lab", 1, "Jennifer Park", "T 1-3:00 PM", "Building 2 Room 304", 25, 30, 5, 10),
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
  


  // Get the table element from the HTML document
  const table = document.getElementById("courses-table");

  // Create a function to add a row to the table
  function addRowToTable(rowData, type) {
    // Create a new row element
    const row = document.createElement("tr");
    row.className = type;
  
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
  
      addButton.addEventListener('click', () => {
      bag.push(rowData[1]);
      updateBag();
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
          ],'lab', true);
        }
}
    
}


  function updateBag() {
    const bagList = document.getElementById('bag-list');
    bagList.innerHTML = ''; // Clear the previous list
    bag.forEach(course => {
       const li = document.createElement('li');
       const removeButton = document.createElement('button');
       removeButton.innerText = 'Remove';
       removeButton.addEventListener('click', () => {
         bag.splice(bag.indexOf(course), 1);
         updateBag();
       });
       li.innerText = course
       li.appendChild(removeButton);
        bagList.appendChild(li);
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
  

console.log("Bags")
