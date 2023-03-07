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
function displayCoursesByTitle(title) {
  // Clear existing results
  searchResults.innerHTML = "";
  
  // Filter courses by title
  const courses2 = courses.filter(course => course.title.toLowerCase().includes(title.toLowerCase()));
  
  // Display filtered courses
  courses2.forEach(course => {
    const courseDiv = document.createElement("div");
    courseDiv.textContent = course.title;
    searchResults.appendChild(courseDiv);
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






    // let resultsHtml = "";


    // // Loop through each course option and check if it matches the search term
    // document.querySelectorAll("#course-code option").forEach((option) => {
    //   const courseName = option.text.toLowerCase();
    //   if (courseName.includes(searchTerm)) {
    //     resultsHtml += `<div>${courseName}</div>`;
    //   }
    // });
  
    // // Display the search results
    // searchResults.innerHTML = resultsHtml;
  
  
  
  
  
