let num=localStorage.getItem("Phn");
console.log(num);
let msg=document.createElement("p");
msg.innerText="Enter otp sent to :"+" "+num ;
msg.setAttribute("id","msg");
let line2=document.createElement("p");
line2.innerText="Change Number";
line2.style.color="crimson";
let input=document.createElement("input");
input.setAttribute("id","input");
let password=JSON.parse(localStorage.getItem("myotp"));


let btn=document.createElement("button");
btn.innerText="Verify OTP";
btn.setAttribute("id","otp");
btn.addEventListener("click",()=>{
    let Value=document.querySelector("#input").value;
    console.log(Value);
    localStorage.setItem("enteredvalue",Value);
    let finalvalue= localStorage.getItem("enteredvalue");
    for(let i=0; i<password.length; i++){
        if(password[i]==finalvalue){
            alert("login Successful");
            window.location.href="index.html";
        }else{
            alert("Please fill correct otp");
           // window.location.href="login.html"
        }
    }
})
let last=document.createElement("p");
last.innerText="By continuing,you agree to Meesho's Terms & conditions and Privacy Policy";
last.setAttribute("id","last");



details.append(msg,line2,input,btn,last);