console.time('p9');
var n = 1000;

var a = 1;
var b = a + 1;
var c = n - a - b;
var p = 0;

while(b > a){
    b = a +1;
    while( c > b){
        c = n - a -b;
        if (a*a + b*b === c*c) break;
        b ++;
    }
    if (a*a + b*b === c*c) break;

    a ++;
}





console.timeEnd('p9');
console.log(a + ' '+ b + ' ' +c);
console.log(a*b*c);


console.time('p9-2');


console.timeEnd('p9-2');
