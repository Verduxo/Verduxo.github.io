function changeClass(){
    
    if ( document.getElementById("body").classList.contains('crt') ){
        document.getElementById("body").classList.remove('crt');
        document.getElementById("oldTVcheck").checked = false;

    }
    

    else{
        document.getElementById("body").classList.toggle('crt');
        document.getElementById("oldTVcheck").checked = true;

    }
}