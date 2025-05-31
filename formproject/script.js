let formelement = document.getElementById('formid');
let nameelement = document.getElementById('name');
let nameerror = document.getElementById('nameerrormsg');
let emailelemnt = document.getElementById('email');
let emailerror = document.getElementById('emailerrormsg');
let url = "https://gorest.co.in/public-api/users";
let Status = document.getElementById('status');
let Gendmale = document.getElementById('gendermale');
let GendFemale = document.getElementById('genderfemale');
let formdata = {
    name : "",
    email : "",
    status : "Active",
    gender : "Male"
}


function submitdata(formdata){
    let options = {
        method : "POST",
        headers : {
            "Content-Type":"application/json",
            Accept : "application/json",
            Authorization : "Bearer 00b5d751b922bfaff32e6065006b3509b7bf845451ac908ebfa20ce083b1d1aa"
        },
        body:JSON.stringify(formdata)
    }

    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        if(data.code === 422){
            if(data.data[0].message === "has already been taken"){
                emailerror.textContent = "Email already exists";
                emailerror.classList.add('errormsg');
            }
        }
    })
}

nameelement.addEventListener('change',function(e){
    if(nameelement.value === ""){
        nameerror.textContent = "Required*";
        nameerror.classList.add('errormsg');
    }else{
        nameerror.textContent = "";
    }
    formdata.name = e.target.value;
});

emailelemnt.addEventListener('change',function(e){
    if(emailelemnt.value === ""){
        emailerror.textContent = "Required*";
        emailerror.classList.add('errormsg');
    }else{
        emailerror.textContent = "";
    }
    formdata.email = e.target.value;
});
Status.addEventListener('change',function(e){
    formdata.status = e.target.value;
});
Gendmale.addEventListener('change',function(e){
    formdata.gender = e.target.value;
});
GendFemale.addEventListener('change',function(e){
    formdata.gender = e.target.value;
});


function validate(formdata){
    let {name , email} = formdata;
    if(name.value === ""){
        nameerror.textContent = "Required*";
        nameerror.classList.add('errormsg');
    }else{
        nameerror.textContent = "";
    }


    if(email.value === ""){
        emailerror.textContent = "Required*";
        emailerror.classList.add('errormsg');
    }else{
        emailerror.textContent = "";
    }
}

formelement.addEventListener('submit',function(event){
    event.preventDefault();
    validate(formdata);
    submitdata(formdata);
    
});