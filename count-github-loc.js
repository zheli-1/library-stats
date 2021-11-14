const fs = require('fs');

const repoNames = fs.readFileSync('/home/zheli/string/github-loc/git-loc.log', 'utf-8')
.split('\n');

console.log(repoNames);
var lineofcode = [];
for(var i =2; i < repoNames.length; i=i+3){

    lineofcode.push(repoNames[i]);
}

// console.log(lineofcode);
var codenum = [];
for(var i =0; i < lineofcode.length; i++){
    codenum.push( lineofcode[i].split('Line of code: \t ')[1]);
}

codenum.sort(function(a,b){ return a-b;})
console.dir(codenum, {'maxArrayLength': null});

var total=0;
var total_1 = [];
for(var i =0; i < codenum.length; i++){
    total += parseInt(codenum[i]);
    if( parseInt(codenum[i]) < 20000){
        total_1.push(parseInt(codenum[i]));
    }
        
}
console.log(total)
var ave = total/codenum.length;

console.log(ave);

console.dir(total_1, {'maxArrayLength': null});
var total_ave = 0;
for(var i=0; i < total_1.length; i++){
    total_ave += total_1[i];
}
console.log(total_ave);
console.log(total_ave/total_1.length);