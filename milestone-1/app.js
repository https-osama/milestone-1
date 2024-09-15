window.onload = function () {
    // Experience data
    var experiences = [
        {
            company: 'Tech Solutions Inc.',
            position: 'Software Engineer',
            duration: 'Jan 2021 - Present',
            description: 'Developed and maintained web applications using modern JavaScript frameworks.'
        },
        {
            company: 'Web Innovators',
            position: 'Front-End Developer',
            duration: 'Mar 2022 - Dec 2023',
            description: 'Designed and implemented responsive websites with HTML, CSS, and JavaScript.'
        }
    ];
    // Skills data
    var skills = [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'React' }
    ];
    // Render experience
    var experienceList = document.getElementById('experience-list');
    experiences.forEach(function (exp) {
        var expDiv = document.createElement('div');
        expDiv.classList.add('experience-item');
        expDiv.innerHTML = "\n            <h3>".concat(exp.position, " - ").concat(exp.company, "</h3>\n            <p><strong>Duration:</strong> ").concat(exp.duration, "</p>\n            <p>").concat(exp.description, "</p>\n        ");
        experienceList === null || experienceList === void 0 ? void 0 : experienceList.appendChild(expDiv);
    });
    // Render skills
    var skillsList = document.getElementById('skills-list');
    skills.forEach(function (skill) {
        var skillItem = document.createElement('li');
        skillItem.textContent = skill.name;
        skillsList === null || skillsList === void 0 ? void 0 : skillsList.appendChild(skillItem);
    });
};
