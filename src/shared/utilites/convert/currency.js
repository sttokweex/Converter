export const convertCurrency=(amount,rateFrom,rateTo)=>{
    const amountNumber = Number(amount)
    const rateFromNumber=Number(rateFrom)
    const rateToNumber=Number(rateTo)
    if(isNaN(amountNumber)||isNaN(rateToNumber)||isNaN(rateFromNumber)){
        return -1;
    }
    return amount * rateTo/rateFrom

}