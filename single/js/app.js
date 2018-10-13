const clickFunction = () => {
    let str = document.getElementById('ipText').value;
    if(str !== ""){
        
        let num = Number(str);
        let ar = [], i, br = [];
        for(i=1; i<=num; i++){
            if(num%i == 0){
                ar.push(i);
            }
        }

        for(i=0; i<ar.length; i++){
            let c = 0;
            for(let j=1; j<=ar[i]; j++){
                if(ar[i]%j==0){
                    c++;
                }
            }

            if(c==2){
                br.push(ar[i]);
            }
        }

        for(i=0; i<br.length; i++){
            if(num % (Math.pow(br[i],2)) == 0){
                document.getElementById('opText').innerHTML = "Lab Number";
            }
            else{
                document.getElementById('opText').innerHTML = "Not a Lab Number";
            }
        }
        
    }
    else{
        document.getElementById('opText').innerHTML = "Please enter a number";
    }
}

function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}
