/*
 * Udacity: https://github.com/udacity/frontend-nanodegree-resume
*/


/*
This is empty on purpose! Your code to build the resume will go here.
 */

//JSON
var bio = {
    "name" : "Harllan Andryê",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "83 xxxxx-xxxx",
        "email" : "harllanandrye@gmail.com",
        "github" : "HarllanAndrye",
        "location" : "Campina Grande - PB"
    },
    "welcomeMessage" : "Welcome to my resume.",
    "pictureUrl" : "images/fry.jpg",
    "skills" : ["PHP", "HTML", "CSS", "JavaScript"]
};

var work = {
    "jobs" : [
        {
            "employer" : "Winfox Softwares",
            "location" : "Campina Grande - PB",
            "title" : "Developer",
            "years" : 2.6,
            "description" : "Suporte técnico aos clientes; Manutenção e desenvolvimento de software (Delphi, SQL).",
            "dates" : "2013-2015"
        },
        {
            "employer" : "Garden Hotel",
            "location" : "Campina Grande - PB",
            "title" : "Computer technician",
            "years" : 0.6,
            "description" : "Suporte a Hardware e Software; Manutenção de Microcomputadores; Manutenção de Rede Cabeada e de Redes Sem Fio.",
            "dates" : "2010-2010"
        }
    ]
};

var education = {
    "schools" : [
        {
            "name" : "UFCG",
            "location" : "Universitário, Campina Grande - PB",
            "degree" : "Master",
            "course" : "Computer Science",
            "dates" : "2015-2017",
            "url" : "#"
        },
        {
            "name" : "ESAB",
            "location" : "Online",
            "degree" : "Specialization course",
            "course" : "Computers Network",
            "dates" : "2014-2015",
            "url" : "https://www.esab.edu.br/"
        },
        {
            "name" : "IFPB",
            "location" : "Dinamerica, Campina Grande - PB",
            "degree" : "Technology",
            "course" : "Telematics",
            "dates" : "2010-2013",
            "url" : "#"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "HTML5",
            "school" : "Curso em Video",
            "dates" : "2017-2017",
            "url" : "http://www.cursoemvideo.com/"
        },
        {
            "title" : "PHP básico",
            "school" : "Curso em Video",
            "dates" : "2017-2017",
            "url" : "http://www.cursoemvideo.com/"
        },
        {
            "title" : "PHP POO",
            "school" : "Curso em Video",
            "dates" : "2017-2017",
            "url" : "http://www.cursoemvideo.com/"
        },
        {
            "title" : "HTML and CSS Introduction",
            "school" : "Udacity",
            "dates" : "2017-2017",
            "url" : "https://br.udacity.com/"
        },
        {
            "title" : "JavaScript basic",
            "school" : "Udacity",
            "dates" : "2017-2017",
            "url" : "https://br.udacity.com/"
        }
    ]
};

var project = {
    "projects" : [
        {
            "title" : "Resume with JavaScript",
            "dates" : "06-2017",
            //"description" : "Course by Udacity about basic JS.",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images" : ["images/resume1.png", "images/resume2.png"]
        },
        {
            "title" : "Porject Google Glass (Curso em Video)",
            "dates" : "06-2017",
            //"description" : "Course by Curso em Video about HTML5 and CSS.",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images" : ["images/googleGlass_tela_inicial.png", "images/googleGlass_especificacoes.png"]
        }
    ]
};


