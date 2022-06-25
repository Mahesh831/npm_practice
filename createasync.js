var fs = require('fs');

fs.mkdir('group', function(){
    fs.readFile('readMe.txt','utf8', function(err, data){
        fs.writeFile('./group/write.txt', data);

    });
});

