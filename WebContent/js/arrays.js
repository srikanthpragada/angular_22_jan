// Code goes here

function printArray1(a) {
  // for loop to traverse array
  for (var i = 0; i < a.length; i++)
    document.write("<p/>" + a[i]); // i contains only index and not value
}

function printArray2(a) {
  // for in loop to traverse array
  for (var i in a)
    document.write("<p/>" + a[i]);
}

var langs = ["Java", "C#", "JavaScript"];

//printArray1(langs);
//printArray2(langs);

var databases = new Array("Oracle", "MySQL", "Sql Server");

// printArray2(databases);

var colors = new Array();
colors[0] = "Red";
colors[1] = "White";
colors[2] = "Black";
colors[3] = "Blue";
colors[4] = "Orange";

// printArray1(colors);
//  printArray2(colors);

document.write("<p/>" + colors.valueOf() + "<p/>");

//colors.sort();

//document.write("<p/>" + colors.valueOf() + "<p/>");

var selcolors = colors.slice(1, 3);

document.write("<p/>" + selcolors.valueOf() + "<p/>");

colors.splice(1, 2);

document.write("<p/>" + colors.valueOf() + "<p/>");



