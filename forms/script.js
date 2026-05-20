let form = document.getElementById("form")

form.addEventListener("submit",(event)=>{

    event.preventDefault();
    console.dir(event);
    let name = event.target.name4.value;
    let email = event.target.email.value;
    console.log(name);
    console.log(email);

});