


let person = prompt ("what is your name")

let gender = prompt("what is your gender" , " male / female")

let age = prompt ("what is your age")

let confermm= confirm("do you want to skip welcoming message ?")


if(age <=0 ){
    alert("error")

}

if(!confermm){
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

