//INITIALISATION OF THE VARIABLES 
const validationNameHtml=document.getElementById("emailValidation");
const buttonValidation=document.getElementById("btnValidation");
const resultEmail=document.getElementById("result");

//ARRAY'S SECTION
const emails = ["figliouno@gmail.com", "figliodue@gmail.com", "figliotre@gmail.com", "figlioquattro@gmail.com", "figliocinue@gmail.com"]

//FUNCTION'S SECTION

buttonValidation.addEventListener("click", function(){
    console.log(validationNameHtml.value)

    let checkingMail = false

    for( let i = 0; i < emails.length; i++ ){
        if(emails[i]==="figliouno@gmail.com"){
            checkingMail = true 
        }
    }

    if (checkingMail = true){
        console.log("La mail è esistente")
        resultEmail.innerHTML = ("La mail è esistente")
    } else if (checkingMail = false) {
        console.log("La mail non è esistente") 
        resultEmail.innerHTML = ("La mail non è esistente")
    }
    
})
