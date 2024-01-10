//INITIALISATION OF THE VARIABLES 
const validationNameHtml=document.getElementById(emailValidation);
const buttonValidation=document.getElementById(btnValidation);

//ARRAY'S SECTION
const emails = ["figliouno@gmail.com", "figliodue@gmail.com", "figliotre@gmail.com", "figlioquattro@gmail.com", "figliocinue@gmail.com"]

//FUNCTION'S SECTION

for( let i = 0; i < emails.length; i++ ){
    console.log( emails[i] )
}

buttonValidation.addEventListener("click", function(){
    console.log(validationNameHtml.value)
})
