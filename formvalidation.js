function checkData(){
    //window.alert("Hi");
    //let uname = document.getElementById("fname").value;

    let uname = document.myform.fname.value;
    let upass=document.myform.password.value;
    let uemail=document.myform.email.value;
    let ucontact=document.myform.contact.value;
    let uedu = document.myform.edu;
    let ugender=document.myform.gender;
    let regName = "^[a-zA-Z ]{2,20}$";
    let regPass= "^[a-zA-Z0-9!@#$%^&*()_+]{8,12}$";
    let regEmail="^[a-zA-Z0-9@.]{8,25}$";
    let regContact="^[0-9]{9,11}$";

    if(uname.trim() === ""){
        window.alert("Fullname is required");
        document.getElementById("fname").focus();
        return false;
    }

    if(!uname.trim().match(regName)){
        window.alert("Fullname must contain only characters minimum:2 and maximum:20");
        return false;
    }

    if(upass.trim() === ""){
        window.alert("Password is required");
        document.getElementById("password").focus();
        return false;
    }

    if(!upass.trim().match(regPass)){
        window.alert("Passsword should contain mininum 8 chracters and maximum 12 characters, atleast one uppercase letter, one lowercase letter,one number,one special symbol(!@#$%^&*()_+)");
        return false;
    }

    if(uemail.trim() === ""){
        window.alert("Email is required");
        document.getElementById("email").focus();
        return false;
    }

    if(!uemail.trim().match(regEmail)){
        window.alert("Enter a valid email");
        return false;
    }

    if(ucontact.trim() === ""){
        window.alert("Phonenumber is required");
        document.getElementById("fname").focus();
        return false;
    }

    if(!ucontact.trim().match(regContact)){
        window.alert("Phone number should contain only numbers and minimum 9 numbers and maximum 11 numbers");
        return false;
    }


    if(ugender[0].checked == false && ugender[1].checked == false && ugender[2].checked == false){
        window.alert("Please Select Your Gender");
        return false;      
    }

    if(uedu[0].checked == false && uedu[1].checked == false && uedu[2].checked == false && uedu[3].checked == false){
        window.alert("Please Select Your Qualification");
        return false;
    }

}