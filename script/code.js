/********************************************/
let about = document.querySelector('section#about .row:last-child');

let aboutContents =[
 
    "Junior software developer ,data Analyst & Business Analyst . I am in love with technology and very much want to be part of what it will introduce to this world. Topics such as AI and Machine learning very much capture my attention",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum numquam assumenda recusandae tenetur animi praesentium facilis inventore, quasi dolor modi iure ducimus iste facere nam, maiores mollitia sed obcaecati repudiandae?"
]

//loop through the contents
aboutContents.forEach((content, i)=>{
about.innerHTML += `        
<p class="lead">${i+1}. ${content}</p>`
})
/********************************************************/
// Education
let education = [
    {
        id: 1,
        year: 2022,
        description: 'Full stack web developer Bootcamp',
        place: 'Life Choices Academy',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 2,
        year: 2012,
        description: 'Data Analyst Bootcamp',
        place: 'Capaciti',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 3,
        year: 2021,
        description: 'Front end web development bootcamp',
        place: 'IT Varsity',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 4,
        year: 2015,
        description: 'System development',
        place: 'Capaciti',
        type: 'certificate',
        certificate: ''
    },
]
  
let divEducation = document.querySelector('#education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4"><span class='year'>${data.year}</span></h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
}) 

let skills =[
    {
    skill:`HTML`,
    rating:`Master`,
    },
    // 
       {
    skill:`CSS`,
    rating:`Master`,
    },
    // 
    {
    skill:`Javascript`,
    rating:`Master`,
     },
    //  
    {
    skill:`SQL`,
    rating:`Master`,
     },
    // 
    {
    skill:``,
    rating:`Master`,
        },
        
        
        
]
let skill  = document.querySelector('#skills');
education.forEach((data)=> {
    divEducation.innerHTML +='' })