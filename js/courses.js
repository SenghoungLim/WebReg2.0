
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

// const courses = [];
// var count = 0;

// function getData(data) {
//   for (i of data) {
//     count ++;
//     console.log(count);
//     if (count %100 == 0) {  // EVERY 100 classes we add a class
//       if (i.terms.includes("2022 Spring")){
//         i.terms = 'Spring';
//       }
  
//       else if (i.terms.includes("2022 Winter")){
//         i.terms = "Winter";
//       }
      
//       else if (i.terms.includes("2022 Fall")){
//         i.terms = 'Fall';
//       }
//       else {
//         continue;
//       }
  
//       courses.push(
//         new Course(i.id, "Open", i.id, "Lecture", i.units[0], "STAFF", "MWF 10-11:00 AM", "Building 1 Rm 101", 150, 300, 10, 20, i.department_name, i.terms, [
//           new Discussion("Open", i.id+'-A', "Dis", 0, "STAFF", "M 1-2:00 PM", "Building 1 Rm 201", 25, 30, 5, 10, i.id),
//           new Discussion("Open", i.id+'-B', "Dis", 0, "STAFF", "T 1-2:00 PM", "Building 1 Rm 202", 25, 25, 5, 10, i.id),
//         ], [
//           new Lab("Open", i.id+'-L1', "Lab", 0, "STAFF", "F 1-3:00 PM", "Building 2 Rm 301", 25, 30, 5, 10, i.id),
//           new Lab("Open", i.id+'-L2', "Lab", 0, "STAFF", "W 1-3:00 PM", "Building 2 Rm 302", 25, 30, 5, 10, i.id),
//         ]),)
//     }
//     }

// }


// fetch('https://api.peterportal.org/rest/v0/courses/all', {
//    headers: {
//       'Accept': 'application/json'
//    }
// })  .then(response => response.json())
// .then(data => {
//   getData(data)
// });




