// function Course(title, status, code, type, units, instructor, schedule, location, enrollmentCurr, enrollmentMax, waitlistCurr, waitlistMax, department, term, discussions, labs) {
//     this.title = title; // On top of the table + for filtering
  
//     // For filtering
//     this.department = department;
//     this.term = term;
  
//     // In table
//     this.status = status;
//     this.code = code;
//     this.type = type;
//     this.units = units;
//     this.instructor = instructor;
//     this.schedule = schedule;
//     this.location = location;
//     this.enrollment = enrollmentCurr + '/' + enrollmentMax;
//     this.waitlist = waitlistCurr + '/' + waitlistMax;
  
//     // Other objects under the table
//     this.discussions = discussions;
//     this.labs = labs;
//   }
  
//   function Discussion(status, code, type, units, instructor, schedule, location, enrollmentCurr, enrollmentMax, waitlistCurr, waitlistMax, lectureCode) {
//     this.status = status;
//     this.code = code;
//     this.type = type;
//     this.units = units;
//     this.instructor = instructor;
//     this.schedule = schedule;
//     this.location = location;
//     this.enrollment = enrollmentCurr + '/' + enrollmentMax;
//     this.waitlist = waitlistCurr + '/' + waitlistMax;
  
//     this.lectureCode = lectureCode;
//   }
  
//   function Lab(status, code, type, units, instructor, schedule, location, enrollmentCurr, enrollmentMax, waitlistCurr, waitlistMax, lectureCode) {
//     this.status = status;
//     this.code = code;
//     this.type = type;
//     this.units = units;
//     this.instructor = instructor;
//     this.schedule = schedule;
//     this.location = location;
//     this.enrollment = enrollmentCurr + '/' + enrollmentMax;
//     this.waitlist = waitlistCurr + '/' + waitlistMax;
  
//     this.lectureCode = lectureCode;
//   }
  
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


  const table = document.getElementById("suggested-courses-table-body-id");

  // Loop through courses array data
  courses.forEach(course => {
    const row = table.insertRow();
    // Populate table row with course info
    row.innerHTML = `
      <td>${course.name}</td>
      <td>${course.status}</td>
      <td>${course.code}</td>
      <td>${course.classType}</td>
      <td>${course.credits}</td>
      <td>${course.instructor}</td>
      <td>${course.schedule}</td>
      <td>${course.location}</td>
      <td>${course.enrolled}</td>
      <td>${course.capacity}</td>
      <td>${course.waitlist}</td>
      <td>${course.availableSeats}</td>
      <td>${course.department}</td>
      <td>${course.term}</td>
    `;
  });
  