//Calculator using switch case

function add(n1,n2){
    return n1+n2;
}

function substract(n1,n2){
    return n1-n2;
}

function multiply(n1,n2){
    return n1*n2;
}

function divide(n1,n2){
    return n1/n2;
}

let operation = '+';

let n1 = 2;
let n2 = 2;

let result;

switch(operation){
    case"+":
        result = add(n1,n2);
        break;

    case"-":
        result = substract(n1,n2);
        break;
        
    case"*":
        result = multiply(n1,n2);
        break;
    
    case"/":
        result = divide(n1,n2);
        break;
    
    default:
        result = "Invalid Operation";
    }

    console.log("The result of this operation is : " + result);
