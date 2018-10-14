const clickFunction = () => {
    let str = document.getElementById('ipText').value;
    let num = parseInt(str);
    
    if(str !== ""){
        for(let i=1; i<=num; i++){
            let ar = i.toString().split("");
            let sum = 0;
    
            for(let j=0; j<ar.length; j++){
                let number = parseInt(ar[j]);
                sum = sum + Math.pow(number, (j+1));
            }
            
            if(sum === i){
                var para = document.createElement("p");
                para.innerHTML = "Disarium Numbers "+ i;
                document.getElementById('opText').appendChild(para);
            }

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
    }
    else{
        document.getElementById('opText').innerHTML = "Please enter a number";
    }
}

function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}
