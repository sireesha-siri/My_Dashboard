let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
})

let githubBtn = document.getElementById('githubButton');
let skillsBtn = document.getElementById('skillsButton');
let projectsBtn = document.getElementById('projectsButton');
let achievementsBtn = document.getElementById('achievementsButton');

let githubTab = document.getElementById('sectionGithub');
let skillsTab = document.getElementById('sectionSkills');
let projectsTab = document.getElementById('sectionProjects');
let achievementsTab = document.getElementById('sectionAchievements');

function githubButton() {
    githubTab.style.display = 'block';
    skillsTab.style.display = 'none';
    projectsTab.style.display = 'none';
    achievementsTab.style.display = 'none';

    githubBtn.classList.add('selected');
    skillsBtn.classList.remove('selected');
    projectsBtn.classList.remove('selected');
    achievementsBtn.classList.remove('selected');
}

function skillsButton() {
    githubTab.style.display = 'none';
    skillsTab.style.display= 'block';
    projectsTab.style.display = 'none';
    achievementsTab.style.display = 'none';

    githubBtn.classList.remove('selected');
    skillsBtn.classList.add('selected');
    projectsBtn.classList.remove('selected');
    achievementsBtn.classList.remove('selected');
}

function projectsButton(){
    githubTab.style.display = 'none';
    skillsTab.style.display = 'none';
    projectsTab.style.display = 'block';
    achievementsTab.style.display = 'none';

    githubBtn.classList.remove('selected');
    skillsBtn.classList.remove('selected');
    projectsBtn.classList.add('selected');
    achievementsBtn.classList.remove('selected');
}

function achievementsButton(){
    githubTab.style.display = 'none';
    skillsTab.style.display = 'none';
    projectsTab.style.display = 'none';
    achievementsTab.style.display = 'block';

    githubBtn.classList.remove('selected');
    skillsBtn.classList.remove('selected');
    projectsBtn.classList.remove('selected');
    achievementsBtn.classList.add('selected');
}

githubBtn.addEventListener('click', githubButton);
skillsBtn.addEventListener('click', skillsButton);
projectsBtn.addEventListener('click', projectsButton);
achievementsBtn.addEventListener('click', achievementsButton);


// SKILLS

document.addEventListener('DOMContentLoaded', function() {
    const softSkillsCanvas = document.getElementById('softSkillsChart');
    const frontendCanvas = document.getElementById('frontendChart');
    const backendCanvas = document.getElementById('backendChart');
    
    const softSkillsCtx = softSkillsCanvas.getContext('2d');

    // Soft Skills Polar Area Chart
    const softSkills = {
        labels: ['Communication', 'Problem-Solving', 'Time Management', 'Self-Motivation', 'Teamwork', 'Adaptability', 'Attention to Detail'],
        data: [4, 5, 4, 5, 4, 3, 4] // Ratings
    };
    
    const polarAreaChart = (ctx, data) => {
        new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: softSkills.labels,
                datasets: [{
                    data: data.data,
                    backgroundColor: 'rgba(0, 150, 136, 0.2)', // Light teal
                    borderColor: '#004D40', // Dark teal
                    borderWidth: 1,
                    hoverBackgroundColor: '#00796B', // Darker teal on hover
                    hoverBorderColor: '#004D40'
                }]
            },
            options: {
                responsive: true,
                scales: {
                    r: {
                        beginAtZero: true
                    }
                }
            }
        });
    };

    polarAreaChart(softSkillsCtx, softSkills);

    // Technical Skills Bar Chart - Frontend
const frontendSkills = {
    labels: ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'JavaScript', 'React'],
    data: [90, 85, 80, 70, 90, 85] // Percentages
};

new Chart(frontendCanvas, {
    type: 'bar', // Use bar chart type
    data: {
        labels: frontendSkills.labels,
        datasets: [{
            label: 'Skill Level (%)',
            data: frontendSkills.data,
            backgroundColor: '#66b2b2', // Teal color for bars
            borderColor: '#004D40', // Dark teal color
            borderWidth: 1,
            hoverBackgroundColor: '#00796B', // Darker teal on hover
            hoverBorderColor: '#004D40'
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const label = context.label || '';
                        const value = context.raw || 0;
                        return `${label}: ${value}%`;
                    }
                }
            }
        }
    }
});

// Technical Skills Pie Chart - Backend
const backendSkills = {
    labels: ['Node.js', 'Express.js', 'SQLite', 'MongoDB', 'Python'], // python
    data: [80, 70, 65, 70, 90] // Percentages
};

new Chart(backendCanvas, {
    type: 'pie',
    data: {
        labels: backendSkills.labels,
        datasets: [{
            data: backendSkills.data,
            backgroundColor: [
                '#004D40', // Dark teal
                '#00796B', // Medium teal
                '#009688', // Teal
                '#B2DFDB',  // Light teal
                '#cce5e5'
            ],
            borderColor: '#004D40',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const label = context.label || '';
                        const value = context.raw || 0;
                        return `${label}: ${value}%`;
                    }
                }
            }
        }
    }
});

});

