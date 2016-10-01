/**
 * Created by debrachong on 9/27/16.
 */
var fs = require('fs');
fs.readFile('Assignment1_names-1.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log("Here is the data: " + data);
    for (var p = 0; p < data.length;p++) {
        if (data[p] === "["){
            console.log(p);

        } else if (data[p] === "]"){
            console.log(p);
    }
    }
    var sToList = data.slice(13,2702);
    var cleanList = sToList.split(',');

    console.log(cleanList.sort());

});
console.log('the call back');
