console.time("p24");

//012
//021
//102
//120
//201
//210


a = [];
var p = 10;
var tot = 1;
var pos = 999999;
//var pos = 1000000; // one milion

for (var i =0; i<p; i ++){
    a.push(i);
    tot = tot * a.length;
}

var r = '';
while(p > 1){
    tot = tot / p;
    
    var i = Math.floor(pos / tot);
    pos = pos % tot;
    var sp = a.splice(i,1);
    r += sp[0] + '';
    
    p--;
}

r+= a[0];

console.timeEnd("p24");
console.log(r);

