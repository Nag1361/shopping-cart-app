function validatePayment(card){
    if(card.length == 16){
        console.log("Payment Success");
    }else{
        console.log("Invalid Card");
    }
}