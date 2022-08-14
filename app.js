let person = prompt("Whats your name? ")

let gender = prompt("Your Gender?" , "male-female ")

let age = prompt("how old are you ?")
if (age <=0 ){
    prompt("Wrong Age ")
    }
   
    
    let coffe = prompt("Do you like coffe?" , "y|n")
    switch (coffe) {
        case "y":
            console.log("y");
            break;
        case "n":
        console.log("n");
    break;
        default:
            console.log(coffe="invalid");
            break;
     }
    
    let food = prompt("Do you like fastfood?" , "y|n")
    switch (food) {
        case "y":
            console.log("y");
            break;
        case "n":
        console.log("n");
    break;
        default:
            console.log(food="invalid");
            break;
     }
 
      let fruties = prompt("Do you like fruties?" , "y|n")
      switch (fruties) {
        case "y":
            console.log("y");
            break;
        case "n":
        console.log("n");
    break;
        default:
         console.log(fruties="invalid");
            break;
     }
 
let arrq = [coffe , food , fruties]
 console.log(arrq);


let welcome = confirm("you want to skip welcoming message ?")



if(!welcome){
    
        if(gender== "male"){
            alert( "hello Mr . " +person)
    
        }
    
        else if(gender=="female"){
            alert( "hello Ms . " +person)
    
        }
        else{
            alert("hello "+ person)
        }
    
    }

   let stars =Number( prompt("pleast rate of website","from 1 to 5" ))
   if (stars > 5) {
    stars = 5
    
   }
   else if (stars<= 0){
    stars=0
   }
   alert(`Thank you for rate
   your rate is ${"* ".repeat(stars)} `)