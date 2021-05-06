(function (window){
    var hello = {};
    var printWord = "Hello";
    
    hello.print = function (names) {
      console.log(printWord + " " + names);
    }
     
    window.hello= hello;
    })(window);