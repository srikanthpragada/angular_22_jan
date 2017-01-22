 function call(f)
 {
   f();
 }
 
 function print()
 {
   document.write("In Print");
 }
 
 function print2()
 {
   document.write("In Print2");
 }
 
 call(print2);
 
 /*
  var add = function(a, b) {
    return a + b;
  };

  document.write(add(10, 20) + "<p/>");

  // IIFE

  (function() {
    document.write("IIFE<p/>");
  })();



  function totalNumbers() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total;
  }

  document.write(totalNumbers(10, 20, 30) + "<p/>");

  document.write(totalNumbers(10, 20, 30, 50, 67));
  
  */