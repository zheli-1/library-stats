const npm = require('npm-stats-api');
const fs = require('fs');
const counts = require('dependent-counts');

const libnames = fs.readFileSync('/home/zheli/node-lib-tests/liblist-1.txt', 'utf-8').split('\n');
// console.log(libnames);
var dependencytotal = 0;
var downloadstotal = 0;

var dependents = [];

for (var i = 0; i < libnames.length; i++) {
   // all package names that have express listed in `dependencies`

   var count = counts.find(count => count.name === libnames[i]);

   if (count != undefined) {
      console.log('dependents:' + count.totalDirectDependents);
      dependents.push(count.totalDirectDependents);
      dependencytotal += count.totalDirectDependents;
   }


   npm.stat(libnames[i], '2021-07-20', '2021-07-27', (err, res) => {
      var weeklycounts = res.downloads;
      if (weeklycounts != undefined) {
         console.log('weeklycounts:' + weeklycounts);
         if (weeklycounts < 37491350) {
            downloadstotal += weeklycounts;
            console.log(downloadstotal);
         }

      }

   });


   // npm.details(libnames[i], (err, res) => {
   //    // console.log(JSON.stringify(res));
   //    if (res.repository != undefined) {
   //       var url = res.repository.url;
   //       var gitinfo = GitUrlParse(url);
   //       var name_repo = gitinfo.full_name;


   //       console.log(name_repo);

   //       name_repo_ar.push(name_repo);
   //    }
   // });

}

var depents_ave = dependencytotal / libnames.length;
dependents.sort(function(a,b){ return a-b;});
console.dir(dependents, {'maxArrayLength': null});
console.log('dependency ave:' + depents_ave);
// console.log('downloads total:' + downloadstotal);


