(function (window){
    var goodbye = {};
    var printWord = "Goodbye";
    
    goodbye.print = function (names) {
      console.log(printWord + " " + names);
    }
     
     window.goodbye = goodbye;
    })(window);