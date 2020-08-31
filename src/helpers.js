export const checkBudget = (budget, rest) =>{
    let myClass;
    if((budget/4) > rest){
        myClass = "alert alert-danger"
    }else if((budget/2) > rest){
        myClass = "alert alert-warning"
    }else{
        myClass = "alert alert-success"
    }

    return myClass;
}