interface Experience {
    company: string;
    position: string;
    duration: string;
    description: string;
}

interface Skill {
    name: string;
}

window.onload = () => {
    // Experience data
    const experiences: Experience[] = [
        {
            company: 'Tech Solutions Inc.',
            position: 'Software Engineer',
            duration: 'Jan 2021',
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
    const skills: Skill[] = [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'React' }
    ];

    // Render experience
    const experienceList = document.getElementById('experience-list');
    experiences.forEach(exp => {
        const expDiv = document.createElement('div');
        expDiv.classList.add('experience-item');
        expDiv.innerHTML = `
            <h3>${exp.position} - ${exp.company}</h3>
            <p><strong>Duration:</strong> ${exp.duration}</p>
            <p>${exp.description}</p>
        `;
        experienceList?.appendChild(expDiv);
    });

    // Render skills
    const skillsList = document.getElementById('skills-list');
    skills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.textContent = skill.name;
        skillsList?.appendChild(skillItem);
    });
};
