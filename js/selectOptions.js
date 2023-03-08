
function getAllDepartments() {
    l = []
    
    for (let i = 0; i< courses.length; i++) {
        l.push(courses[i].department);
    }

    // Get only unique elements
    var unique = [...new Set(l)];
    return unique;
}

function getAllInstructors() {
    l = []
    for (let i = 0; i< courses.length; i++) {
        l.push(courses[i].instructor);
    }
    return l
}


const departmentSelect = document.getElementById('department');
const instructorSelect = document.getElementById('instructor');


function fillInOptions() {
    for (department of getAllDepartments()) {
        const opt = document.createElement('option');
        opt.value = department;
        opt.innerText = department;
        departmentSelect.appendChild(opt);
    }
    
    for (instructor of getAllInstructors()) {
        const opt = document.createElement('option');
        opt.value = instructor.replace(/ +/g, '-').toLowerCase();
        opt.innerText = instructor;
        instructorSelect.appendChild(opt);
    }
    
}
