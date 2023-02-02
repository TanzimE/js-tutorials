let age= prompt("Enter your age:")
age=Number.parseInt(age)
if(age<0){
  alert("Age is not valid")
}
//else if(age>=18){
//  alert("He can drive")
//}
else if(age>9 && age<=18)
{
  alert ("he can do this job")
}
else{
  alert("he cant do the job")
  
}

console.log(age)