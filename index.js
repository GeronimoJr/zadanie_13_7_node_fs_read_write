var fs = require('fs');
var colors = require('colors');

fs.readdir('.', 'utf-8', function(err, files) {
	var data = files;
    console.log(files);
    fs.writeFile('./nowy.txt', data, function(err) {
    if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
    console.log('Zapisano!');
	});
});