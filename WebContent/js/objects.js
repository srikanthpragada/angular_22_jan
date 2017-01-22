 // create object
 var course = {
   title: "Java SE",
   duration: 40,
   fee: 4000
 };
 document.write("<p/>" + course.title + ": " + course["fee"]);

 course = new Object();
 course.title = "Java EE";
 course.duration = 50;
 course.fee = 5000;
 course.faculty = "Srikanth Pragada";

 document.write("<p/>" + course.title + ": " + course["fee"]);
 document.write("<p/>" + course.faculty);


 for (var p in course) {
   document.write("<p/>" + p + ":" + course[p]);
 }

 function Course(title, duration, fee) {
   this.title = title;
   this.duration = duration;
   this.fee = fee;

   this.print = function() {
     document.write("<h1>" + this.title + "</h1>");
   };

   Course.prototype.toString = function() {
     return this.title + ":" +
       this.duration + ":" +
       this.fee;
   };
 }

 var oracle = new Course("Oracle", 40, 4000);
 oracle.print();
 document.write("<p/>" + oracle.toString());

 var android = new Course("Android Programming", 40, 6000);
 document.write("<p/>" + android.toString());
 
 
 
 
 
 
 