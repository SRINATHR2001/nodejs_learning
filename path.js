const path = require('path');
console.log(__dirname );
console.log(__filename);

console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.isAbsolute(__filename));

// console.log(path.join('folder1','folder2','index.html'));
// console.log(path.join('/folder1','folder2','index.html'));
// console.log(path.join('/folder1','//folder2','index.html'));
// console.log(path.join('/folder1','//folder2','../index.html'));
// console.log(path.join(__dirname,'index.html'));

console.log(path.resolve('folder1','folder2','index.html'));
console.log(path.resolve('/folder1','folder2','index.html'));
console.log(path.resolve('/folder1','/folder2','index.html'));
console.log(path.resolve('/folder1','/folder2','../index.html'));
console.log(path.resolve('index.html'));

