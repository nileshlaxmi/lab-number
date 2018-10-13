const clickFunction = () => {
    let str = document.getElementById('ipText').value;
    if(str !== ""){
        document.getElementById('opText').innerHTML = str;
    }
    else{
        document.getElementById('opText').innerHTML = "Please enter a number";
    }
}

function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}
