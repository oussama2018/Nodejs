var fs = require("fs");


fs.writeFile('welcome.txt', 'Hello Node', function(err) {
   if (err) {
      return console.error(err);
   }
   fs.readFile('hello.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log(data.toString());
 });
   })