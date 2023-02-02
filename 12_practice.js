// Q:1:Write a program to print the marks of students in an object using for loops 
let marks ={
    tanzim:90,
    ehsan:20,
    zihad:30,
    }
    for(let i = 0;i<Object.keys(marks).length;i++){
     console.log("the marks of " + Object.keys(marks)[i] +  " " + marks[Object.keys(marks)[i]])
      
    }
    
    
    
    //Q:2:Using for in loops in Q1?
    
    /*let marks ={
    tanzim:90,
    ehsan:20,
    zihad:30,
    }
    for(let a in marks){
      console.log("the marks " + a + " " + marks[a])
    }
    */
    //Q:3:correct no while loops
    /*let a = 4
    let i
    while (i!=a){
      i = prompt("Enter a number")
    }
    */
    
    //correct no do while loops
    /*let a = 4
    let i
    do{
      (i = prompt("Enter a number"))
    }
      while(i!=4)
    */
    /*const mean=(a,s,d,f)=>{
      return (a+s+d+f)/4
    }
    console.log(mean(4,5,6,7))
    */