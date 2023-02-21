function Course(title, instructor, department, term) {
    this.title = title;
    this.instructor = instructor;
    this.department = department;
    this.term = term;
  }
  
  const courses = [
    new Course('Introduction to Programming', 'John Doe', 'Computer Science', 'Fall'),
    new Course('English Composition', 'Jane Smith', 'English', 'Spring'),
    new Course('Chemistry 101', 'Bob Johnson', 'Chemistry', 'Fall'),
    new Course('Calculus I', 'Amy Lee', 'Mathematics', 'Fall'),
    new Course('Physics 101', 'Bob Smith', 'Physics', 'Fall'),
    new Course('World History', 'Jane Doe', 'History', 'Spring'),
    new Course('Biology 101', 'Sarah Lee', 'Biology', 'Spring'),
    new Course('Art Appreciation', 'Michael Brown', 'Art', 'Winter'),
    new Course('Digital Photography', 'Emily Taylor', 'Art', 'Spring'),
    new Course('Spanish I', 'Maria Rodriguez', 'Foreign Language', 'Fall'),
    new Course('French I', 'Lucie Dupont', 'Foreign Language', 'Fall'),
    new Course('Italian I', 'Mario Rossi', 'Foreign Language', 'Spring'),
    new Course('Computer Networks', 'John Smith', 'Computer Science', 'Spring'),
    new Course('Web Development', 'Jane Doe', 'Computer Science', 'Winter'),
    new Course('Database Systems', 'Bob Johnson', 'Computer Science', 'Spring'),
    new Course('Linear Algebra', 'Amy Lee', 'Mathematics', 'Spring'),
    new Course('Discrete Mathematics', 'Bob Smith', 'Mathematics', 'Winter'),
    new Course('Chemistry 102', 'Sarah Johnson', 'Chemistry', 'Spring'),
    new Course('Organic Chemistry', 'Samuel Brown', 'Chemistry', 'Winter'),
    new Course('World Geography', 'Michael Davis', 'Geography', 'Fall')
  ];
  
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
  
  function displayCourses(courses) {
    console.log(courses.length)
    let classList = document.getElementById('class-list');
    classList.innerHTML = ''; // clear the previous list
    if (courses.length === 0) {
      let message = document.createElement('li');
      message.textContent = 'No courses found.';
      classList.appendChild(message);
    } else {
      courses.forEach(course => {
        let courseItem = document.createElement('li');
        let courseTitle = document.createElement('span');
        let addButton = document.createElement('button');
        addButton.innerText = 'ADD TO BAG';
        addButton.addEventListener('click', () => {
          bag.push(course);
          updateBag();
        })

        courseTitle.textContent = course.title;
        courseItem.appendChild(courseTitle);
        courseItem.innerHTML += ` (${course.department}, ${course.term}) - Instructor: ${course.instructor}`;
        classList.appendChild(courseItem);
        courseItem.appendChild(addButton);
        console.log("displayed")
      });
    }
  }

  function updateBag() {
    console.log(bag)
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
      li.innerText = `${course.title} - Instructor: ${course.instructor} - Department: ${course.department} - Term: ${course.term}`;
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
