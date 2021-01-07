function base10ToBinary(n){
    let binaryString = "";
    function base10ToBinaryHelpeer(n){
        if(n<2){
            binaryString += n;
            return;
        }else{
            base10ToBinaryHelpeer(Math.floor(n/2));
            base10ToBinaryHelpeer(n%2);
        }
    }
    base10ToBinaryHelpeer(n);
    return binaryString;
}

console.log(base10ToBinary(532));