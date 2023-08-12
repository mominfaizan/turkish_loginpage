var count=0;
var time=0;
   
var flag=true;
function newfunction(){
    var namevalue=document.getElementById("name").value;
    var passwordvalue=document.getElementById("password").value;
    if(flag==false){

        alert("Sorry you reach out of limit now you cant sign up in this page!!")
    }
     if(namevalue!=0 && passwordvalue!=0)
    {
    if(flag)
    {
        alert("data succesfull enter")
    }
   
    

    }
}
 
function functi(){
    
    var namevalue=document.getElementById("name").value;
    var passwordvalue=document.getElementById("password").value;
   
    //for left
    let max=300;
    let min=-300;



    let difference = max- min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    rand= rand+"px";

    // for bottom
    let max2=40;
    let min2=-150;
    let difference2 = max2 - min2;
    let rand2 = Math.random();
    rand2 = Math.floor( rand2 * difference2);
    rand2 = rand2 + min2;
    rand2= rand2+"px";
 

  if(namevalue==0 || passwordvalue==0 ){
    if(flag==true)
    {

        count=count+1;
        document.getElementById("submitbutton").style.width="250px";
        document.getElementById("submitbutton").value="Enter Value First";
        document.getElementById("submitbutton").style.left=rand;
        document.getElementById("submitbutton").style.bottom=rand2;
    }
 
}
 else if(namevalue!=0 && passwordvalue!=0)
 {
    document.getElementById("submitbutton").style.left="1px";
    document.getElementById("submitbutton").style.bottom="50px";
    document.getElementById("submitbutton").style.width="155px";
    document.getElementById("submitbutton").value="Submit";
    document.getElementById("name").style.borderColor="black";
    document.getElementById("password").style.borderColor="black";
    document.getElementById("name").style.borderWidth="1px";
    document.getElementById("password").style.borderWidth="1px";
}
if(namevalue!=0)
{
    document.getElementById("name").style.borderWidth="1px";
    document.getElementById("name").style.borderColor="black";  
}
if(passwordvalue!=0)
{
    document.getElementById("password").style.borderWidth="1px";
    document.getElementById("password").style.borderColor="black";  
}
if(namevalue==0){
document.getElementById("name").style.borderColor="red";
document.getElementById("name").style.borderWidth="4px";
}
if(passwordvalue==0){
    document.getElementById("password").style.borderWidth="4px";
    document.getElementById("password").style.borderColor="red";
}

if(count==10 && time==0){
alert("you doing many incorrect attempt please enter infomation!  only 3 attemp left....")
time=1;
}
if(count==13){
    var namevalue=document.getElementById("name").value;
    flag=false;
    document.getElementById("submitbutton").style.left="1px";
    document.getElementById("submitbutton").style.bottom="50px";
    document.getElementById("submitbutton").style.width="155px";
    document.getElementById("submitbutton").value="Submit";
 }
}
 