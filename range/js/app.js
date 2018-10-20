const clickFunction = () => {
    let str = document.getElementById('ipText').value;
    let num = parseInt(str);
    
    
    if(str !== ""){
        let i=0, j=0, k=0;
        let ar = [], br = [], cr = [];
        for(i=1; i<=num; i++){
            for(j=1; j<=i; j++){
                if(i%j==0){
                    ar.push(j);
                }
            }

            for(j=0; j<ar.length; j++){
                let c = 0;
                for(k=1; k<=ar[j]; k++){
                    if(ar[j]%k == 0){
                        c++;
                    }
                }

                if(c==2){
                    br.push(ar[j]);
                }
            }

            for(j=0; j<br.length; j++){
                if(i%(Math.pow(br[j], 2)) == 0){
                    cr.push(i);
                }
            }
        }
        
        let uniqueArray = cr.filter(function(item, pos) {
            return cr.indexOf(item) == pos;
        })

        for(i=0; i<uniqueArray.length; i++){
            var para = document.createElement("p");
            para.innerHTML = "Lab Numbers "+ uniqueArray[i];
            document.getElementById('opText').appendChild(para);   
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