const courses = [

    // 1
    new Course("Intro to Programming", "Open", "COMP101", "Lecture", 4, "Johnson", "MWF 10-11:00 AM", "Building 1 Room 101", 150, 300, 10, 20, "Computer Science", "Spring", [
      new Discussion("Open", "COMP101A", "Dis", 1, "John Smith", "M 1-2:00 PM", "Building 1 Room 201", 25, 30, 5, 10, "COMP101"),
      new Discussion("Open", "COMP101B", "Dis", 1, "Sarah Lee", "T 1-2:00 PM", "Building 1 Room 202", 25, 25, 5, 10, "COMP101"),
    ], [
      new Lab("Open", "COMP101L1", "Lab", 1, "Alex Brown", "F 1-3:00 PM", "Building 2 Room 301", 25, 30, 5, 10, "COMP101"),
      new Lab("Open", "COMP101L2", "Lab", 1, "Emily Kim", "W 1-3:00 PM", "Building 2 Room 302", 25, 30, 5, 10, "COMP101"),
    ]),
    


    //2
    new Course("Calculus I", "Open", "MATH101", "Lecture", 4, "Lee", "MWF 9-10:00 AM", "Building 1 Room 102", 100, 150, 5, 10, "Mathematics", "Fall", [
      new Discussion("Open", "MATH101A", "Dis", 1, "Jessica Chen", "W 10-11:00 AM", "Building 1 Room 203", 25, 30, 5, 10, "MATH101"),
      new Discussion("Open", "MATH101B", "Dis", 1, "David Kim", "F 10-11:00 AM", "Building 1 Room 204", 25, 30, 5, 10, "MATH101"),
    ], [
      new Lab("Open", "MATH101L1", "Lab", 1, "Chris Lee", "Th 1-3:00 PM", "Building 2 Room 303", 25, 30, 5, 10, "MATH101"),
      new Lab("Open", "MATH101L2", "Lab", 1, "Jennifer Park", "T 1-3:00 PM", "Building 2 Room 304", 25, 30, 5, 10, "MATH101"),
    ]),


    //3
    new Course("Introduction to Psychology", "Open", "PSYC101", "Lecture", 3, "Williams", "MWF 11-12:00 PM", "Building 1 Room 105", 120, 150, 5, 10, "Psychology", "Fall", [
      new Discussion("Open", "PSYC101A", "Dis", 1, "John Doe", "T 1-2:00 PM", "Building 1 Room 210", 25, 30, 5, 10, "PSYC101"),
      new Discussion("Open", "PSYC101B", "Dis", 1, "Jane Smith", "W 1-2:00 PM", "Building 1 Room 211", 25, 25, 5, 10, "PSYC101"),
    ], [
      new Lab("Open", "PSYC101L1", "Lab", 1, "Bob Johnson", "Th 1-3:00 PM", "Building 2 Room 301", 25, 30, 5, 10, "PSYC101"),
      new Lab("Open", "PSYC101L2", "Lab", 1, "Amy Lee", "F 1-3:00 PM", "Building 2 Room 302", 25, 30, 5, 10, "PSYC101"),
    ]),


    //4
    new Course("General Chemistry", "Open", "CHEM101", "Lecture", 4, "Brown", "MWF 1-2:00 PM", "Building 1 Room 106", 200, 250, 5, 10, "Chemistry", "Fall", [
      new Discussion("Open", "CHEM101A", "Dis", 1, "Bob Smith", "T 3-4:00 PM", "Building 1 Room 220", 25, 30, 5, 10, "CHEM101"),
      new Discussion("Open", "CHEM101B", "Dis", 1, "Jane Doe", "W 3-4:00 PM", "Building 1 Room 221", 25, 25, 5, 10, "CHEM101"),
    ], [
      new Lab("Open", "CHEM101L1", "Lab", 1, "Sarah Lee", "Th 9-11:00 AM", "Building 2 Room 303", 25, 30, 5, 10, "CHEM101"),
      new Lab("Open", "CHEM101L2", "Lab", 1, "Michael Brown", "F 9-11:00 AM", "Building 2 Room 304", 25, 30, 5, 10, "CHEM101"),
    ]),


    //5
    new Course("Environmental Science", "Open", "ENVSCI101", "Lecture", 3, "Green", "TTh 9:30-10:45 AM", "Science Hall 101", 90, 120, 20, 30, "Environmental Science", "Winter", [
        new Discussion("Open", "ENVSCI101A", "Dis", 1, "David Rodriguez", "W 11:00-12:00 PM", "Science Hall 202", 20, 25, 5, 10, "ENVSCI101"),
        new Discussion("Open", "ENVSCI101B", "Dis", 1, "Emily Nguyen", "Th 12:00-1:00 PM", "Science Hall 203", 20, 25, 5, 10, "ENVSCI101"),
      ], [
        new Lab("Open", "ENVSCI101L1", "Lab", 1, "Jessica Lee", "M 1:00-3:00 PM", "Science Hall 301", 20, 25, 5, 10, "ENVSCI101"),
        new Lab("Open", "ENVSCI101L2", "Lab", 1, "Michael Smith", "W 1:00-3:00 PM", "Science Hall 302", 20, 25, 5, 10, "ENVSCI101"),
      ]),



      //6
      new Course("Introduction to Sociology", "Open", "SOC101", "Lecture", 3, "Garcia", "MWF 11:00-12:15 PM", "Social Sciences Building 101", 150, 200, 15, 20, "Sociology", "Fall", [
        new Discussion("Open", "SOC101A", "Dis", 1, "Juan Hernandez", "T 10:00-11:00 AM", "Social Sciences Building 201", 30, 35, 5, 10, "SOC101"),
        new Discussion("Open", "SOC101B", "Dis", 1, "Maria Gonzalez", "Th 10:00-11:00 AM", "Social Sciences Building 202", 30, 35, 5, 10, "SOC101"),
      ], [
        new Lab("Open", "SOC101L1", "Lab", 1, "Carla Perez", "W 3:00-5:00 PM", "Social Sciences Building 301", 30, 35, 5, 10, "SOC101"),
        new Lab("Open", "SOC101L2", "Lab", 1, "Samuel Kim", "F 3:00-5:00 PM", "Social Sciences Building 302", 30, 35, 5, 10, "SOC101"),
      ]),


      //7
      new Course("Psychology", "Open", "PSYCH101", "Lecture", 3, "Kim", "MWF 9:00-10:15 AM", "Psychology Building 101", 150, 200, 15, 20, "Psychology", "Winter", [
        new Discussion("Open", "PSYCH101A", "Dis", 1, "Adam Patel", "T 1:00-2:00 PM", "Psychology Building 201", 30, 35, 5, 10, "PSYCH101"),
        new Discussion("Open", "PSYCH101B", "Dis", 1, "Brianna Martinez", "Th 1:00-2:00 PM", "Psychology Building 202", 30, 35, 5, 10, "PSYCH101"),
        ], [
        new Lab("Open", "PSYCH101L1", "Lab", 1, "Sophia Kim", "W 2:00-4:00 PM", "Psychology Building 301", 30, 35, 5, 10, "PSYCH101"),
        new Lab("Open", "PSYCH101L2", "Lab", 1, "Kevin Jones", "F 2:00-4:00 PM", "Psychology Building 302", 30, 35, 5, 10, "PSYCH101"),
        ]),


        //8
        new Course("Art History", "Open", "ARTH101", "Lecture", 3, "Lee", "MWF 1:00-2:15 PM", "Fine Arts Building 101", 100, 150, 10, 15, "Art History", "Fall", [
            new Discussion("Open", "ARTH101A", "Dis", 1, "Jasmine Nguyen", "T 2:00-3:00 PM", "Fine Arts Building 201", 20, 25, 5, 10, "ARTH101"),
            new Discussion("Open", "ARTH101B", "Dis", 1, "Alex Rodriguez", "Th 2:00-3:00 PM", "Fine Arts Building 202", 20, 25, 5, 10, "ARTH101"),
            ], [
            new Lab("Open", "ARTH101L1", "Lab", 1, "Avery Davis", "W 10:00-12:00 PM", "Fine Arts Building 301", 20, 25, 5, 10, "ARTH101"),
            new Lab("Open", "ARTH101L2", "Lab", 1, "Olivia Hernandez", "F 10:00-12:00 PM", "Fine Arts Building 302", 20, 25, 5, 10, "ARTH101"),
            ]),

        // 9
            new Course("Introduction to Linguistics", "Open", "LING101", "Lecture", 3, "Davis", "MWF 2:00-3:15 PM", "Language Building 101", 120, 150, 10, 15, "Linguistics", "Fall", [
                new Discussion("Open", "LING101A", "Dis", 1, "Sarah Lee", "T 1:00-2:00 PM", "Language Building 201", 20, 25, 5, 10, "LING101"),
                new Discussion("Open", "LING101B", "Dis", 1, "Mohammed Ali", "Th 1:00-2:00 PM", "Language Building 202", 20, 25, 5, 10, "LING101"),
              ], [
                new Lab("Open", "LING101L1", "Lab", 1, "Emily Chen", "W 3:00-5:00 PM", "Language Building 301", 20, 25, 5, 10, "LING101"),
                new Lab("Open", "LING101L2", "Lab", 1, "Alex Wong", "F 3:00-5:00 PM", "Language Building 302", 20, 25, 5, 10, "LING101"),
              ]),
        
        // 10
        new Course("Digital Art and Design", "Open", "ARTD101", "Lecture", 3, "Johnson", "TTh 12:30-1:45 PM", "Art Building 101", 80, 100, 15, 20, "Digital Art and Design", "Spring", [
            new Discussion("Open", "ARTD101A", "Dis", 1, "Karen Smith", "W 9:00-10:00 AM", "Art Building 201", 15, 20, 5, 10, "ARTD101"),
            new Discussion("Open", "ARTD101B", "Dis", 1, "Raj Patel", "Th 2:00-3:00 PM", "Art Building 202", 15, 20, 5, 10, "ARTD101"),
          ], [
            new Lab("Open", "ARTD101L1", "Lab", 1, "Avery Johnson", "M 9:00-11:00 AM", "Art Building 301", 15, 20, 5, 10, "ARTD101"),
            new Lab("Open", "ARTD101L2", "Lab", 1, "Rachel Kim", "W 2:00-4:00 PM", "Art Building 302", 15, 20, 5, 10, "ARTD101"),
          ]),

        // 11
        new Course("Introduction to Statistics", "Open", "STAT101", "Lecture", 3, "Lee", "MWF 9:00-10:15 AM", "Mathematics Building 101", 120, 180, 15, 20, "Statistics", "Fall", [
            new Discussion("Open", "STAT101A", "Dis", 1, "Sara Patel", "W 1:00-2:00 PM", "Mathematics Building 202", 25, 30, 5, 10, "STAT101"),
            new Discussion("Open", "STAT101B", "Dis", 1, "John Smith", "Th 10:00-11:00 AM", "Mathematics Building 203", 25, 30, 5, 10, "STAT101"),
          ], [
            new Lab("Open", "STAT101L1", "Lab", 1, "Rachel Kim", "M 3:00-5:00 PM", "Mathematics Building 301", 25, 30, 5, 10, "STAT101"),
            new Lab("Open", "STAT101L2", "Lab", 1, "Erica Chen", "W 3:00-5:00 PM", "Mathematics Building 302", 25, 30, 5, 10, "STAT101"),
          ]),
           
          //12
          new Course("Introduction to Psychology", "Open", "PSYCH101", "Lecture", 3, "Smith", "TTh 1:30-2:45 PM", "Psychology Building 101", 100, 150, 10, 15, "Psychology", "Spring", [
            new Discussion("Open", "PSYCH101A", "Dis", 1, "Avery Jones", "M 11:00-12:00 PM", "Psychology Building 202", 20, 25, 5, 10, "PSYCH101"),
            new Discussion("Open", "PSYCH101B", "Dis", 1, "Max Williams", "W 11:00-12:00 PM", "Psychology Building 203", 20, 25, 5, 10, "PSYCH101"),
          ], [
            new Lab("Open", "PSYCH101L1", "Lab", 1, "Natalie Nguyen", "T 3:00-5:00 PM", "Psychology Building 301", 20, 25, 5, 10, "PSYCH101"),
            new Lab("Open", "PSYCH101L2", "Lab", 1, "Andrew Kim", "Th 3:00-5:00 PM", "Psychology Building 302", 20, 25, 5, 10, "PSYCH101"),
          ]),
          
          // 13
          new Course("Introduction to Art History", "Open", "ARTH101", "Lecture", 3, "Kim", "MWF 9:00-10:15 AM", "Art Building 101", 80, 120, 10, 20, "Art History", "Winter", [
            new Discussion("Open", "ARTH101A", "Dis", 1, "Sophia Chen", "T 11:00-12:00 PM", "Art Building 201", 20, 25, 5, 10, "ARTH101"),
            new Discussion("Open", "ARTH101B", "Dis", 1, "Ethan Johnson", "Th 11:00-12:00 PM", "Art Building 202", 20, 25, 5, 10, "ARTH101"),
          ], [
            new Lab("Open", "ARTH101L1", "Lab", 1, "Ava Davis", "W 1:00-3:00 PM", "Art Building 301", 20, 25, 5, 10, "ARTH101"),
            new Lab("Open", "ARTH101L2", "Lab", 1, "Lucas Kim", "F 1:00-3:00 PM", "Art Building 302", 20, 25, 5, 10, "ARTH101"),
          ]),
          
          //14

          new Course("Digital Media Production", "Open", "DM101", "Lecture", 4, "Lee", "TTh 2:30-4:00 PM", "Media Building 101", 50, 80, 5, 10, "Digital Media", "Winter", [
            new Discussion("Open", "DM101A", "Dis", 1, "Avery Taylor", "W 11:00-12:00 PM", "Media Building 201", 10, 15, 2, 5, "DM101"),
            new Discussion("Open", "DM101B", "Dis", 1, "Jack Lee", "Th 11:00-12:00 PM", "Media Building 202", 10, 15, 2, 5, "DM101"),
          ], [
            new Lab("Open", "DM101L1", "Lab", 1, "Nora Kim", "M 9:00-11:00 AM", "Media Building 301", 10, 15, 2, 5, "DM101"),
            new Lab("Open", "DM101L2", "Lab", 1, "Jason Chen", "W 9:00-11:00 AM", "Media Building 302", 10, 15, 2, 5, "DM101"),
          ]),
    ]   