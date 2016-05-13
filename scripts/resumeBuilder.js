// Create and append biography object
var bio = {
    'role': 'Junior Content Developer',
    'name': 'Conroy Iwhiwhu',
    'contacts': {
        'mobile': '0796-459-2183',
        'email': 'conroy.iwhiwhu@gmail.com',
        'github': 'conroyiwhiwhu.github.io',
        'twitter': '@techConroy',
        'location': 'Bristol, UK'
    },
    'welcomeMessage': '<br>I am tech-curious. I am an engineer by training and have worked in the fields of research and manufacturing & production engineering.  I have become particularly interested in: front-end web & mobile (android) development. I love learning new languages and frameworks and can be a strong asset to an engineering team that is based on collaboration and creativity.',
    'skills': ['JavaScript &#9671;', 'HTML5 &#9671;', 'CSS3 &#9671;',
        'Object-Oriented Programming &#9671;', 'Bootstrap &#9671;',
        'Responsive Web Design &#9671;', 'Wireframes &#9671;',
        'Mock-ups &#9671;', 'Browser Developer Tools &#9671;',
        'Sublime Text &#9671;', 'W3C Validation &#9671;',
        'Google Map API &#9671;', 'PostgreSQL &#9671;',
        'Git/Github &#9671;', 'Web Development &#9671;',
        'Google App Engine &#9671;', 'Webapp2 &#9671;',
        'Google Datastore &#9671;', 'Pycharm &#9671;',
        'Visual Studio &#9671;', 'Java &#9671;',
        'Android Development &#9671;', 'Big Data &#9671;',
        'Data Science &#9671;', 'jinja2 (HTML Template)  &#9671;',
        'jQuery &#9671;', 'AngularJS &#9671;', 'TypeScript &#9671;',
        'Sass &#9671;', 'HTML5 APIs &#9671;', 'DHTML &#9671;',
        'JSON &#9671;'
        ],
    'biopic': 'images/journey.gif'
};
bio.display = function () {
    'use strict';
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    $('#header').prepend(formattedRole);
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    $('#header').prepend(formattedName);
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    $('#header, #footerContacts').append(formattedMobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    $('#header, #footerContacts').append(formattedEmail);
    var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts.github);
    $('#header, #footerContacts').append(formattedGitHub);
    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    $('#header, #footerContacts').append(formattedTwitter);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    $('#header, #footerContacts').append(formattedLocation);
    var formattedWelcome = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header').append(formattedWelcome);
    var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
    $('#header').append(formattedPic);
    if (bio.skills.length) {
        $('#header').append(HTMLskillsStart);
        for (var index in bio.skills) {
            var formattedSkills = HTMLskills.replace('%data%', bio.skills[
                index]);
            $('#skills').append(formattedSkills);
        }
    }
};
bio.display();
// Create and append work object
var work = {
    'jobs': [{
        'employer': 'UK Ministry of Defence',
        'title': 'Capability Manager, In-service Support',
        'location': 'Bristol City, UK',
        'dates': 'February 2016 - Future',
        'description': 'Curabitur pharetra luctus augue, non posuere orci tristique vel. Sed posuere nisi nec lacus ullamcorper, ac vulputate nisl consequat. Nullam sollicitudin nulla vel felis faucibus aliquam. Nunc sit amet velit orci. Proin sed orci fringilla, elementum felis condimentum, convallis augue. Aliquam erat volutpat. Mauris tempus nunc sit amet aliquet bibendum. Praesent vestibulum cursus ex, quis laoreet eros consectetur ac. Ut congue libero quis mauris egestas feugiat. Sed pharetra lorem et magna fringilla, a volutpat nibh sollicitudin. Nullam sagittis sollicitudin urna, sed sollicitudin mauris ornare id.'
    }, {
        'employer': 'Upwork',
        'title': 'Freelancer',
        'location': 'Remote',
        'dates': 'October 2015 - Future',
        'description': 'Lorem ipsum dolor sit amet, in donec. Faucibus suspendisse, sed leo imperdiet. Posuere leo rutrum, pellentesque vitae. Orci porttitor, a praesent arcu, aliquam imperdiet vestibulum. Odit aliquam arcu, lacus wisi posuere.'
    }, {
        'employer': 'Airbus Group',
        'title': 'Research Engineer - Digital Manufacturing',
        'location': 'Bristol City, UK',
        'dates': 'November 2012 - September 2015',
        'description': 'Nullam tempor mi at libero elementum varius. Sed lobortis lacus feugiat est tristique, nec imperdiet turpis scelerisque. Ut sed urna malesuada, scelerisque dui sit amet, tempus mauris. Integer bibendum egestas urna, a bibendum sem gravida quis. Cras accumsan rhoncus vestibulum. Nam eu blandit leo. Integer at consectetur nunc, et tempus urna. Integer sit amet sollicitudin elit. Donec nec posuere erat. Sed vestibulum nisl neque, vitae tincidunt ex molestie quis. Nulla fringilla viverra turpis in volutpat. Cras vel orci quis velit efficitur ullamcorper sed eu ex. Nullam vel ex nec lectus imperdiet luctus vitae vel nibh. Donec eleifend velit eros, eu efficitur justo molestie id. In egestas gravida lectus. Ut ipsum odio, suscipit sit amet molestie non, scelerisque sed mi. Aenean sed augue eu arcu faucibus molestie. Sed eget ante gravida, rhoncus velit eu, tempus quam. Sed fermentum at odio sed commodo. Fusce lobortis cursus purus, quis consequat est faucibus at. Etiam massa felis, sodales at sodales sed, iaculis quis arcu.'
    }, {
        'employer': 'Nissan Motor Co., Ltd.',
        'title': 'Facilities Engineer',
        'location': 'Sunderland, UK',
        'dates': 'April 2012 – October 2012',
        'description': ' Morbi eget justo ut velit dapibus malesuada. Nunc elementum, neque quis convallis tempus, lacus ante tristique est, id porta tortor leo eget orci. Suspendisse hendrerit interdum lacus et condimentum. Mauris at ex dignissim, bibendum libero at, fermentum lectus. Maecenas porttitor purus quis augue interdum, eget malesuada neque placerat. Ut hendrerit risus in nibh elementum, quis vestibulum ipsum vulputate. Nulla facilisi. In consectetur et lacus vel tincidunt. Quisque feugiat ipsum et erat rhoncus efficitur. In in augue at enim tempor sollicitudin.'
    }, {
        'employer': 'JTEKT Corporation',
        'title': 'Production Engineer',
        'location': 'Sheffield, UK',
        'dates': 'July 2011 – March 2012',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...'
    }]
};
work.display = function() {
    'use strict';
    for (var job in work.jobs) {
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[
            job].employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job]
            .title);
        var formattedEmployerInfo = formattedEmployer + formattedTitle;
        $('.work-entry:last').append(formattedEmployerInfo);
        var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[
            job].location);
        $('.work-entry:last').append(formattedLocation);
        var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job]
            .dates);
        $('.work-entry:last').append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace('%data%',
            work.jobs[job].description);
        $('.work-entry:last').append(formattedDescription);
    }
};
work.display();
// Create and append education object
var education = {
    // education.schools array
    'schools': [{
        'name': 'Udacity',
        'location': 'San Francisco, Bay Area',
        'degree': 'Nanodegree Credentials',
        'majors': ['computer Programming, Minor: Computer Science'],
        'dates': '2015 - 2016',
        'url': 'http://www.udacity.com/'
    }, {
        'name': 'University of California, Irvine',
        'location': 'Orange County, California Area',
        'degree': 'Coursera Specialization',
        'majors': [
            'Project Management Principles and Practices, Minor: Continuous Business Improvement'
        ],
        'dates': '2015 - 2016',
        'url': 'http://uci.edu/'
    }, {
        'name': 'University of Sunderland',
        'location': 'Sunderland, Tyne & Wear',
        'degree': 'Bachelor of Engineering (Honours) Degree',
        'majors': [
            'Manufacturing Engineering, Minor: Mechanical Design'
        ],
        'dates': '2008 - 2011',
        'url': 'http://www.sunderland.ac.uk/'
    }],
    // education.onlineCourses array
    'onlineCourses': [{
        'title': 'Introduction to HTML, CSS and JavaScript Web Development',
        'school': 'Microsoft',
        'date': '2016',
        'url': 'https://www.edx.org/course/javascript-html-css-web-development-microsoft-dev211-1x'
    }, {
        'title': 'Complete Web Developer',
        'school': 'Udemy',
        'date': 'COURSE PROGRESS: Almost completed',
        'url': 'https://www.udemy.com/complete-web-developer-course/'
    }, {
        'title': 'Completed Android Developer',
        'school': 'Udemy',
        'date': 'COURSE PROGRESS: In progress',
        'url': 'https://www.udemy.com/the-complete-android-developer-course/'
    }, {
        'title': 'Analytical Problem Solving and Design Thinking',
        'school': 'Fullbridge',
        'date': '2016',
        'url': 'https://www.edx.org/course/career-edge-analytical-problem-solving-fullbridgex-career4x'
    }, {
        'title': 'Technological, Social, and Sustainable Systems',
        'school': 'Arizona State University',
        'date': '2016',
        'url': 'https://www.edx.org/course/technological-social-sustainable-systems-asux-cee181x'
    }, {
        'title': 'Contract Law: From Trust to Promise to Contract',
        'school': 'Harvard University',
        'date': '2016',
        'url': 'https://www.edx.org/course/contract-law-trust-promise-contract-harvardx-hls2x-0'
    }, {
        'title': 'Inclusive Leadership',
        'school': 'Catalyst Inc.',
        'date': '2015',
        'url': 'https://www.edx.org/course/inclusive-leadership-training-becoming-catalystx-il2x-1'
    }, {
        'title': 'Teamwork and Communication',
        'school': 'Fullbridge',
        'date': '2015',
        'url': 'https://www.edx.org/course/career-edge-communication-teamwork-fullbridgex-career2x'
    }, {
        'title': 'Data Science and Machine Learning Essentials',
        'school': 'Microsoft',
        'date': '2015',
        'url': 'https://www.edx.org/course/data-science-machine-learning-essentials-microsoft-dat203x-0'
    }, {
        'title': 'Introduction to Big Data',
        'school': 'University of California, San Diego',
        'date': '2015',
        'url': 'https://www.coursera.org/learn/intro-to-big-data'
    }, {
        'title': 'Introduction to Bootstrap',
        'school': 'Microsoft',
        'date': '2015',
        'url': 'https://www.edx.org/course/introduction-bootstrap-tutorial-microsoft-dev203x-0'
    }, {
        'title': 'Introduction to Systems Engineering',
        'school': 'UNSW Australia (The University of New South Wales)',
        'date': '2014',
        'url': 'https://www.coursera.org/learn/systems-engineering'
    }]
};
education.display = function() {
    'use strict';
    // append schools.onlinecourses
    for (var school in education.schools) {
        $('#education').append(HTMLschoolStart);
        var formattedSchool = HTMLschoolName.replace('%data%', education.schools[
            school].name);
        formattedSchool = formattedSchool.replace('#', education.schools[
            school].url);
        var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[
            school].degree);
        var schoolInfo = formattedSchool + formattedDegree;
        $('.education-entry:last').append(schoolInfo);
        var formattedLocation = HTMLschoolLocation.replace('%data%',
            education.schools[school].location);
        $('.education-entry:last').append(formattedLocation);
        var formattedDate = HTMLschoolDates.replace('%data%', education.schools[
            school].dates);
        $('.education-entry:last').append(formattedDate);
        var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[
            school].majors);
        $('.education-entry:last').append(formattedMajor);
    }
    // append education.onlinecourses
    $('#onlineCourses').append(HTMLonlineStart);
    for (var classes in education.onlineCourses) {
        var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[
            classes].title);
        formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[
            classes].school);
        schoolInfo = formattedTitle + formattedSchool;
        $('.online-entry:last').append(schoolInfo);
        formattedDate = HTMLonlineDates.replace('%data%', education.onlineCourses[
            classes].date);
        $('.online-entry:last').append(formattedDate);
        var formattedUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[
            classes].url);
        $('.online-entry:last').append(formattedUrl);
    }
};
education.display();
// Create and append projects object
var projects = {
    'projects': [{
        'title': 'Create a Movie Website',
        'dates': '2015',
        'description': 'Created a simple movie website with images and trailers, this project demonstrates knowledge of Object Oriented Programming.',
        'images': ['images/project-3-create-a-movie-website.gif']
    }, {
        'title': 'Code Your Own Quiz',
        'dates': '2015',
        'description': 'Built a fill-in-the blanks type quiz to leverage the power of functions in Python and mastered the ability to automate repetitive tasks that can be done on a computer.',
        'images': ['images/project-2-code-your-own-quiz.gif']
    }, {
        'title': 'Build a Music Store',
        'dates': '2015',
        'description': 'Built a music store website with album images and details, this project demonstrates intermediate knowledge of Bootstrap for developing responsive, mobile first web application.',
        'images': ['images/music-store-page-layout.gif']
    }, {
        'title': 'Make A Web Page',
        'dates': '2015',
        'description': 'Built using HTML and CSS, this project demonstrates knowledge of basic website design.',
        'images': ['images/project-1-make-a-web-page.gif']
    }]
};
projects.display = function() {
    'use strict';
    for (var project in projects.projects) {
        $('#projects').append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[
            project].title);
        $('.project-entry:last').append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[
            project].dates);
        $('.project-entry:last').append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace('%data%',
            projects.projects[project].description);
        $('.project-entry:last').append(formattedDescription);
        if (projects.projects[project].images.length > 0) {
            var formattedImage = HTMLprojectImage.replace('%data%',
                projects.projects[project].images);
            $('.project-entry:last').append(formattedImage);
        }
    }
};
projects.display();

function inName() {
    var name = window.name;
    name = name.trim().split(' ');
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + ' ' + name[1];
}
var name = $('#name').text();
$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);
