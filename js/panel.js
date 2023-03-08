const leftPanel = document.querySelector('.left-panel');
const rightPanel = document.querySelector('.right-panel');

const toggleLeftPanelWidth = () => {
  leftPanel.classList.toggle('collapsed');
  rightPanel.classList.toggle('expanded');
}

const toggleRightPanelWidth = () => {
  rightPanel.classList.toggle('expanded');
  leftPanel.classList.toggle('collapsed');
}

function togglePanel() {
    toggleLeftPanelWidth()
}





// Function to display courses by title and display results
function displayCoursesByTitle(name) {
  // Clear existing results
  searchResults.innerHTML = "";
  
  // Filter courses by title OR Code
  const courses2 = courses.filter(course => (course.title.toLowerCase().includes(name.toLowerCase()) || course.code.toLowerCase().includes(name.toLowerCase())));
  
  // Display filtered courses
  courses2.forEach(course => {
    const courseButton = document.createElement("button");
    courseButton.textContent = course.code + ' - ' + course.title;
    courseButton.addEventListener("click", event => {
    searchInput.value = course.code;
    searchResults.innerHTML = '';
    });

    searchResults.appendChild(courseButton);
  });
}


  // Add an event listener to the search bar
  const searchInput = document.querySelector('#course-search');
  const searchResults = document.getElementById("search-results");

  searchInput.addEventListener("input", (event) => {
      const searchText = event.target.value;
      console.log(searchText);
      if (searchText) {
        displayCoursesByTitle(searchText);
      }
      else {
        displayCoursesByTitle("0~0~0");  // No courses will contain this string
      }
  });


  function loadCourse(title) {
    console.log(title);
  }




// classForm.addEventListener('submit', event => {
//   console.log("heyy");
//   const anteater = document.getElementById('initialOpenPageID');
//   anteater.style.display = "none"
//   console.log("clicked")
//   event.preventDefault();
//   let term = document.getElementById('term').value;
//   let instructor = document.getElementById('instructor').value;
//   let department = document.getElementById('department').value;
//   let filteredCourses = filterCourses(term, instructor, department);
//   displayCourses(filteredCourses);
// });