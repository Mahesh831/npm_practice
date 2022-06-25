var fs = require('fs');

fs.unlink('./group/write.txt', function(){
    fs.rmdir('group');
});