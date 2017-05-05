function timer(){        
    for(var i = 0 ; i <= 10 ; i++){
        setTimeout(function(x) { 
            return function() { 
                console.log(x); 
            }; 
        }(i), 1000*i);
    }
}

timer();