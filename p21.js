console.time('p21');

var c = {};
var s = 0;

for(var i= 0; i< 10000; i++){
    var sum = 1;
    for(var j =2    ; j <= i/2; j++){
        if(i%j===0) sum+=j;
    }
    
    if (c[sum] && c[sum] === i){
       console.log(sum + ' - ' + i) 
        s += i + sum;
    }
    
    c[i] = sum;
}

console.timeEnd('p21');
console.log(s);