bio.display = function(){
    // Nome e Função
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    //$("#header").prepend(formattedName + formattedRole); //prepend adiciona o código no início do html
    $("#name-role").prepend(formattedName + formattedRole);
    
    // Contatos
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedGit = formattedGit.replace("%data-link%", bio.contacts.github);
    var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
    var conts = formattedMobile + formattedEmail + formattedGit + formattedLoc;
    $(conts).appendTo("#topContacts, #footerContacts"); //http://api.jquery.com/appendTo/
    //$("#topContacts").append(formattedMobile + formattedEmail + formattedGit + formattedLoc);
    //$("#footerContacts").append(formattedMobile + formattedEmail + formattedGit + formattedLoc);
    
    // Acrescentando a imagem (foto) e messagem inicial
    var formattedPic = HTMLbioPic.replace("%data%", bio.pictureUrl);
    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    //$("#header").append(formattedPic + formattedMsg);
    $("#divPicProfile").append(formattedPic);

    $("#skills-message").append(formattedMsg);
    // Acrescentando as habilidades
    if(bio.skills.length > 0){
        //$("#header").append(HTMLskillsStart);
        $("#skills-message").append(HTMLskillsStart);
        for(var i=0; i<bio.skills.length; i++){
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};

work.display = function(){
    // Acrescentando experiências
    for(job in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        
        var formattedJob = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedJobTitle = formattedJob + formattedTitle;
        
        // "work-entry" é uma classe (definida no helper.js) e "last" é para especificar que quero adicionar o "formattedJobTitle" ao último elemento na página
        // (jQuery :last Selector)
        $(".work-entry:last").append(formattedJobTitle);
        
        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        
        $(".work-entry:last").append(formattedDate);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    }
};

// Encapsulamento
// Colocando a função "display" dentro do objeto "projects"
projects.display = function(){
    for(proj in project.projects){
        $("#projects").append(HTMLprojectStart);
        
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[proj].title);
        //$(".project-entry:last").append(formattedTitle);
        var formattedDate = HTMLprojectDates.replace("%data%", project.projects[proj].dates);
        //$(".project-entry:last").append(formattedDate);
        var formattedDesc = HTMLprojectDescription.replace("%data%", project.projects[proj].description);
        //$(".project-entry:last").append(formattedDesc);
        
        var titleDateDescription = '<div class="col-sm-6">' + formattedTitle + formattedDate + formattedDesc + '</div>';
        $(".project-entry:last").append(titleDateDescription);

        // "images" no objeto "project" é um array, por isso o uso do "for"
        var lengthImage = project.projects[proj].images.length;
        if(lengthImage > 0){
            var formattedImageArray = new Array();
            for(var i=0; i<lengthImage; i++){
                //var formattedImage = HTMLprojectImage.replace("%data%", project.projects[proj].images[i]);
                formattedImageArray[i] = HTMLprojectImage.replace("%data%", project.projects[proj].images[i]);
                //$(".project-entry:last").append(formattedImage);
            }
            var formattedImage = '<div class="col-sm-6"><div class="div-img-projects">' + formattedImageArray + '</div></div>';
            $(".project-entry:last").append(formattedImage.replace(",", ""));
        }
    }
};

education.display = function(){
    var formattedSchoolStart = HTMLschoolStart.replace("%data%", "");
    //$("#education").append(HTMLschoolStart);
    $("#education").append(formattedSchoolStart);
    for(school in education.schools){

        var formattedOnline = HTMLschoolOnline.replace("%data%", education.schools[school].url);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedCourse = HTMLschoolCourse.replace("%data%", education.schools[school].course);

        $(".education-entry:last").append('<div class="education-main">' + formattedOnline + formattedName + formattedDegree + formattedDates + formattedLoc + formattedCourse + '</div>');
    }
    
    // Cursos on-line
    if(education.onlineCourses.length > 0){
        $("#education").append(HTMLonlineClasses);
        var formattedSchoolStartOnline = HTMLschoolStart.replace("%data%", "flex-column"); // Add the class
        //$("#education").append(HTMLschoolStart);
        $("#education").append(formattedSchoolStartOnline);
        for(online in education.onlineCourses){
            var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
            var formattedOnDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);

            $(".education-entry:last").append('<div class="education-online">' + formattedUrl + formattedTitle + formattedSchool + formattedOnDates + '</div>');
        }
    }
    
};


// Mostrando as informações
bio.display();
work.display();
projects.display();
education.display();


/*
// Pega a localização (X e Y) de onde tocar na tela com o mouse
// JQuery avents (http://api.jquery.com/category/events/event-object/)
function logClickScreen(){
    $(document).click(function(loc) {
            //console.log("X value: " + loc.pageX + " and Y value: " + loc.pageY);
            logClicks(loc.pageX, loc.pageY); //Função do arquivo helper.js
        }
    );
}
logClickScreen();
*/

// Adicionando um botão para internacionalizar o nome
//Poderia ser:
//  var inName = function(name){...}
/*function inName(name){
    var names = name.trim().split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    return names.join(" ");
}
$("#main").append(internationalizeButton);
*/

// Adcicionando um mapa
//$("#mapDiv").append(googleMap);


